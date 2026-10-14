import { useT } from './i18n';
import { update, useStore } from './store';
import type { Stance } from './store';
import { Screen, Segmented } from './ui';
import { reviewStats } from './util';

export function ReviewScreen({ onClose }: { onClose: () => void }) {
  const s = useStore();
  const { t, num } = useT();
  const stats = reviewStats(s.beliefs);
  const patch = (i: number, p: { now?: Stance; note?: string }) =>
    update((cur) => ({ beliefs: cur.beliefs.map((b, j) => (j === i ? { ...b, ...p } : b)) }));
  return (
    <Screen
      title={t('review.title')}
      onBack={onClose}
      footer={
        <button className="btn block" onClick={onClose}>
          {t('common.done')}
        </button>
      }
    >
      {stats.total === 0 ? (
        <div className="card">
          <p>{t('review.empty')}</p>
        </div>
      ) : (
        <>
          <p className="note">{t('review.intro')}</p>
          {stats.reviewed > 0 && (
            <div className="card">
              <p className="what-why">{t('review.summary', { n: num(stats.gone), total: num(stats.total) })}</p>
            </div>
          )}
          {s.beliefs.map((b, i) =>
            b.belief.trim() === '' ? null : (
              <div key={i} className="card belief">
                <p className="tag">{t('review.believed')}</p>
                <p className="what-why">{b.belief}</p>
                {b.truth.trim() !== '' && (
                  <>
                    <p className="tag">{t('review.truth')}</p>
                    <p>{b.truth}</p>
                  </>
                )}
                <p className="tag">{t('review.now')}</p>
                <Segmented
                  options={[
                    { id: 'still' as const, label: t('review.still') },
                    { id: 'partly' as const, label: t('review.partly') },
                    { id: 'no' as const, label: t('review.no') },
                  ]}
                  value={(b.now ?? '') as Stance}
                  onChange={(now) => patch(i, { now })}
                />
                <label className="field">
                  {t('review.note')}
                  <textarea value={b.note ?? ''} onChange={(e) => patch(i, { note: e.target.value })} />
                </label>
              </div>
            ),
          )}
        </>
      )}
    </Screen>
  );
}
