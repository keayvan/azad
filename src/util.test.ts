import { describe, expect, it } from 'vitest';
import { parseNum, toggleChapter, cigarettesAvoided, countBy, hourBucket, lifetimeCost, moneySaved, pickSuggestion, reviewStats, splitDuration } from './util';
import { costPerCigarette, defaults, isLocked, isUnlocked, parseBackup, stepDone } from './store';
import type { Craving } from './store';

const craving = (over: Partial<Craving>): Craving => ({
  id: 'x',
  at: 0,
  place: 'home',
  feeling: 'bored',
  before: 'coffee',
  suggestion: null,
  tried: false,
  outcome: 'passed',
  ...over,
});

describe('splitDuration', () => {
  it('splits into days, hours, minutes, seconds', () => {
    expect(splitDuration(((2 * 24 + 3) * 3600 + 4 * 60 + 5) * 1000)).toEqual({ d: 2, h: 3, m: 4, s: 5 });
  });
  it('never goes negative', () => {
    expect(splitDuration(-5000)).toEqual({ d: 0, h: 0, m: 0, s: 0 });
  });
});

describe('pickSuggestion', () => {
  it('returns null for an empty list or when everything is excluded', () => {
    expect(pickSuggestion([], [], { place: 'a', feeling: 'b', before: 'c' })).toBeNull();
    expect(pickSuggestion(['a'], [], { place: 'a', feeling: 'b', before: 'c' }, ['a'])).toBeNull();
  });
  it('favours a tool that worked in the same situation', () => {
    const ctx = { place: 'home', feeling: 'bored', before: 'coffee' };
    const history = [craving({ suggestion: 'walk', tried: true, outcome: 'passed' })];
    let walk = 0;
    for (let i = 0; i < 1000; i++) if (pickSuggestion(['walk', 'water'], history, ctx, [], () => (i + 0.5) / 1000) === 'walk') walk++;
    expect(walk).toBeGreaterThan(600);
  });
  it('still offers a tool that failed before, just less often', () => {
    const ctx = { place: 'home', feeling: 'bored', before: 'coffee' };
    const history = [craving({ suggestion: 'walk', tried: true, outcome: 'smoked' })];
    expect(pickSuggestion(['walk'], history, ctx, [], () => 0.5)).toBe('walk');
  });
});

describe('stats', () => {
  it('counts avoided cigarettes and money', () => {
    expect(cigarettesAvoided(10, 2 * 86400000)).toBe(20);
    expect(cigarettesAvoided(null, 86400000)).toBe(0);
    expect(moneySaved(40, 0.25)).toBe(10);
    expect(moneySaved(40, 0)).toBe(0);
  });
  it('groups by key, most common first', () => {
    expect(countBy(['a', 'b', 'b'], (x) => x)).toEqual([['b', 2], ['a', 1]]);
  });
  it('buckets hours', () => {
    expect(hourBucket(new Date(2026, 0, 1, 8).getTime())).toBe('morning');
    expect(hourBucket(new Date(2026, 0, 1, 23).getTime())).toBe('night');
  });
});

describe('reviewStats', () => {
  it('counts only filled beliefs, reviewed ones and the ones that lost their hold', () => {
    const beliefs = [
      { belief: 'calm', now: 'no' },
      { belief: 'focus', now: 'still' },
      { belief: 'company' },
      { belief: '   ', now: 'no' },
    ];
    expect(reviewStats(beliefs)).toEqual({ total: 3, reviewed: 2, gone: 1 });
  });
});

describe('parseNum', () => {
  it('reads plain and partial decimals', () => {
    expect(parseNum('50')).toBe(50);
    expect(parseNum('0.5')).toBe(0.5);
    expect(parseNum('0.')).toBe(0);
    expect(parseNum('0,5')).toBe(0.5);
  });
  it('reads Persian and Arabic digits and separators', () => {
    expect(parseNum('۰٫۵')).toBe(0.5);
    expect(parseNum('۱۰۰٬۰۰۰')).toBe(100000);
    expect(parseNum('٣٠')).toBe(30);
  });
  it('treats comma groups as thousands only when they look like thousands', () => {
    expect(parseNum('100,000')).toBe(100000);
    expect(parseNum('1,5')).toBe(1.5);
  });
  it('returns null for empty or junk', () => {
    expect(parseNum('')).toBeNull();
    expect(parseNum('.')).toBeNull();
    expect(parseNum('abc')).toBeNull();
    expect(parseNum('-3')).toBeNull();
  });
});

describe('toggleChapter', () => {
  it('builds the percentage from ticked chapters', () => {
    expect(toggleChapter(0, [], 1, 4)).toEqual({ chaptersRead: [1], readPct: 25 });
    expect(toggleChapter(25, [1], 1, 4)).toEqual({ chaptersRead: [], readPct: 0 });
  });
  it('reaches 100 only when every chapter is ticked', () => {
    expect(toggleChapter(75, [1, 2, 3], 4, 4).readPct).toBe(100);
    expect(toggleChapter(0, [], 1, 45).readPct).toBeLessThan(100);
  });
  it('treats a finished book as all ticked when one is unticked', () => {
    const r = toggleChapter(100, [], 2, 3);
    expect(r.chaptersRead).toEqual([1, 3]);
    expect(r.readPct).toBe(67);
  });
});

describe('lifetimeCost', () => {
  it('multiplies cost, daily count, days and years', () => {
    expect(lifetimeCost(0.5, 20, 30)).toBe(0.5 * 20 * 365 * 30);
  });
  it('is zero when anything is missing', () => {
    expect(lifetimeCost(0, 20, 30)).toBe(0);
    expect(lifetimeCost(0.5, null, 30)).toBe(0);
    expect(lifetimeCost(0.5, 20, 0)).toBe(0);
  });
});

describe('cost per cigarette', () => {
  it('uses the pack price for packs', () => {
    const s = defaults('en');
    s.packPrice = 10;
    s.packSize = 20;
    expect(costPerCigarette(s)).toBe(0.5);
  });
  it('uses grams for rolled cigarettes', () => {
    const s = defaults('en');
    s.smokeType = 'roll';
    s.rollPrice = 12;
    s.rollGrams = 30;
    s.rollPerCig = 0.75;
    expect(costPerCigarette(s)).toBeCloseTo(0.3);
  });
  it('is zero until a price is entered', () => {
    expect(costPerCigarette(defaults('en'))).toBe(0);
  });
});

describe('prep steps', () => {
  it('unlocks only when every required step is done', () => {
    const s = defaults('en');
    expect(isUnlocked(s)).toBe(false);
    s.beliefs = [{ belief: 'calm', truth: '' }];
    s.triggers = ['coffee'];
    s.readPct = 100;
    expect(isUnlocked(s)).toBe(false);
    s.readyChecks = [true, true, true, true];
    expect(isUnlocked(s)).toBe(true);
    expect(stepDone(s, 'habit')).toBe(false);
  });
  it('keeps the gains step closed until the book is finished, and does not require it', () => {
    const s = defaults('en');
    expect(isLocked(s, 'why')).toBe(true);
    expect(isLocked(s, 'beliefs')).toBe(false);
    s.readPct = 100;
    expect(isLocked(s, 'why')).toBe(false);
    s.beliefs = [{ belief: 'calm', truth: '' }];
    s.triggers = ['coffee'];
    s.readyChecks = [true, true, true, true];
    expect(isUnlocked(s)).toBe(true);
  });
  it('rejects a backup that is not ours', () => {
    expect(parseBackup('not json')).toBeNull();
    expect(parseBackup('{"v":2}')).toBeNull();
    expect(parseBackup(JSON.stringify(defaults('en')))).not.toBeNull();
  });
});
