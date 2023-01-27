import { useState, useMemo, useRef } from 'react';

import { PortalConfig } from './usePortal_DEPRECATED.types';

import { onEvent } from '../../events';
import { getComputedStyles, animate } from '../../DOM';
import { useIsomorphicEffect } from '../useIsomorphicEffect';

const initialState = {
  active: false,
  exiting: false,
  duration: 0.3,
};

export function useMountAnimations(
  {
    onOpen,
    onClose,
    forceActive,
    animation = defaultAnimation,
  }: PortalConfig,
  { childRef, screenRef }
) {
  const [state, stateSet] = useState(initialState);
  const { active, exiting, duration } = state;

  const lastForceActive = useRef(forceActive);

  const element = childRef.current;
  const controlled = forceActive === true || forceActive === false;
  const forcedClose = !forceActive && lastForceActive.current;

  useIsomorphicEffect(() => {
    if (element) {
      const curDuration = parseFloat(
        getComputedStyles(element, ['animation-duration'])[
          'animation-duration'
        ]
      );

      if (curDuration && duration !== curDuration) {
        stateSet((state) => ({ ...state, duration: curDuration }));
      }
    }
  }, [duration, element]);

  const animateExit = useMemo(
    () =>
      (ref, { enter, exit }) => {
        animate(
          ref,
          transition(enter, duration),
          transition(exit, duration)
        );
      },
    [duration]
  );

  useIsomorphicEffect(() => {
    if (!controlled && element && exiting) {
      animateExit(childRef, animation);
      if (screen) animateExit(screenRef, defaultAnimation);
    }

    if (controlled) {
      if (forcedClose) {
        animateExit(childRef, animation);
        if (screen) animateExit(screenRef, defaultAnimation);

        stateSet((state) => ({
          ...state,
          exiting: true,
        }));
      }

      lastForceActive.current = forceActive;
    }
  }, [
    animateExit,
    animation,
    childRef,
    controlled,
    element,
    exiting,
    forceActive,
    forcedClose,
    screenRef,
  ]);

  const open = onEvent(() => {
    if (!active) {
      stateSet((state) => ({
        ...state,
        exiting: false,
        active: true,
      }));
    }
  }, onOpen);

  const close = onEvent(() => {
    if (active) {
      stateSet((state) => ({
        ...state,
        active: true,
        exiting: true,
      }));
    }
  }, onClose);

  function finish() {
    if (exiting) {
      stateSet((state) => ({
        ...state,
        exiting: false,
        active: false,
      }));
    }
  }

  const animationProps = {
    onAnimationStart: () =>
      stateSet((state) => ({ ...state, active: true })),
    onTransitionEnd: () => finish(),
    onAnimationEnd: () => finish(),
  };

  if (controlled) {
    if (exiting || forcedClose) {
      return { open, close, active: true, animationProps };
    } else {
      return { open, close, active: forceActive, animationProps };
    }
  }

  return { open, close, active, animationProps };
}

const transition = (keys, dur) => ({
  ...keys,
  transition: Object.keys(keys)
    .map((key) => key + ' ' + dur + 's')
    .join(', '),
});

const defaultAnimation = {
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};
