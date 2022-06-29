import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useMemo,
  useRef,
  MutableRefObject,
} from 'react';
import { AnimatePresence } from 'framer-motion';

import { throttle } from '../..';

const useIsomorphicLayoutEffect =
  typeof window === 'undefined' || typeof document === 'undefined'
    ? useEffect
    : useLayoutEffect;

export function Anchor({
  active,
  children,
  styleAnchor,
  styleChild,
  zIndex,
}) {
  return (
    <AnimatePresence>
      {active && (
        <div style={{ position: 'absolute', ...styleAnchor, zIndex }}>
          <div style={{ position: 'absolute', ...styleChild }}>
            {children}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function useAnchor(
  ref,
  //refAnchor,
  attach,
  active = false
) {
  const rectRef: MutableRefObject<Partial<DOMRect>> = useRef(
    new DOMRect()
  );

  const [_, forceUpdate] = useState(null);

  const [side, placement] = attach.split('-');

  /**
   * Memoized resize handler.
   * Account all throttles in memoized closure to prevent bursts of resize events.
   *
   * Compare memoized and observed element rects to check whether anchor position should be recalculated.
   */
  const onRectResize = useMemo(
    () =>
      throttle(() => {
        if (ref.current) {
          const refRect = ref.current.getBoundingClientRect();
          const memoizedRect = rectRef.current;
          const { width, height, top, left } = refRect;

          if (
            memoizedRect.top !== top ||
            memoizedRect.left !== left
          ) {
            rectRef.current = { width, height, top, left };
            forceUpdate({});
          }
        }
      }, 10),
    [ref]
  );

  /**
   * Once anchor is active start updating internals and subscribe to resize listeners.
   * Do it only once per mount/switch to reduce heavy computations and circular executions.
   */
  useIsomorphicLayoutEffect(() => {
    if (active) {
      onRectResize();

      window.addEventListener('resize', onRectResize);
      return () => window.removeEventListener('resize', onRectResize);
    }
  }, [onRectResize, active]);

  /**
   * Memoize child style.
   * In case of multiple anchors on screen and resizing can reduce amount of operations.
   */
  const styleChild = useMemo(() => {
    const style: any = {};
    style[side] = 0;
    style[placement] = 0;

    if (!placement) {
      const translate = 'translate' + flip(axis(side));
      const amount = 50 * orient(side) * -1;

      style[placement] = null;
      style[intersect(side)] = '50%';
      style.transform = translate + '(' + amount + '%)';
    }

    return style;
  }, [attach]);

  /**
   * Memoize transform.
   * In case of multiple anchors on screen and resizing can reduce amount of operations.
   */
  const transform = useMemo(() => {
    const translate = 'translate' + axis(side);
    const amount = 100 * orient(side);

    return translate + '(' + amount + '%)';
  }, [attach]);

  const styleAnchor: any = rectRef.current;

  styleAnchor.transform = transform;

  return { active, styleAnchor, styleChild };
}

function orient(side) {
  if (side === 'top' || side === 'left') return 1;
  if (side === 'right' || side === 'bottom') return -1;
}

function axis(position) {
  if (position === 'top' || position === 'bottom') return 'Y';
  if (position === 'right' || position === 'left') return 'X';
}

function intersect(position) {
  if (position === 'top') return 'left';
  if (position === 'right') return 'bottom';
  if (position === 'bottom') return 'right';
  if (position === 'left') return 'top';
}

function flip(position) {
  if (position === 'top') return 'bottom';
  if (position === 'right') return 'left';
  if (position === 'bottom') return 'top';
  if (position === 'left') return 'right';
  if (position === 'X') return 'Y';
  if (position === 'Y') return 'X';
}

// TODO
// external scroll observer
//
// useIsomorphicLayoutEffect(() => {
//   if (!active) return;

//   function scrollObserve(event) {
//     console.log('scroll');
//     if (ref.current) {
//       const rectRef: DOMRect = ref.current.getBoundingClientRect();
//       const rectNew = rectRef;
//       console.log(rectRef);

//       // if (rect.top !== rectNew.top) rectSet(rectNew);
//     }
//   }

//   window.addEventListener('scroll', scrollObserve);
//   return () => window.removeEventListener('scroll', scrollObserve);
// }, []);

// TODO
// child node observer
//
// When children change, the new height and width need to be
// calculated and animated to. If this triggers an attachment
// shift, that must also be factored into the animation.
// useIsomorphicLayoutEffect(() => {
//   const config = {
//     attributes: true,
//     childList: true,
//     subtree: true,
//   };

//   function onMutate(mutationsList, observer) {
//     if (mutationsList.length > 0) {
//       console.log({ mutationsList });
//     }
//   }

//   const observer = new MutationObserver(onMutate);

//   if (refAnchor.current) {
//     observer.observe(refAnchor.current, config);
//   }

//   return () => observer.disconnect();
// }, []);
