import { useState } from 'react';
import { useT } from './i18n';
import { update, useStore } from './store';
import { useSortable } from './sortable';
import { Icon, ListEditor, Toggle } from './ui';
import { moveItem, uid } from './util';

export function Lists() {
  const s = useStore();
  const { t } = useT();
  const [adding, setAdding] = useState(false);
  const [title, setTitle] = useState('');

  const create = () => {
    const v = title.trim();
    if (!v) return;
    update((cur) => ({ lists: [...cur.lists, { id: uid(), title: v, items: [], forCraving: false }] }));
    setTitle('');
    setAdding(false);
  };
  const sort = useSortable((from, to) => update((cur) => ({ lists: moveItem(cur.lists, from, to) })));
  const patch = (id: string, p: { title?: string; items?: string[]; forCraving?: boolean }) =>
    update((cur) => ({ lists: cur.lists.map((l) => (l.id === id ? { ...l, ...p } : l)) }));

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
        <div key={l.id} data-row className={`card settings-group${sort.dragging === i ? ' dragging' : ''}`}>
          <div className="title-row">
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
            <input
              className="list-title"
              value={l.title}
              maxLength={60}
              aria-label={t('lists.titlePlaceholder')}
              onChange={(e) => patch(l.id, { title: e.target.value })}
            />
          </div>
          {l.items.length === 0 && <p className="note">{t('lists.noItems')}</p>}
          <ListEditor items={l.items} onChange={(items) => patch(l.id, { items })} placeholder={t('lists.itemPlaceholder')} />
          <Toggle checked={l.forCraving} label={t('lists.forCraving')} onChange={(v) => patch(l.id, { forCraving: v })} />
          <button
            className="btn ghost small"
            onClick={() => {
              if (window.confirm(t('lists.delete.confirm'))) update((cur) => ({ lists: cur.lists.filter((x) => x.id !== l.id) }));
            }}
          >
            <Icon name="trash" size={18} />
            {t('lists.delete')}
          </button>
        </div>
      ))}
      </div>
    </div>
  );
}
