import { useSyncExternalStore } from 'react';

export type Theme = 'system' | 'light' | 'dark';
export type Lang = 'fa' | 'en';
export type StepId = 'habit' | 'beliefs' | 'triggers' | 'book' | 'why' | 'events' | 'ready';

export type Stance = 'still' | 'partly' | 'no';

export interface Belief {
  belief: string;
  truth: string;
  /** Filled in after quitting, on the review page. */
  now?: Stance;
  note?: string;
}

export interface PlannedEvent {
  event: string;
  line: string;
}

export interface UserList {
  id: string;
  title: string;
  items: string[];
  /** When true, the items can be offered on the craving screen. */
  forCraving: boolean;
}

export interface Craving {
  id: string;
  at: number;
  place: string;
  feeling: string;
  before: string;
  suggestion: string | null;
  tried: boolean;
  outcome: 'passed' | 'smoked';
}

export interface State {
  v: 1;
  lang: Lang;
  theme: Theme;
  perDay: number | null;
  smokeType: 'pack' | 'roll';
  packPrice: number | null;
  packSize: number;
  rollPrice: number | null;
  rollGrams: number;
  rollPerCig: number;
  currency: string;
  beliefs: Belief[];
  reasons: string[];
  events: PlannedEvent[];
  triggers: string[];
  tools: string[];
  lists: UserList[];
  readPct: number;
  chaptersRead: number[];
  readyChecks: boolean[];
  quitAt: number | null;
  plannedAt: number | null;
  /** The order of the preparation steps and of the cards on the home page, set by dragging. */
  stepOrder: StepId[];
  dashOrder: string[];
  yearsLeft: number;
  cravings: Craving[];
}

export const STORAGE_KEY = 'azad.state.v1';

export const STEPS: StepId[] = ['habit', 'beliefs', 'triggers', 'book', 'why', 'events', 'ready'];
export const REQUIRED: StepId[] = ['beliefs', 'triggers', 'book', 'ready'];
/** Steps that stay closed until the book is finished (the book sets reasons aside until then). */
export const AFTER_BOOK: StepId[] = ['why'];
export const READY_CHECKS = 4;

const DEFAULT_TOOLS: Record<Lang, string[]> = {
  en: ['20 push-ups', '20 squats', 'Slow deep breathing', 'Cold shower', 'A glass of water', 'A short walk'],
  fa: ['۲۰ شنا', '۲۰ اسکوات', 'نفس عمیق و آهسته', 'دوش آب سرد', 'یک لیوان آب', 'کمی پیاده‌روی'],
};

export const TOOLS_LIST_ID = 'tools';
const MY_LIST_TITLE: Record<Lang, string> = { en: 'My list', fa: 'فهرست من' };

function detectLang(): Lang {
  try {
    return (navigator.language || '').toLowerCase().startsWith('fa') ? 'fa' : 'en';
  } catch {
    return 'en';
  }
}

export function defaults(lang: Lang = detectLang()): State {
  return {
    v: 1,
    lang,
    theme: 'system',
    perDay: null,
    smokeType: 'pack',
    packPrice: null,
    packSize: 20,
    rollPrice: null,
    rollGrams: 30,
    rollPerCig: 0.7,
    currency: lang === 'fa' ? 'تومان' : '$',
    beliefs: [],
    reasons: [],
    events: [],
    triggers: [],
    tools: [],
    lists: [{ id: TOOLS_LIST_ID, title: MY_LIST_TITLE[lang], items: [...DEFAULT_TOOLS[lang]], forCraving: true }],
    readPct: 0,
    chaptersRead: [],
    readyChecks: Array(READY_CHECKS).fill(false),
    quitAt: null,
    plannedAt: null,
    stepOrder: [],
    dashOrder: [],
    yearsLeft: 30,
    cravings: [],
  };
}

export const CURRENCIES = ['تومان', 'ریال', '$', '€', '£', '₺', 'AED', 'CAD'];

/** Money spent per cigarette, from either a pack price or a pouch of rolling tobacco. */
export function costPerCigarette(s: State): number {
  if (s.smokeType === 'roll') {
    if (!s.rollPrice || s.rollPrice <= 0 || s.rollGrams <= 0 || s.rollPerCig <= 0) return 0;
    return s.rollPrice / (s.rollGrams / s.rollPerCig);
  }
  if (!s.packPrice || s.packPrice <= 0 || s.packSize <= 0) return 0;
  return s.packPrice / s.packSize;
}

export function stepDone(s: State, id: StepId): boolean {
  switch (id) {
    case 'habit':
      return s.perDay != null && s.perDay > 0;
    case 'beliefs':
      return s.beliefs.some((b) => b.belief.trim() !== '');
    case 'why':
      return s.reasons.length > 0;
    case 'events':
      return s.events.some((e) => e.event.trim() !== '');
    case 'triggers':
      return s.triggers.length > 0;
    case 'book':
      return s.readPct >= 100;
    case 'ready':
      return s.readyChecks.length === READY_CHECKS && s.readyChecks.every(Boolean);
  }
}

export function isLocked(s: State, id: StepId): boolean {
  return AFTER_BOOK.includes(id) && !stepDone(s, 'book');
}

export function requiredDone(s: State): number {
  return REQUIRED.filter((id) => stepDone(s, id)).length;
}

export function isUnlocked(s: State): boolean {
  return requiredDone(s) === REQUIRED.length;
}

/**
 * Older versions kept one flat `tools` list. It now lives in the Lists tab as "My list",
 * so anything still in `tools` is moved there.
 */
export function normalizeState(s: State): State {
  const lists = [...(s.lists ?? [])];
  const tools = s.tools ?? [];
  if (tools.length === 0) return { ...s, tools: [], lists };
  const i = lists.findIndex((l) => l.id === TOOLS_LIST_ID);
  if (i >= 0) {
    lists[i] = { ...lists[i], items: Array.from(new Set([...lists[i].items, ...tools])) };
  } else {
    lists.unshift({ id: TOOLS_LIST_ID, title: MY_LIST_TITLE[s.lang] ?? MY_LIST_TITLE.en, items: [...tools], forCraving: true });
  }
  return { ...s, tools: [], lists };
}

/** Returns a full state from untrusted JSON text, or null if it is not a backup. */
export function parseBackup(text: string): State | null {
  try {
    const o = JSON.parse(text);
    if (!o || typeof o !== 'object' || o.v !== 1) return null;
    if (!Array.isArray(o.beliefs) || !Array.isArray(o.cravings) || !Array.isArray(o.triggers)) return null;
    const base: State = { ...defaults(), ...o };
    // an older state has no lists yet, so do not seed the default list on top of the person's own items
    if (o.lists === undefined) base.lists = [];
    return normalizeState(base);
  } catch {
    return null;
  }
}

function load(): State {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = parseBackup(raw);
      if (parsed) {
        // write back right away so a migration (see normalizeState) is saved even before the first edit
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
        return parsed;
      }
    }
  } catch {
    // storage unavailable: fall through to defaults
  }
  return defaults();
}

let state: State = load();
const listeners = new Set<() => void>();

function commit(next: State) {
  state = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // storage full or blocked: keep working in memory
  }
  listeners.forEach((l) => l());
}

export function getState(): State {
  return state;
}

export function update(patch: Partial<State> | ((s: State) => Partial<State>)) {
  const p = typeof patch === 'function' ? patch(state) : patch;
  commit({ ...state, ...p });
}

export function replaceState(next: State) {
  commit(next);
}

export function resetAll() {
  commit(defaults(state.lang));
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function useStore(): State {
  return useSyncExternalStore(subscribe, getState);
}

/** Ask the browser not to evict our data when storage is tight. */
export function requestPersistence() {
  try {
    void navigator.storage?.persist?.();
  } catch {
    // not supported
  }
}
