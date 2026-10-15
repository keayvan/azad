import { useEffect, useState } from 'react';
import { useT } from './i18n';
import { useSortable } from './sortable';
import { costPerCigarette, update, useStore } from './store';
import { Brand, Icon } from './ui';
import { MILESTONES, cigarettesAvoided, moneySaved, moveItem, orderBy, reviewStats, splitDuration } from './util';

function useNow(intervalMs = 1000) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
}

export function Dash({ onCraving, onReview, onReminders, onChapters }: { onCraving: () => void; onReview: () => void; onReminders: () => void; onChapters: () => void }) {
  const s = useStore();
  const { t, num, date } = useT();
  const now = useNow();
  const sort = useSortable((from, to) => {
    update((cur) => {
      const avail = ['reminders', 'chapters', ...(reviewStats(cur.beliefs).total > 0 ? ['review'] : []), 'milestones'];
      return { dashOrder: moveItem(orderBy(avail, cur.dashOrder), from, to) };
    });
  });
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
  const cards = orderBy(['reminders', 'chapters', ...(rev.total > 0 ? ['review'] : []), 'milestones'], s.dashOrder);
  const linkCard = (title: string, desc: string, onClick: () => void) => (
    <button className="step" onClick={onClick}>
      <span className="txt">
        <b>{title}</b>
        <small>{desc}</small>
      </span>
      <Icon name="chevron" size={18} />
    </button>
  );
  const renderCard = (id: string) => {
    switch (id) {
      case 'reminders':
        return linkCard(t('dash.reminders'), t('dash.reminders.desc'), onReminders);
      case 'chapters':
        return linkCard(t('dash.chapters'), t('dash.chapters.desc'), onChapters);
      case 'review':
        return linkCard(t('review.title'), t('review.card.progress', { done: num(rev.reviewed), total: num(rev.total) }), onReview);
      default:
        return (
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
        );
    }
  };
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

      <div className="dash-cards" ref={sort.ref as React.RefObject<HTMLDivElement>}>
        {cards.map((id, i) => (
          <div key={id} data-row className={`drag-row${sort.dragging === i ? ' dragging' : ''}`}>
            <button
              className="grip"
              aria-label={t('common.reorder')}
              onPointerDown={(e) => sort.start(e, i)}
              onKeyDown={(e) => sort.onKey(e, i, cards.length)}
            >
              <Icon name="grip" size={20} />
            </button>
            <div className="grow">{renderCard(id)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
