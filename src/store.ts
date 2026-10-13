import { useSyncExternalStore } from 'react';

export type Theme = 'system' | 'light' | 'dark';
export type Lang = 'fa' | 'en';
export type StepId = 'habit' | 'beliefs' | 'triggers' | 'book' | 'tools' | 'ready';

export interface Belief {
  belief: string;
  truth: string;
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
  packPrice: number | null;
  packSize: number;
  currency: string;
  beliefs: Belief[];
  triggers: string[];
  tools: string[];
  readPct: number;
  readyChecks: boolean[];
  quitAt: number | null;
  cravings: Craving[];
}

export const STORAGE_KEY = 'azad.state.v1';

export const STEPS: StepId[] = ['habit', 'beliefs', 'triggers', 'book', 'tools', 'ready'];
export const REQUIRED: StepId[] = ['beliefs', 'triggers', 'book', 'ready'];

const DEFAULT_TOOLS: Record<Lang, string[]> = {
  en: ['20 push-ups', '20 squats', 'Slow deep breathing', 'Cold shower', 'A glass of water', 'A short walk'],
  fa: ['۲۰ شنا', '۲۰ اسکوات', 'نفس عمیق و آهسته', 'دوش آب سرد', 'یک لیوان آب', 'کمی پیاده‌روی'],
};

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
    packPrice: null,
    packSize: 20,
    currency: '',
    beliefs: [],
    triggers: [],
    tools: [...DEFAULT_TOOLS[lang]],
    readPct: 0,
    readyChecks: [false, false, false],
    quitAt: null,
    cravings: [],
  };
}

export function stepDone(s: State, id: StepId): boolean {
  switch (id) {
    case 'habit':
      return s.perDay != null && s.perDay > 0;
    case 'beliefs':
      return s.beliefs.some((b) => b.belief.trim() !== '');
    case 'triggers':
      return s.triggers.length > 0;
    case 'book':
      return s.readPct >= 100;
    case 'tools':
      return s.tools.length > 0;
    case 'ready':
      return s.readyChecks.length === 3 && s.readyChecks.every(Boolean);
  }
}

export function requiredDone(s: State): number {
  return REQUIRED.filter((id) => stepDone(s, id)).length;
}

export function isUnlocked(s: State): boolean {
  return requiredDone(s) === REQUIRED.length;
}

/** Returns a full state from untrusted JSON text, or null if it is not a backup. */
export function parseBackup(text: string): State | null {
  try {
    const o = JSON.parse(text);
    if (!o || typeof o !== 'object' || o.v !== 1) return null;
    if (!Array.isArray(o.beliefs) || !Array.isArray(o.cravings) || !Array.isArray(o.triggers)) return null;
    return { ...defaults(), ...o };
  } catch {
    return null;
  }
}

function load(): State {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = parseBackup(raw);
      if (parsed) return parsed;
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
