import { useRef, useState } from 'react';
import { useT } from './i18n';
import { useSortable } from './sortable';
import { update, useStore } from './store';
import type { QAItem } from './store';
import { Icon, ListEditor, Screen, Segmented, Toggle } from './ui';
import { listCount, moveItem, uid } from './util';

function QAEditor({ qa, onChange }: { qa: QAItem[]; onChange: (qa: QAItem[]) => void }) {
  const { t } = useT();
  const latest = useRef(qa);
  latest.current = qa;
  const sort = useSortable((from, to) => onChange(moveItem(latest.current, from, to)));
  const edit = (i: number, p: Partial<QAItem>) => onChange(qa.map((x, j) => (j === i ? { ...x, ...p } : x)));
  return (
    <>
      <div className="qa-wrap" ref={sort.ref as React.RefObject<HTMLDivElement>}>
        {qa.map((p, i) => (
          <div key={i} data-row className={`card belief${sort.dragging === i ? ' dragging' : ''}`}>
            <div className="top">
              {qa.length > 1 ? (
                <button
                  className="grip"
                  aria-label={t('common.reorder')}
                  onPointerDown={(e) => sort.start(e, i)}
                  onKeyDown={(e) => sort.onKey(e, i, qa.length)}
                >
                  <Icon name="grip" size={20} />
                </button>
              ) : (
                <span />
              )}
              <button className="icon-btn danger" aria-label={t('common.delete')} onClick={() => onChange(qa.filter((_, j) => j !== i))}>
                <Icon name="trash" size={18} />
              </button>
            </div>
            <label className="field">
              {t('qa.question')}
              <textarea value={p.q} onChange={(e) => edit(i, { q: e.target.value })} />
            </label>
            <label className="field">
              {t('qa.answer')}
              <textarea value={p.a} onChange={(e) => edit(i, { a: e.target.value })} />
            </label>
          </div>
        ))}
      </div>
      <button className="btn ghost" onClick={() => onChange([...qa, { q: '', a: '' }])}>
        <Icon name="plus" size={18} />
        {t('qa.add')}
      </button>
    </>
  );
}

export function ListScreen({ id, onClose }: { id: string; onClose: () => void }) {
  const s = useStore();
  const { t } = useT();
  const list = s.lists.find((l) => l.id === id);
  if (!list) return null;
  const patch = (p: { title?: string; items?: string[]; forCraving?: boolean; pinned?: boolean; qa?: QAItem[] }) =>
    update((cur) => ({ lists: cur.lists.map((l) => (l.id === id ? { ...l, ...p } : l)) }));
  return (
    <Screen
      title={list.title || t('lists.titlePlaceholder')}
      onBack={onClose}
      footer={
        <button className="btn block" onClick={onClose}>
          {t('common.done')}
        </button>
      }
    >
      <input
        value={list.title}
        maxLength={60}
        placeholder={t('lists.titlePlaceholder')}
        aria-label={t('lists.titlePlaceholder')}
        onChange={(e) => patch({ title: e.target.value })}
      />
      {list.kind === 'qa' ? (
        <QAEditor qa={list.qa ?? []} onChange={(qa) => patch({ qa })} />
      ) : (
        <>
          {list.items.length === 0 && <p className="note">{t('lists.noItems')}</p>}
          <ListEditor items={list.items} onChange={(items) => patch({ items })} placeholder={t('lists.itemPlaceholder')} />
        </>
      )}
      <Toggle checked={list.pinned === true} label={t('lists.pin')} onChange={(v) => patch({ pinned: v })} />
      {list.kind !== 'qa' && (
        <Toggle checked={list.forCraving} label={t('lists.forCraving')} onChange={(v) => patch({ forCraving: v })} />
      )}
      <button
        className="btn ghost small"
        onClick={() => {
          if (window.confirm(t('lists.delete.confirm'))) {
            update((cur) => ({ lists: cur.lists.filter((x) => x.id !== id) }));
            onClose();
          }
        }}
      >
        <Icon name="trash" size={18} />
        {t('lists.delete')}
      </button>
    </Screen>
  );
}

/** A list shown as a card on the home page. */
export function PinnedList({ id, onOpen, onRemove }: { id: string; onOpen: (id: string) => void; onRemove?: () => void }) {
  const s = useStore();
  const { t } = useT();
  const list = s.lists.find((l) => l.id === id);
  if (!list) return null;
  return (
    <div className="card pinned">
      <div className="pinned-head">
        <button className="pinned-title" onClick={() => onOpen(id)} aria-label={t('home.open')}>
          <b>{list.title || t('lists.titlePlaceholder')}</b>
          <Icon name="chevron" size={18} />
        </button>
        {onRemove && (
          <button className="icon-btn" aria-label={t('home.hide')} onClick={onRemove}>
            <Icon name="close" size={18} />
          </button>
        )}
      </div>
      {list.kind === 'qa' ? (
        (list.qa ?? []).filter((p) => p.q.trim() || p.a.trim()).length === 0 ? (
          <p className="note">{t('lists.pinned.empty')}</p>
        ) : (
          <ul className="pinned-qa">
            {(list.qa ?? [])
              .filter((p) => p.q.trim() || p.a.trim())
              .map((p, i) => (
                <li key={i}>
                  {p.q.trim() && <b>{p.q}</b>}
                  {p.a.trim() && <p>{p.a}</p>}
                </li>
              ))}
          </ul>
        )
      ) : list.items.length === 0 ? (
        <p className="note">{t('lists.pinned.empty')}</p>
      ) : (
        <ul className="pinned-items">
          {list.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Lists() {
  const s = useStore();
  const { t, num } = useT();
  const [adding, setAdding] = useState(false);
  const [title, setTitle] = useState('');
  const [kind, setKind] = useState<'items' | 'qa'>('items');
  const [openId, setOpenId] = useState<string | null>(null);
  const sort = useSortable((from, to) => update((cur) => ({ lists: moveItem(cur.lists, from, to) })));

  const create = () => {
    const v = title.trim();
    if (!v) return;
    const id = uid();
    update((cur) => ({
      lists: [...cur.lists, { id, title: v, items: [], forCraving: false, kind, qa: kind === 'qa' ? [{ q: '', a: '' }] : undefined }],
    }));
    setTitle('');
    setKind('items');
    setAdding(false);
    setOpenId(id);
  };

  return (
    <div className="page">
      <div className="head-row">
        <div className="page-head">
          <h1>{t('lists.title')}</h1>
        </div>
        <button className="add-btn" aria-label={t('lists.add')} onClick={() => setAdding(true)}>
          <Icon name="plus" />
        </button>
      </div>

      <p className="note">{t('lists.note')}</p>

      {adding && (
        <form
          className="card settings-group"
          onSubmit={(e) => {
            e.preventDefault();
            create();
          }}
        >
          <input
            autoFocus
            value={title}
            maxLength={60}
            placeholder={t('lists.titlePlaceholder')}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Segmented
            options={[
              { id: 'items' as const, label: t('lists.kind.items') },
              { id: 'qa' as const, label: t('lists.kind.qa') },
            ]}
            value={kind}
            onChange={setKind}
          />
          <div className="grid2">
            <button type="submit" className="btn" disabled={!title.trim()}>
              {t('lists.create')}
            </button>
            <button
              type="button"
              className="btn ghost"
              onClick={() => {
                setAdding(false);
                setTitle('');
              }}
            >
              {t('common.cancel')}
            </button>
          </div>
        </form>
      )}

      {s.lists.length === 0 && !adding && (
        <div className="card">
          <p className="sub">{t('lists.empty')}</p>
        </div>
      )}

      <div className="lists-wrap" ref={sort.ref as React.RefObject<HTMLDivElement>}>
        {s.lists.map((l, i) => (
          <div key={l.id} data-row className={`list-row${sort.dragging === i ? ' dragging' : ''}`}>
            {s.lists.length > 1 && (
              <button
                className="grip"
                aria-label={t('common.reorder')}
                onPointerDown={(e) => sort.start(e, i)}
                onKeyDown={(e) => sort.onKey(e, i, s.lists.length)}
              >
                <Icon name="grip" size={20} />
              </button>
            )}
            <button className="list-open" onClick={() => setOpenId(l.id)}>
              <span className="txt">
                <b>{l.title || t('lists.titlePlaceholder')}</b>
                <small>{t(l.kind === 'qa' ? 'lists.questions' : 'lists.items', { n: num(listCount(l)) })}</small>
              </span>
              <Icon name="chevron" size={18} />
            </button>
          </div>
        ))}
      </div>

      {openId && <ListScreen id={openId} onClose={() => setOpenId(null)} />}
    </div>
  );
}
