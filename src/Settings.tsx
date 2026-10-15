import { useRef, useState } from 'react';
import { useT } from './i18n';
import { getState, parseBackup, replaceState, resetAll, update, useStore } from './store';
import { Segmented, Toggle } from './ui';
import { fromLocalInput, toLocalInput } from './util';

export function Settings() {
  const s = useStore();
  const { t } = useT();
  const fileRef = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState('');

  function exportBackup() {
    const blob = new Blob([JSON.stringify(getState(), null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `raha-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function importBackup(file: File | undefined) {
    if (!file) return;
    const parsed = parseBackup(await file.text());
    if (parsed) {
      replaceState(parsed);
      setMsg(t('set.import.ok'));
    } else {
      setMsg(t('set.import.bad'));
    }
    if (fileRef.current) fileRef.current.value = '';
  }

  return (
    <div className="page">
      <div className="page-head">
        <h1>{t('set.title')}</h1>
      </div>

      <div className="card settings-group">
        <h2>{t('set.language')}</h2>
        <Segmented
          options={[
            { id: 'fa', label: 'فارسی' },
            { id: 'en', label: 'English' },
          ]}
          value={s.lang}
          onChange={(lang) => update({ lang })}
        />
        <h2>{t('set.theme')}</h2>
        <Segmented
          options={[
            { id: 'system', label: t('set.system') },
            { id: 'light', label: t('set.light') },
            { id: 'dark', label: t('set.dark') },
          ]}
          value={s.theme}
          onChange={(theme) => update({ theme })}
        />
      </div>

      <div className="card settings-group">
        <h2>{t('set.home')}</h2>
        <p className="note">{t('set.home.hint')}</p>
        {(
          [
            ['reminders', 'dash.reminders'],
            ['chapters', 'dash.chapters'],
            ['review', 'review.title'],
            ['milestones', 'dash.milestones'],
          ] as const
        ).map(([id, key]) => (
          <Toggle
            key={id}
            checked={!s.hiddenCards.includes(id)}
            label={t(key)}
            onChange={(on) =>
              update((cur) => ({ hiddenCards: on ? cur.hiddenCards.filter((x) => x !== id) : [...cur.hiddenCards, id] }))
            }
          />
        ))}
      </div>

      {s.quitAt != null && (
        <div className="card settings-group">
          <label className="field">
            {t('set.last')}
            <input
              type="datetime-local"
              value={toLocalInput(s.quitAt)}
              max={toLocalInput(Date.now())}
              onChange={(e) => {
                const ms = fromLocalInput(e.target.value);
                if (ms != null && ms <= Date.now()) update({ quitAt: ms });
              }}
            />
          </label>
        </div>
      )}

      <div className="card settings-group">
        <h2>{t('set.data')}</h2>
        <button className="btn ghost" onClick={exportBackup}>
          {t('set.export')}
        </button>
        <button className="btn ghost" onClick={() => fileRef.current?.click()}>
          {t('set.import')}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          hidden
          onChange={(e) => void importBackup(e.target.files?.[0])}
        />
        {msg && <p className="note">{msg}</p>}
        <button
          className="btn danger"
          onClick={() => {
            if (window.confirm(t('set.reset.confirm'))) resetAll();
          }}
        >
          {t('set.reset')}
        </button>
      </div>

      <div className="card">
        <h2>{t('set.about')}</h2>
        <p className="note">{t('set.about.body')}</p>
        <p className="tag" style={{ marginTop: 10 }}>
          {t('set.version', { v: __APP_VERSION__ })}
        </p>
      </div>
    </div>
  );
}
