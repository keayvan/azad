import { useT } from './i18n';
import { useStore } from './store';
import { Bars } from './ui';
import { countBy, hourBucket } from './util';

export function Insights() {
  const s = useStore();
  const { t, num } = useT();
  const all = s.cravings;
  if (all.length === 0) {
    return (
      <div className="page">
        <div className="page-head">
          <h1>{t('ins.title')}</h1>
        </div>
        <div className="card">
          <p className="sub">{t('ins.empty')}</p>
        </div>
      </div>
    );
  }
  const passed = all.filter((c) => c.outcome === 'passed').length;
  const rows = (key: (c: (typeof all)[number]) => string, prefix: string) =>
    countBy(all, key).map(([id, value]) => ({ label: t(`${prefix}.${id}`), value }));
  const helped = countBy(
    all.filter((c) => c.tried && c.outcome === 'passed' && c.suggestion),
    (c) => c.suggestion as string,
  )
    .slice(0, 5)
    .map(([label, value]) => ({ label, value }));
  return (
    <div className="page">
      <div className="page-head">
        <h1>{t('ins.title')}</h1>
      </div>
      <div className="stats">
        <div className="card stat">
          <b>{num(all.length)}</b>
          <span>{t('ins.total')}</span>
        </div>
        <div className="card stat">
          <b>{num(Math.round((passed / all.length) * 100))}%</b>
          <span>{t('ins.passRate')}</span>
        </div>
      </div>
      {helped.length > 0 && (
        <div className="card">
          <h2>{t('ins.helped')}</h2>
          <Bars rows={helped} />
        </div>
      )}
      <div className="card">
        <h2>{t('ins.byPlace')}</h2>
        <Bars rows={rows((c) => c.place, 'place')} />
      </div>
      <div className="card">
        <h2>{t('ins.byFeeling')}</h2>
        <Bars rows={rows((c) => c.feeling, 'feeling')} />
      </div>
      <div className="card">
        <h2>{t('ins.byBefore')}</h2>
        <Bars rows={rows((c) => c.before, 'before')} />
      </div>
      <div className="card">
        <h2>{t('ins.byHour')}</h2>
        <Bars rows={rows((c) => hourBucket(c.at), 'hour')} />
      </div>
    </div>
  );
}
