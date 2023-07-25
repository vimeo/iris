import {
  useEffect,
  MutableRefObject,
  MouseEventHandler,
} from 'react';

type Element = HTMLElement | null;
type Ref = MutableRefObject<Element>;
type Refs = MutableRefObject<Element>[];
type OutsideClickOptions = {
  capture?: boolean;
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

    const capture = options?.capture || false;

    document.addEventListener('mousedown', click, capture);
    document.addEventListener('touchstart', click, capture);
    return () => {
      document.removeEventListener('mousedown', click, capture);
      document.removeEventListener('touchstart', click, capture);
    };
  }, [refs, onClick, options]);
}
