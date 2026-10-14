import { useT } from './i18n';
import { costPerCigarette, useStore } from './store';
import { Screen } from './ui';
import { lifetimeCost } from './util';

const MOMENTS = ['offered', 'bad', 'others', 'panic', 'weight', 'doubt'];

export function RemindersScreen({ onClose }: { onClose: () => void }) {
  const s = useStore();
  const { t, num } = useT();
  const lifetime = lifetimeCost(costPerCigarette(s), s.perDay, s.yearsLeft);
  return (
    <Screen
      title={t('dash.reminders')}
      onBack={onClose}
      footer={
        <button className="btn block" onClick={onClose}>
          {t('common.done')}
        </button>
      }
    >
      <div className="card">
        <h2>{t('rm.points.title')}</h2>
        <ol className="questions">
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <li key={n}>{t(`rm.p${n}`)}</li>
          ))}
        </ol>
      </div>
      <div className="card">
        <p className="tag">{t('rm.feeling.title')}</p>
        <p>{t('rm.feeling')}</p>
      </div>
      {lifetime > 0 && (
        <div className="card">
          <p>{t('rm.cost', { cost: num(lifetime), currency: s.currency })}</p>
        </div>
      )}
      <h2 className="q" style={{ fontSize: 18 }}>
        {t('rm.moments.title')}
      </h2>
      {MOMENTS.map((m) => (
        <div key={m} className="card">
          <p className="tag">{t(`rm.m.${m}.t`)}</p>
          <p>{t(`rm.m.${m}`)}</p>
        </div>
      ))}
      <div className="card">
        <p className="tag">{t('rm.years.t')}</p>
        <p>{t('rm.years')}</p>
      </div>
    </Screen>
  );
}
