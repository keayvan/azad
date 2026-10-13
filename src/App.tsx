import { useEffect, useState } from 'react';
import { CravingScreen } from './Craving';
import { Dash } from './Dash';
import { Insights } from './Insights';
import { LastScreen, PrepHome, StepScreen } from './Prep';
import { Settings } from './Settings';
import { useT } from './i18n';
import { useStore } from './store';
import type { StepId } from './store';
import { Icon } from './ui';

type Tab = 'home' | 'insights' | 'settings';
type Overlay = { name: 'step'; id: StepId } | { name: 'last' } | { name: 'craving' } | null;

export default function App() {
  const s = useStore();
  const { t } = useT();
  const [tab, setTab] = useState<Tab>('home');
  const [overlay, setOverlay] = useState<Overlay>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = s.lang;
    root.dir = s.lang === 'fa' ? 'rtl' : 'ltr';
    if (s.theme === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', s.theme);
    const dark =
      s.theme === 'dark' || (s.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0b0d19' : '#f4f5fb');
    document.title = t('app.name');
  }, [s.lang, s.theme, t]);

  const close = () => setOverlay(null);
  const tabs: { id: Tab; icon: 'home' | 'chart' | 'sliders'; label: string }[] = [
    { id: 'home', icon: 'home', label: t('nav.home') },
    { id: 'insights', icon: 'chart', label: t('nav.insights') },
    { id: 'settings', icon: 'sliders', label: t('nav.settings') },
  ];

  return (
    <div className="app">
      {tab === 'home' &&
        (s.quitAt == null ? (
          <PrepHome onOpen={(id) => setOverlay({ name: 'step', id })} onLast={() => setOverlay({ name: 'last' })} />
        ) : (
          <Dash onCraving={() => setOverlay({ name: 'craving' })} />
        ))}
      {tab === 'insights' && <Insights />}
      {tab === 'settings' && <Settings />}

      <nav className="nav">
        {tabs.map((x) => (
          <button key={x.id} className={tab === x.id ? 'on' : ''} onClick={() => setTab(x.id)}>
            <Icon name={x.icon} />
            {x.label}
          </button>
        ))}
      </nav>

      {overlay?.name === 'step' && <StepScreen id={overlay.id} onClose={close} />}
      {overlay?.name === 'last' && <LastScreen onClose={close} />}
      {overlay?.name === 'craving' && <CravingScreen onClose={close} />}
    </div>
  );
}
