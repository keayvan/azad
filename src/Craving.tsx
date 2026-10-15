import { useState } from 'react';
import { useT } from './i18n';
import { costPerCigarette, update, useStore } from './store';
import { Chips, Icon, Screen } from './ui';
import { cravingPool, lifetimeCost, pickSuggestion, uid } from './util';
import type { Ctx } from './util';

const PLACES = ['home', 'work', 'car', 'outside', 'social', 'other'];
const FEELINGS = ['stressed', 'bored', 'sad', 'angry', 'happy', 'tired'];
const BEFORE = ['coffee', 'meal', 'call', 'alcohol', 'break', 'nothing'];
const REMINDERS = 5;

export function CravingScreen({ onClose }: { onClose: () => void }) {
  const s = useStore();
  const { t, num } = useT();
  const lifetime = lifetimeCost(costPerCigarette(s), s.perDay, s.yearsLeft);
  const pool = cravingPool(s.tools, s.lists);
  const [step, setStep] = useState(0);
  const [ctx, setCtx] = useState<Ctx>({ place: '', feeling: '', before: '' });
  const [reminder] = useState(() => 1 + Math.floor(Math.random() * REMINDERS));
  const [reasonIdx] = useState(() => Math.random());
  const reason = s.reasons.length ? s.reasons[Math.floor(reasonIdx * s.reasons.length)] : null;
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [shown, setShown] = useState<string[]>([]);
  const [tried, setTried] = useState(false);
  const [result, setResult] = useState<null | 'passed' | 'smoked'>(null);

  const questions = [
    { key: 'place', title: 'craving.where', ids: PLACES, prefix: 'place' },
    { key: 'feeling', title: 'craving.feeling', ids: FEELINGS, prefix: 'feeling' },
    { key: 'before', title: 'craving.before', ids: BEFORE, prefix: 'before' },
  ] as const;

  function choose(key: keyof Ctx, id: string) {
    const next = { ...ctx, [key]: id };
    setCtx(next);
    if (step < 2) {
      setStep(step + 1);
      return;
    }
    const pick = pickSuggestion(pool, s.cravings, next);
    setSuggestion(pick);
    setShown(pick ? [pick] : []);
    setStep(3);
  }

  function another() {
    const pick = pickSuggestion(pool, s.cravings, ctx, shown);
    if (pick) {
      setSuggestion(pick);
      setShown([...shown, pick]);
    } else {
      setShown(suggestion ? [suggestion] : []);
      setSuggestion(pickSuggestion(pool, s.cravings, ctx, suggestion ? [suggestion] : []));
    }
    setTried(false);
  }

  function finish(outcome: 'passed' | 'smoked') {
    update((cur) => ({
      cravings: [
        ...cur.cravings,
        { id: uid(), at: Date.now(), ...ctx, suggestion: tried ? suggestion : null, tried, outcome },
      ],
    }));
    setResult(outcome);
  }

  if (result === 'passed') {
    return (
      <Screen
        title={t('craving.title')}
        footer={
          <button className="btn block" onClick={onClose}>
            {t('common.close')}
          </button>
        }
      >
        <div className="center" style={{ display: 'flex', flexDirection: 'column', gap: 18, flex: 1 }}>
          <div className="tick">
            <Icon name="check" size={44} />
          </div>
          <p className="q">{t('craving.saved')}</p>
        </div>
      </Screen>
    );
  }

  if (result === 'smoked') {
    return (
      <Screen
        title={t('craving.slip.title')}
        footer={
          <>
            <button
              className="btn block"
              onClick={() => {
                update({ quitAt: Date.now() });
                onClose();
              }}
            >
              {t('craving.slip.restart')}
            </button>
            <button className="btn ghost block" onClick={onClose}>
              {t('craving.slip.keep')}
            </button>
          </>
        }
      >
        <p className="reminder">{t('craving.slip.body')}</p>
      </Screen>
    );
  }

  if (step < 3) {
    const q = questions[step];
    return (
      <Screen
        title={t('craving.title')}
        onBack={() => (step === 0 ? onClose() : setStep(step - 1))}
      >
        <p className="q">{t(q.title)}</p>
        <Chips
          options={q.ids.map((id) => ({ id, label: t(`${q.prefix}.${id}`) }))}
          value={ctx[q.key]}
          onChange={(id) => choose(q.key, id)}
        />
      </Screen>
    );
  }

  return (
    <Screen
      title={t('craving.title')}
      onBack={() => setStep(2)}
      footer={
        <>
          <button className="btn block" onClick={() => finish('passed')}>
            {t('craving.passed')}
          </button>
          <button className="btn ghost block" onClick={() => finish('smoked')}>
            {t('craving.smoked')}
          </button>
        </>
      }
    >
      <p className="tag">{t('craving.remember')}</p>
      <p className="reminder">{t(`rem.${reminder}`)}</p>
      {reason && (
        <div className="card">
          <p className="tag">{t('craving.why')}</p>
          <p className="what-why">{reason}</p>
        </div>
      )}
      {lifetime > 0 && (
        <div className="card">
          <p>{t('craving.cost', { cost: num(lifetime), currency: s.currency })}</p>
        </div>
      )}
      <div className="card suggest">
        <p className="tag">{t('craving.fromList')}</p>
        {suggestion ? (
          <>
            <p className="what">{suggestion}</p>
            {tried ? (
              <p className="note">{t('craving.trying')}</p>
            ) : (
              <div className="grid2">
                <button className="btn small" onClick={() => setTried(true)}>
                  {t('craving.try')}
                </button>
                <button className="btn small ghost" onClick={another} disabled={pool.length < 2}>
                  {t('craving.another')}
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="note">{t('craving.noList')}</p>
        )}
      </div>
    </Screen>
  );
}
