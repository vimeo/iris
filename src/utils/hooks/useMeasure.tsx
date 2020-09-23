import {
  useRef,
  cloneElement,
  useState,
  useCallback,
  useLayoutEffect,
} from 'react';
import { createPortal } from 'react-dom';

import {
  geometry,
  createPortalOutlet,
  removeElementByID,
  SSR,
} from '../DOM';

interface Depth {
  // TODO: write recursive children depth function for n depth
  // depth?: number;
  depth?: 0 | 1;
}

interface NestedDOMRect extends DOMRect {
  children?: NestedDOMRect[];
}

type State = NestedDOMRect | boolean;

export function useMeasure(Component, { depth = 0 }: Depth = {}) {
  const ref = useRef(null);
  const [measured, measuredSet] = useState<State>(false);
  const ComponentWithRef = cloneElement(Component, { ref });

  const outlet = !measured && createPortalOutlet('measure');
  const portal = !measured && createPortal(ComponentWithRef, outlet);

  const measureElements = useCallback(() => {
    if (measured) return;
    const rect: NestedDOMRect = geometry(ref.current);

    // TODO: write recursive children depth function for n depth
    if (depth > 0) {
      const children = (depth > 0 && ref.current?.children) ?? [];
      rect.children = [...children].map((child) => geometry(child));
    }

    // If measureElements() has been called but the elements
    // have not changed size or postion, return.
    if (!compareDOMRects(measured, rect)) return;

    measuredSet(rect);
    removeElementByID('measure');
  }, [depth, measured, ref]);

  useLayoutEffect(() => {
    measureElements();

    function resize() {
      measuredSet(false);
      measureElements();
    }

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [measureElements]);

  if (SSR) return [Component, null];

  const render = measured ? Component : portal;
  return [render, measured];
}

function compareDOMRects(a, b) {
  return (
    a.width !== b.width ||
    a.height !== b.height ||
    a.left !== b.left ||
    a.top !== b.top ||
    a.bottom !== b.bottom ||
    a.right !== b.right ||
    a.x !== b.x ||
    a.y !== b.y
  );
}
