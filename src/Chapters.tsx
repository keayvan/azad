import { CHAPTERS } from './chapters';
import { useT } from './i18n';
import { update, useStore } from './store';
import { Icon, Screen } from './ui';
import { toggleChapter } from './util';

export function ChapterList({ checkable }: { checkable: boolean }) {
  const s = useStore();
  const { lang, num } = useT();
  const total = CHAPTERS.length;
  return (
    <ul className="chapters">
      {CHAPTERS.map((c) => {
        const read = s.readPct >= 100 || s.chaptersRead.includes(c.n);
        const [title, gist] = c[lang];
        return (
          <li key={c.n} className={read && checkable ? 'read' : ''}>
            {checkable && (
              <button
                className="chk"
                aria-pressed={read}
                aria-label={title}
                onClick={() => update(toggleChapter(s.readPct, s.chaptersRead, c.n, total))}
              >
                {read && <Icon name="check" size={16} />}
              </button>
            )}
            <details>
              <summary>
                <span className="no">{num(c.n)}</span>
                {title}
              </summary>
              <p>{gist}</p>
            </details>
          </li>
        );
      })}
    </ul>
  );
}

export function ChaptersScreen({ onClose }: { onClose: () => void }) {
  const { t } = useT();
  return (
    <Screen
      title={t('chapters.title')}
      onBack={onClose}
      footer={
        <button className="btn block" onClick={onClose}>
          {t('common.done')}
        </button>
      }
    >
      <p className="note">{t('book.notes.hint')}</p>
      <ChapterList checkable={false} />
    </Screen>
  );
}
