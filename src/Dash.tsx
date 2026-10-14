import { useEffect, useState } from 'react';
import { useT } from './i18n';
import { costPerCigarette, useStore } from './store';
import { Brand, Icon } from './ui';
import { MILESTONES, cigarettesAvoided, moneySaved, reviewStats, splitDuration } from './util';

function useNow(intervalMs = 1000) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
}

export function Dash({ onCraving, onReview, onReminders }: { onCraving: () => void; onReview: () => void; onReminders: () => void }) {
  const s = useStore();
  const { t, num, date } = useT();
  const now = useNow();
  if (s.quitAt == null) return null;
  const elapsed = now - s.quitAt;
  const { d, h, m, s: sec } = splitDuration(elapsed);
  const avoided = cigarettesAvoided(s.perDay, elapsed);
  const cost = costPerCigarette(s);
  const saved = moneySaved(avoided, cost);
  const rev = reviewStats(s.beliefs);
  const today = new Date(now).toDateString();
  const todays = s.cravings.filter((c) => new Date(c.at).toDateString() === today);
  const passed = todays.filter((c) => c.outcome === 'passed').length;
  return (
    <div className="page">
      <Brand />
      <section className="hero">
        <div className="label">{t('dash.since')}</div>
        <div className="clock">
          <div>
            <b>{num(d)}</b>
            <span>{t('dash.d')}</span>
          </div>
          <div>
            <b>{num(h)}</b>
            <span>{t('dash.h')}</span>
          </div>
          <div>
            <b>{num(m)}</b>
            <span>{t('dash.m')}</span>
          </div>
          <div>
            <b>{num(sec)}</b>
            <span>{t('dash.s')}</span>
          </div>
        </div>
        <small>{t('dash.lastAt', { date: date(s.quitAt) })}</small>
      </section>

      <button className="craving-btn" onClick={onCraving}>
        {t('dash.craving')}
      </button>

      <div className="stats">
        {s.perDay ? (
          <div className="card stat">
            <b>{num(avoided)}</b>
            <span>{t('dash.avoided')}</span>
          </div>
        ) : null}
        {s.perDay && cost > 0 ? (
          <div className="card stat">
            <b>
              {num(saved)} {s.currency}
            </b>
            <span>{t('dash.saved')}</span>
          </div>
        ) : null}
        <div className="card stat">
          <b>{num(todays.length)}</b>
          <span>{t('dash.today')}</span>
        </div>
        <div className="card stat">
          <b>{num(passed)}</b>
          <span>{t('dash.passed')}</span>
        </div>
      </div>

      <button className="step" onClick={onReminders}>
        <span className="txt">
          <b>{t('dash.reminders')}</b>
          <small>{t('dash.reminders.desc')}</small>
        </span>
        <Icon name="chevron" size={18} />
      </button>

      {rev.total > 0 && (
        <button className="step" onClick={onReview}>
          <span className="txt">
            <b>{t('review.title')}</b>
            <small>{t('review.card.progress', { done: num(rev.reviewed), total: num(rev.total) })}</small>
          </span>
          <Icon name="chevron" size={18} />
        </button>
      )}

      <div className="card">
        <h2>{t('dash.milestones')}</h2>
        <div className="miles">
          {MILESTONES.map((ms) => (
            <span key={ms.id} className={`mile${elapsed >= ms.ms ? ' on' : ''}`}>
              {t(`ms.${ms.id}`)}
            </span>
          ))}
        </div>
        <p className="note" style={{ marginTop: 10 }}>
          {t('dash.milestones.note')}
        </p>
      </div>
    </div>
  );
}
