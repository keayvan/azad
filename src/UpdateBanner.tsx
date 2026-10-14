import { useEffect, useState } from 'react';
import { useT } from './i18n';

async function serverBuildId(): Promise<string | null> {
  try {
    const res = await fetch(`./version.json?t=${Date.now()}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const body = (await res.json()) as { id?: string };
    return typeof body.id === 'string' ? body.id : null;
  } catch {
    return null;
  }
}

export function UpdateBanner() {
  const { t } = useT();
  const [stale, setStale] = useState(false);

  useEffect(() => {
    if (!import.meta.env.PROD) return;
    const check = async () => {
      const id = await serverBuildId();
      if (id && id !== __BUILD_ID__) setStale(true);
    };
    void check();
    const onVisible = () => {
      if (document.visibilityState === 'visible') void check();
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, []);

  if (!stale) return null;
  return (
    <div className="update" role="status">
      <span>{t('update.msg')}</span>
      <button className="btn small" onClick={() => window.location.reload()}>
        {t('update.btn')}
      </button>
    </div>
  );
}
