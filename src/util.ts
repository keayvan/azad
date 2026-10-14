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
