import { useEffect, useState } from 'react';
import { ChaptersScreen } from './Chapters';
import { CravingScreen } from './Craving';
import { Dash } from './Dash';
import { Insights } from './Insights';
import { Lists } from './Lists';
import { LastScreen, PrepHome, StepScreen } from './Prep';
import { RemindersScreen } from './Reminders';
import { ReviewScreen } from './Review';
import { Settings } from './Settings';
import { UpdateBanner } from './UpdateBanner';
import { useT } from './i18n';
import { useStore } from './store';
import type { StepId } from './store';
import { Icon } from './ui';

type Tab = 'home' | 'lists' | 'insights' | 'settings';
type Overlay = { name: 'step'; id: StepId } | { name: 'last' } | { name: 'craving' } | { name: 'review' } | { name: 'reminders' } | { name: 'chapters' } | null;

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
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#09090b' : '#f5f5f2');
    document.title = t('app.name');
  }, [s.lang, s.theme, t]);

  const close = () => setOverlay(null);
  const tabs: { id: Tab; icon: 'home' | 'list' | 'chart' | 'sliders'; label: string }[] = [
    { id: 'home', icon: 'home', label: t('nav.home') },
    { id: 'lists', icon: 'list', label: t('nav.lists') },
    { id: 'insights', icon: 'chart', label: t('nav.insights') },
    { id: 'settings', icon: 'sliders', label: t('nav.settings') },
  ];

  return (
    <div className="app">
      {tab === 'home' &&
        (s.quitAt == null ? (
          <PrepHome onOpen={(id) => setOverlay({ name: 'step', id })} onLast={() => setOverlay({ name: 'last' })} />
        ) : (
          <Dash onCraving={() => setOverlay({ name: 'craving' })} onReview={() => setOverlay({ name: 'review' })} onReminders={() => setOverlay({ name: 'reminders' })} onChapters={() => setOverlay({ name: 'chapters' })} />
        ))}
      {tab === 'lists' && <Lists />}
      {tab === 'insights' && <Insights />}
      {tab === 'settings' && <Settings />}

      <UpdateBanner />

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
      {overlay?.name === 'review' && <ReviewScreen onClose={close} />}
      {overlay?.name === 'reminders' && <RemindersScreen onClose={close} />}
      {overlay?.name === 'chapters' && <ChaptersScreen onClose={close} />}
    </div>
  );
}
