import type { Craving } from './store';

export const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

export function splitDuration(ms: number) {
  const t = Math.max(0, Math.floor(ms / 1000));
  return {
    d: Math.floor(t / 86400),
    h: Math.floor((t % 86400) / 3600),
    m: Math.floor((t % 3600) / 60),
    s: t % 60,
  };
}

/** Value for <input type="datetime-local"> in the user's own time zone. */
export function toLocalInput(ms: number): string {
  const d = new Date(ms - new Date(ms).getTimezoneOffset() * 60000);
  return d.toISOString().slice(0, 16);
}

export function fromLocalInput(v: string): number | null {
  const t = new Date(v).getTime();
  return Number.isNaN(t) ? null : t;
}

export interface Ctx {
  place: string;
  feeling: string;
  before: string;
}

/**
 * Picks one tool from the user's list. Tools that worked before in a similar
 * situation get more weight; tools that were tried and followed by a slip get less.
 */
export function pickSuggestion(
  tools: string[],
  cravings: Craving[],
  ctx: Ctx,
  exclude: string[] = [],
  rand: () => number = Math.random,
): string | null {
  const pool = tools.filter((t) => !exclude.includes(t));
  if (pool.length === 0) return null;
  const weights = pool.map((tool) => {
    let w = 1;
    for (const c of cravings) {
      if (c.suggestion !== tool || !c.tried) continue;
      const same =
        (c.place === ctx.place ? 1 : 0) + (c.feeling === ctx.feeling ? 1 : 0) + (c.before === ctx.before ? 1 : 0);
      w += (c.outcome === 'passed' ? 1 : -0.5) * (0.5 + same);
    }
    return Math.max(0.2, w);
  });
  const total = weights.reduce((a, b) => a + b, 0);
  let r = rand() * total;
  for (let i = 0; i < pool.length; i++) {
    r -= weights[i];
    if (r <= 0) return pool[i];
  }
  return pool[pool.length - 1];
}

export const MILESTONES = [
  { id: 'day1', ms: 86400000 },
  { id: 'day5', ms: 5 * 86400000 },
  { id: 'week3', ms: 21 * 86400000 },
  { id: 'month3', ms: 90 * 86400000 },
  { id: 'year1', ms: 365 * 86400000 },
] as const;

export type HourBucket = 'morning' | 'afternoon' | 'evening' | 'night';

export function hourBucket(ms: number): HourBucket {
  const h = new Date(ms).getHours();
  if (h >= 5 && h < 12) return 'morning';
  if (h >= 12 && h < 17) return 'afternoon';
  if (h >= 17 && h < 22) return 'evening';
  return 'night';
}

export function countBy<T>(items: T[], key: (x: T) => string): [string, number][] {
  const m = new Map<string, number>();
  for (const x of items) m.set(key(x), (m.get(key(x)) ?? 0) + 1);
  return [...m.entries()].sort((a, b) => b[1] - a[1]);
}

export function cigarettesAvoided(perDay: number | null, sinceMs: number): number {
  if (!perDay || perDay <= 0) return 0;
  return Math.floor((perDay * Math.max(0, sinceMs)) / 86400000);
}

export function moneySaved(avoided: number, costPerCig: number): number {
  return costPerCig > 0 ? avoided * costPerCig : 0;
}

export function reviewStats(beliefs: { belief: string; now?: string }[]) {
  const filled = beliefs.filter((b) => b.belief.trim() !== '');
  return {
    total: filled.length,
    reviewed: filled.filter((b) => b.now).length,
    gone: filled.filter((b) => b.now === 'no').length,
  };
}

/** What the whole chain of cigarettes would cost over the years the person expects to keep smoking. */
export function lifetimeCost(costPerCig: number, perDay: number | null, years: number): number {
  if (!perDay || perDay <= 0 || costPerCig <= 0 || years <= 0) return 0;
  return costPerCig * perDay * 365 * years;
}

/** Ticks or unticks one chapter and returns the new list and the matching percentage. */
export function toggleChapter(readPct: number, chaptersRead: number[], n: number, total: number) {
  const base = readPct >= 100 ? Array.from({ length: total }, (_, i) => i + 1) : chaptersRead;
  const next = base.includes(n) ? base.filter((x) => x !== n) : [...base, n];
  return { chaptersRead: next, readPct: Math.round((next.length / total) * 100) };
}

const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹';
const AR_DIGITS = '٠١٢٣٤٥٦٧٨٩';

/** Reads a number typed by a person: Persian or Arabic digits, ',' or '٫' as decimal point, thousands separators. */
export function parseNum(text: string): number | null {
  let t = text.trim();
  t = t.replace(/[۰-۹]/g, (d) => String(FA_DIGITS.indexOf(d))).replace(/[٠-٩]/g, (d) => String(AR_DIGITS.indexOf(d)));
  t = t.replace(/[\s٬]/g, '').replace(/٫/g, '.');
  if (t === '') return null;
  t = /^\d{1,3}(,\d{3})+(\.\d+)?$/.test(t) ? t.replace(/,/g, '') : t.replace(/,/g, '.');
  const n = Number(t);
  return Number.isFinite(n) && n >= 0 ? n : null;
}

/** Everything the craving screen may suggest: the default tools plus lists the person opted in. */
export function cravingPool(tools: string[], lists: { items: string[]; forCraving: boolean }[]): string[] {
  const all = [...tools, ...lists.filter((l) => l.forCraving).flatMap((l) => l.items)];
  return Array.from(new Set(all.map((x) => x.trim()).filter(Boolean)));
}

/** Returns a copy of the array with the item at `from` moved to index `to`. */
export function moveItem<T>(arr: T[], from: number, to: number): T[] {
  if (from === to || from < 0 || to < 0 || from >= arr.length || to >= arr.length) return arr;
  const next = arr.slice();
  const [x] = next.splice(from, 1);
  next.splice(to, 0, x);
  return next;
}

/** Puts `ids` in the order the person chose; ids they have not placed yet go at the end. */
export function orderBy<T>(ids: T[], saved: T[]): T[] {
  const known = saved.filter((x) => ids.includes(x));
  return [...known, ...ids.filter((x) => !known.includes(x))];
}

/** The cards on the home page after quitting, before the person's own order is applied. */
export function homeCardIds(hidden: string[], lists: { id: string; pinned?: boolean }[], reviewTotal: number): string[] {
  const base = ['reminders', 'chapters', ...(reviewTotal > 0 ? ['review'] : []), 'milestones'].filter((id) => !hidden.includes(id));
  return [...base, ...lists.filter((l) => l.pinned).map((l) => `list:${l.id}`)];
}
