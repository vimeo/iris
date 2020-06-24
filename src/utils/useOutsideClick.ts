import {
  useEffect,
  MutableRefObject,
  MouseEventHandler,
} from 'react';

type Ref = MutableRefObject<HTMLElement>;
type Refs = MutableRefObject<HTMLElement>[];

export function useOutsideClick(
  refs: Ref | Refs,
  onClick: MouseEventHandler,
) {
  useEffect(() => {
    function click(event) {
      const targeted = ref => ref?.current?.contains(event.target);
      const outside = ![refs].flat().some(targeted);

      if (outside) onClick(event);
    }

    document.addEventListener('mousedown', click);
    document.addEventListener('touchstart', click);
    return () => {
      document.removeEventListener('mousedown', click);
      document.removeEventListener('touchstart', click);
    };
  }, [refs, onClick]);
}
