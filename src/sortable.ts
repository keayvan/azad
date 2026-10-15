import { useRef, useState } from 'react';
import type { KeyboardEvent, PointerEvent as ReactPointerEvent } from 'react';

/**
 * Drag-to-reorder for a container whose direct children are marked data-row.
 * Rows move live while the grip is dragged, so it works with touch and mouse alike.
 */
export function useSortable(onMove: (from: number, to: number) => void) {
  const ref = useRef<HTMLElement | null>(null);
  const current = useRef(-1);
  const [dragging, setDragging] = useState<number | null>(null);

  const start = (e: ReactPointerEvent, index: number) => {
    e.preventDefault();
    current.current = index;
    setDragging(index);
    const move = (ev: PointerEvent) => {
      const box = ref.current;
      if (!box) return;
      const rows = Array.from(box.querySelectorAll<HTMLElement>(':scope > [data-row]'));
      let target = 0;
      rows.forEach((row, i) => {
        if (i === current.current) return;
        const r = row.getBoundingClientRect();
        if (ev.clientY > r.top + r.height / 2) target++;
      });
      if (target !== current.current) {
        onMove(current.current, target);
        current.current = target;
        setDragging(target);
      }
    };
    const end = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', end);
      window.removeEventListener('pointercancel', end);
      current.current = -1;
      setDragging(null);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', end);
    window.addEventListener('pointercancel', end);
  };

  const onKey = (e: KeyboardEvent, index: number, count: number) => {
    if (e.key === 'ArrowUp' && index > 0) {
      e.preventDefault();
      onMove(index, index - 1);
    } else if (e.key === 'ArrowDown' && index < count - 1) {
      e.preventDefault();
      onMove(index, index + 1);
    }
  };

  return { ref, dragging, start, onKey };
}
