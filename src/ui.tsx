import { useState } from 'react';
import type { ReactNode } from 'react';
import { useT } from './i18n';

const PATHS: Record<string, ReactNode> = {
  home: <path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
  chart: <path d="M5 20V10M12 20V4M19 20v-7" />,
  sliders: (
    <>
      <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
      <circle cx="16" cy="7" r="2" />
      <circle cx="8" cy="17" r="2" />
    </>
  ),
  back: <path d="M15 5l-7 7 7 7" />,
  chevron: <path d="M9 5l7 7-7 7" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  trash: <path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13" />,
  plus: <path d="M12 5v14M5 12h14" />,
  wave: <path d="M3 12c3-6 6 6 9 0s6 6 9 0" />,
};

export function Icon({ name, size = 22 }: { name: keyof typeof PATHS; size?: number }) {
  return (
    <svg
      className={`icon icon-${name}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

export function Screen({
  title,
  onBack,
  children,
  footer,
}: {
  title: string;
  onBack?: () => void;
  children: ReactNode;
  footer?: ReactNode;
}) {
  const { t } = useT();
  return (
    <div className="screen">
      <header className="screen-head">
        {onBack && (
          <button className="icon-btn" onClick={onBack} aria-label={t('common.back')}>
            <Icon name="back" />
          </button>
        )}
        <h1>{title}</h1>
      </header>
      <div className="screen-body">{children}</div>
      {footer && <div className="screen-foot">{footer}</div>}
    </div>
  );
}

export function Chips({
  options,
  value,
  onChange,
}: {
  options: { id: string; label: string }[];
  value?: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="chips" role="group">
      {options.map((o) => (
        <button key={o.id} className={`chip${value === o.id ? ' on' : ''}`} onClick={() => onChange(o.id)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Segmented<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { id: T; label: string }[];
  value: T;
  onChange: (id: T) => void;
}) {
  return (
    <div className="segmented" role="group">
      {options.map((o) => (
        <button key={o.id} className={value === o.id ? 'on' : ''} onClick={() => onChange(o.id)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function ListEditor({
  items,
  onChange,
  placeholder,
}: {
  items: string[];
  onChange: (items: string[]) => void;
  placeholder: string;
}) {
  const { t } = useT();
  const [draft, setDraft] = useState('');
  const add = () => {
    const v = draft.trim();
    if (!v) return;
    onChange([...items, v]);
    setDraft('');
  };
  return (
    <div className="list-editor">
      <ul>
        {items.map((it, i) => (
          <li key={i} className="row">
            <span>{it}</span>
            <button
              className="icon-btn danger"
              aria-label={t('common.delete')}
              onClick={() => onChange(items.filter((_, j) => j !== i))}
            >
              <Icon name="trash" size={18} />
            </button>
          </li>
        ))}
      </ul>
      <form
        className="add-row"
        onSubmit={(e) => {
          e.preventDefault();
          add();
        }}
      >
        <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder={placeholder} />
        <button type="submit" className="btn small" disabled={!draft.trim()}>
          <Icon name="plus" size={18} />
          {t('common.add')}
        </button>
      </form>
    </div>
  );
}

export function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <label className={`toggle${checked ? ' on' : ''}`}>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className="box">{checked && <Icon name="check" size={16} />}</span>
      <span className="label">{label}</span>
    </label>
  );
}

export function Bars({ rows }: { rows: { label: string; value: number }[] }) {
  const max = Math.max(1, ...rows.map((r) => r.value));
  return (
    <div className="bars">
      {rows.map((r) => (
        <div key={r.label} className="bar-row">
          <span className="bar-label">{r.label}</span>
          <span className="bar-track">
            <span className="bar-fill" style={{ width: `${(r.value / max) * 100}%` }} />
          </span>
          <span className="bar-val">{r.value}</span>
        </div>
      ))}
    </div>
  );
}
