import { useEffect, useState } from 'react';
import { CHAPTERS } from './chapters';
import { ChapterList } from './Chapters';
import { useT } from './i18n';
import { CURRENCIES, READY_CHECKS, REQUIRED, STEPS, costPerCigarette, isLocked, isUnlocked, requiredDone, stepDone, update, useStore } from './store';
import type { StepId } from './store';
import { Brand, Icon, ListEditor, NumField, Screen, Segmented, Toggle } from './ui';
import { fromLocalInput, lifetimeCost, splitDuration, toLocalInput } from './util';

function PlanCard() {
  const s = useStore();
  const { t, num } = useT();
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(id);
  }, []);
  const left = s.plannedAt != null ? s.plannedAt - now : null;
  const parts = left != null && left > 0 ? splitDuration(left) : null;
  return (
    <div className="card settings-group">
      <h2>{t('plan.title')}</h2>
      <input
        type="datetime-local"
        value={s.plannedAt != null ? toLocalInput(s.plannedAt) : ''}
        min={toLocalInput(Date.now())}
        onChange={(e) => update({ plannedAt: e.target.value === '' ? null : fromLocalInput(e.target.value) })}
      />
      {s.plannedAt != null && (
        <p className="what-why" style={{ fontSize: 17 }}>
          {parts ? t('plan.in', { d: num(parts.d), h: num(parts.h) }) : t('plan.due')}
        </p>
      )}
      <p className="note">{t('plan.note')}</p>
      {s.plannedAt != null && (
        <button className="btn ghost small" onClick={() => update({ plannedAt: null })}>
          {t('plan.clear')}
        </button>
      )}
    </div>
  );
}

export function PrepHome({ onOpen, onLast }: { onOpen: (id: StepId) => void; onLast: () => void }) {
  const s = useStore();
  const { t, num } = useT();
  const done = requiredDone(s);
  const unlocked = isUnlocked(s);
  return (
    <div className="page">
      <Brand />
      <div className="page-head">
        <h1>{t('prep.title')}</h1>
        <p className="sub">{t('prep.sub')}</p>
      </div>
      <div className="card">
        <p className="sub">{t('prep.progress', { done: num(done), total: num(REQUIRED.length) })}</p>
        <div className="progress" style={{ marginTop: 10 }}>
          <span style={{ width: `${(done / REQUIRED.length) * 100}%` }} />
        </div>
      </div>
      <PlanCard />
      <ul className="steps">
        {STEPS.map((id) => (
          <li key={id}>
            <button
              className={`step${stepDone(s, id) ? ' done' : ''}${isLocked(s, id) ? ' locked' : ''}`}
              disabled={isLocked(s, id)}
              onClick={() => onOpen(id)}
            >
              <span className="dot">
                <Icon name={isLocked(s, id) ? 'lock' : 'check'} size={18} />
              </span>
              <span className="txt">
                <b>{t(`step.${id}`)}</b>
                <small>{isLocked(s, id) ? t('prep.locked.why') : t(`step.${id}.desc`)}</small>
              </span>
              <span className="tag">{REQUIRED.includes(id) ? '' : t('common.optional')}</span>
              <Icon name="chevron" size={18} />
            </button>
          </li>
        ))}
      </ul>
      <p className="note">{unlocked ? t('prep.unlocked') : t('prep.locked')}</p>
      <p className="note">{t('prep.already')}</p>
      <button className="btn block" disabled={!unlocked} onClick={onLast}>
        {!unlocked && <Icon name="lock" size={18} />}
        {t('prep.last')}
      </button>
    </div>
  );
}

export function StepScreen({ id, onClose }: { id: StepId; onClose: () => void }) {
  const s = useStore();
  const { t, num } = useT();
  const body = () => {
    switch (id) {
      case 'habit': {
        const cost = costPerCigarette(s);
        const known = CURRENCIES.includes(s.currency);
        const lifetime = lifetimeCost(cost, s.perDay, s.yearsLeft);
        const rollOdd = s.smokeType === 'roll' && s.rollPerCig > 0 && (s.rollPerCig < 0.2 || s.rollPerCig > 2);
        return (
          <>
            <Segmented
              options={[
                { id: 'pack' as const, label: t('habit.type.pack') },
                { id: 'roll' as const, label: t('habit.type.roll') },
              ]}
              value={s.smokeType}
              onChange={(smokeType) => update({ smokeType })}
            />
            <div className="grid2">
              <label className="field">
                {t('habit.perDay')}
                <NumField value={s.perDay} onChange={(perDay) => update({ perDay })} />
              </label>
              <label className="field">
                {t('habit.currency')}
                <select
                  value={known ? s.currency : '__other'}
                  onChange={(e) => update({ currency: e.target.value === '__other' ? '' : e.target.value })}
                >
                  {CURRENCIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                  <option value="__other">{t('habit.currency.other')}</option>
                </select>
              </label>
              {!known && (
                <label className="field" style={{ gridColumn: '1 / -1' }}>
                  {t('habit.currency.custom')}
                  <input type="text" value={s.currency} maxLength={8} onChange={(e) => update({ currency: e.target.value })} />
                </label>
              )}
              {s.smokeType === 'pack' ? (
                <>
                  <label className="field">
                    {t('habit.price')}
                    <NumField value={s.packPrice} onChange={(packPrice) => update({ packPrice })} />
                  </label>
                  <label className="field">
                    {t('habit.packSize')}
                    <NumField value={s.packSize} onChange={(v) => update({ packSize: v ?? 0 })} />
                  </label>
                </>
              ) : (
                <>
                  <label className="field">
                    {t('habit.rollPrice')}
                    <NumField value={s.rollPrice} onChange={(rollPrice) => update({ rollPrice })} />
                  </label>
                  <label className="field">
                    {t('habit.rollGrams')}
                    <NumField value={s.rollGrams} onChange={(v) => update({ rollGrams: v ?? 0 })} />
                  </label>
                  <label className="field">
                    {t('habit.rollPerCig')}
                    <NumField value={s.rollPerCig} onChange={(v) => update({ rollPerCig: v ?? 0 })} />
                  </label>
                </>
              )}
            </div>
            <label className="field">
              {t('habit.years')}
              <NumField value={s.yearsLeft} onChange={(v) => update({ yearsLeft: v ?? 0 })} />
            </label>
            {cost > 0 && (
              <div className="card">
                <p>{t('habit.perCig', { cost: num(cost, 2), currency: s.currency })}</p>
                {s.smokeType === 'roll' && s.rollGrams > 0 && s.rollPerCig > 0 ? (
                  <p className="note">{t('habit.rollPouch', { n: num(s.rollGrams / s.rollPerCig, 1) })}</p>
                ) : null}
                {s.perDay ? <p className="note">{t('habit.perMonth', { cost: num(cost * s.perDay * 30), currency: s.currency })}</p> : null}
                {lifetime > 0 ? (
                  <p className="note">
                    {t('habit.lifetime', { cost: num(lifetime), currency: s.currency, years: num(s.yearsLeft) })}
                  </p>
                ) : null}
              </div>
            )}
            {rollOdd && <p className="warn">{t('habit.rollCheck')}</p>}
            <p className="note">{s.smokeType === 'roll' ? t('habit.rollNote') : t('habit.note')}</p>
          </>
        );
      }
      case 'beliefs':
        return (
          <>
            <div className="card">
              <p className="tag">{t('beliefs.q.title')}</p>
              <ul className="questions">
                <li>{t('beliefs.q.1')}</li>
                <li>{t('beliefs.q.2')}</li>
                <li>{t('beliefs.q.3')}</li>
              </ul>
            </div>
            <p className="note">{t('beliefs.hint')}</p>
            {s.beliefs.map((b, i) => (
              <div key={i} className="card belief">
                <div className="top">
                  <span className="tag">{num(i + 1)}</span>
                  <button
                    className="icon-btn danger"
                    aria-label={t('common.delete')}
                    onClick={() => update({ beliefs: s.beliefs.filter((_, j) => j !== i) })}
                  >
                    <Icon name="trash" size={18} />
                  </button>
                </div>
                <label className="field">
                  {t('beliefs.belief')}
                  <textarea
                    value={b.belief}
                    onChange={(e) =>
                      update({ beliefs: s.beliefs.map((x, j) => (j === i ? { ...x, belief: e.target.value } : x)) })
                    }
                  />
                </label>
                <label className="field">
                  {t('beliefs.truth')}
                  <textarea
                    value={b.truth}
                    onChange={(e) =>
                      update({ beliefs: s.beliefs.map((x, j) => (j === i ? { ...x, truth: e.target.value } : x)) })
                    }
                  />
                </label>
              </div>
            ))}
            <button className="btn ghost" onClick={() => update({ beliefs: [...s.beliefs, { belief: '', truth: '' }] })}>
              <Icon name="plus" size={18} />
              {t('beliefs.add')}
            </button>
            {!stepDone(s, 'beliefs') && <p className="warn">{t('beliefs.empty')}</p>}
          </>
        );
      case 'why':
        return (
          <>
            <p className="note">{t('why.hint')}</p>
            <ListEditor items={s.reasons} onChange={(reasons) => update({ reasons })} placeholder={t('why.placeholder')} />
          </>
        );
      case 'events':
        return (
          <>
            <p className="note">{t('events.hint')}</p>
            {s.events.map((e, i) => (
              <div key={i} className="card belief">
                <div className="top">
                  <span className="tag">{num(i + 1)}</span>
                  <button
                    className="icon-btn danger"
                    aria-label={t('common.delete')}
                    onClick={() => update({ events: s.events.filter((_, j) => j !== i) })}
                  >
                    <Icon name="trash" size={18} />
                  </button>
                </div>
                <label className="field">
                  {t('events.event')}
                  <textarea
                    value={e.event}
                    onChange={(ev) => update({ events: s.events.map((x, j) => (j === i ? { ...x, event: ev.target.value } : x)) })}
                  />
                </label>
                <label className="field">
                  {t('events.line')}
                  <textarea
                    value={e.line}
                    onChange={(ev) => update({ events: s.events.map((x, j) => (j === i ? { ...x, line: ev.target.value } : x)) })}
                  />
                </label>
              </div>
            ))}
            <button className="btn ghost" onClick={() => update({ events: [...s.events, { event: '', line: '' }] })}>
              <Icon name="plus" size={18} />
              {t('events.add')}
            </button>
          </>
        );
      case 'triggers':
        return (
          <>
            <div className="card">
              <p className="tag">{t('triggers.cats.title')}</p>
              <p>{t('triggers.cats.body')}</p>
            </div>
            <p className="note">{t('triggers.hint')}</p>
            <ListEditor items={s.triggers} onChange={(triggers) => update({ triggers })} placeholder={t('triggers.placeholder')} />
            {!stepDone(s, 'triggers') && <p className="warn">{t('triggers.empty')}</p>}
          </>
        );
      case 'book':
        return (
          <>
            <div className="card">
              <div className="big-num">{t('book.progress', { pct: num(s.readPct) })}</div>
              <div className="progress" style={{ marginTop: 10 }}>
                <span style={{ width: `${s.readPct}%` }} />
              </div>
              {s.readPct >= 100 && <p className="note" style={{ marginTop: 10 }}>{t('book.finished')}</p>}
            </div>
            <p className="note">{t('book.hint')}</p>
            <button className="btn ghost" onClick={() => update({ chaptersRead: CHAPTERS.map((c) => c.n), readPct: 100 })}>
              {t('book.all')}
            </button>
            <p className="note">{t('book.notes.hint')}</p>
            <ChapterList checkable />
          </>
        );
      case 'why':
        return (
          <>
            <p className="note">{t('why.hint')}</p>
            <ListEditor items={s.reasons} onChange={(reasons) => update({ reasons })} placeholder={t('why.placeholder')} />
          </>
        );
      case 'events':
        return (
          <>
            <p className="note">{t('events.hint')}</p>
            {s.events.map((e, i) => (
              <div key={i} className="card belief">
                <div className="top">
                  <span className="tag">{num(i + 1)}</span>
                  <button
                    className="icon-btn danger"
                    aria-label={t('common.delete')}
                    onClick={() => update({ events: s.events.filter((_, j) => j !== i) })}
                  >
                    <Icon name="trash" size={18} />
                  </button>
                </div>
                <label className="field">
                  {t('events.event')}
                  <textarea
                    value={e.event}
                    onChange={(ev) => update({ events: s.events.map((x, j) => (j === i ? { ...x, event: ev.target.value } : x)) })}
                  />
                </label>
                <label className="field">
                  {t('events.line')}
                  <textarea
                    value={e.line}
                    onChange={(ev) => update({ events: s.events.map((x, j) => (j === i ? { ...x, line: ev.target.value } : x)) })}
                  />
                </label>
              </div>
            ))}
            <button className="btn ghost" onClick={() => update({ events: [...s.events, { event: '', line: '' }] })}>
              <Icon name="plus" size={18} />
              {t('events.add')}
            </button>
          </>
        );
      case 'triggers':
        return (
          <>
            <div className="card">
              <p className="tag">{t('triggers.cats.title')}</p>
              <p>{t('triggers.cats.body')}</p>
            </div>
            <p className="note">{t('triggers.hint')}</p>
            <ListEditor items={s.triggers} onChange={(triggers) => update({ triggers })} placeholder={t('triggers.placeholder')} />
            {!stepDone(s, 'triggers') && <p className="warn">{t('triggers.empty')}</p>}
          </>
        );
      case 'book':
        return (
          <>
            <div className="card">
              <div className="big-num">{t('book.progress', { pct: num(s.readPct) })}</div>
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={s.readPct}
                onChange={(e) => update({ readPct: Number(e.target.value) })}
              />
              {s.readPct >= 100 && <p className="note">{t('book.finished')}</p>}
            </div>
            <p className="note">{t('book.hint')}</p>
          </>
        );
      case 'ready':
        return (
          <>
            {Array.from({ length: READY_CHECKS }, (_, i) => (
              <Toggle
                key={i}
                checked={s.readyChecks[i] === true}
                label={t(`ready.${i + 1}`)}
                onChange={(v) =>
                  update({ readyChecks: Array.from({ length: READY_CHECKS }, (_, j) => (j === i ? v : s.readyChecks[j] === true)) })
                }
              />
            ))}
          </>
        );
    }
  };
  return (
    <Screen
      title={t(`step.${id}`)}
      onBack={onClose}
      footer={
        <button className="btn block" onClick={onClose}>
          {t('common.done')}
        </button>
      }
    >
      {body()}
    </Screen>
  );
}

export function LastScreen({ onClose }: { onClose: () => void }) {
  const { t } = useT();
  const [when, setWhen] = useState(() => toLocalInput(Date.now()));
  const [checks, setChecks] = useState([false, false, false]);
  const ms = fromLocalInput(when);
  const valid = ms != null && ms <= Date.now() + 60000 && checks.every(Boolean);
  return (
    <Screen
      title={t('last.title')}
      onBack={onClose}
      footer={
        <button
          className="btn block"
          disabled={!valid}
          onClick={() => {
            if (ms == null) return;
            update({ quitAt: Math.min(ms, Date.now()), plannedAt: null });
            onClose();
          }}
        >
          {t('last.confirm')}
        </button>
      }
    >
      <div className="card">
        <p className="tag">{t('last.steps.title')}</p>
        <ol className="questions">
          <li>{t('last.step.1')}</li>
          <li>{t('last.step.2')}</li>
          <li>{t('last.step.3')}</li>
        </ol>
      </div>
      <p className="tag">{t('last.check.title')}</p>
      {(['last.vow', 'last.certain', 'last.excited'] as const).map((k, i) => (
        <Toggle
          key={k}
          checked={checks[i]}
          label={t(k)}
          onChange={(v) => setChecks(checks.map((c, j) => (j === i ? v : c)))}
        />
      ))}
      <p className="note">{t('last.doubt')}</p>
      <label className="field">
        {t('last.when')}
        <input type="datetime-local" value={when} max={toLocalInput(Date.now())} onChange={(e) => setWhen(e.target.value)} />
      </label>
    </Screen>
  );
}
