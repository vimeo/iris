import {
  useEffect,
  MutableRefObject,
  MouseEventHandler,
} from 'react';

type Element = HTMLElement | null;
type Ref = MutableRefObject<Element>;
type Refs = MutableRefObject<Element>[];
type OutsideClickOptions = {
  useCapture?: boolean;
};

export function useOutsideClick(
  refs: Ref | Refs,
  onClick: MouseEventHandler,
  options?: OutsideClickOptions
) {
  useEffect(() => {
    if (!onClick) return;

    function click(event) {
      const targeted = (ref) => ref?.current?.contains(event.target);
      const outside = ![refs].flat().some(targeted);

      if (outside) onClick(event);
    }

    const useCapture = options?.useCapture || false;

    document.addEventListener('mousedown', click, useCapture);
    document.addEventListener('touchstart', click, useCapture);
    return () => {
      document.removeEventListener('mousedown', click, useCapture);
      document.removeEventListener('touchstart', click, useCapture);
    };
  }, [refs, onClick, options]);
}
