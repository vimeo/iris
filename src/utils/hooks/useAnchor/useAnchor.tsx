import React, { useEffect, useLayoutEffect, useState } from 'react';
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
  const [rect, rectSet] = useState<Partial<DOMRect>>(new DOMRect());

  const [side, placement] = attach.split('-');

  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      const updateRect = () => {
        const rectRef: DOMRect = ref.current.getBoundingClientRect();
        const { width, height, top, left } = rectRef;

        if (rect.top !== top || rect.left !== left) {
          rectSet({ width, height, top, left });
        }
      };

      const resizeEventListener = throttle(() => {
        updateRect();
      }, 10);

      window.addEventListener('resize', resizeEventListener);

      updateRect();

      return () => {
        window.removeEventListener('resize', resizeEventListener);
      };
    }
  }, [ref, rect]);

  const styleAnchor: any = rect;

  const translate = 'translate' + axis(side);
  const amount = 100 * orient(side);
  styleAnchor.transform = translate + '(' + amount + '%)';

  const styleChild: any = {};
  styleChild[side] = 0;
  styleChild[placement] = 0;

  if (!placement) {
    const translate = 'translate' + flip(axis(side));
    const amount = 50 * orient(side) * -1;

    styleChild[placement] = null;
    styleChild[intersect(side)] = '50%';
    styleChild.transform = translate + '(' + amount + '%)';
  }

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
