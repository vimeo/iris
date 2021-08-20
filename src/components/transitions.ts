import { CSSProperties } from 'react';
import { CSSProps } from '../utils';
import { css } from 'styled-components';

export const base = '0.1s ease-in-out';
export const toggle = '0.3s cubic-bezier(0.17,0.67,0.53,1)';
export const animateClip = '0.25s ease-in-out';

export function transition(
  settings: CSSProperties,
  ...args: Array<keyof CSSProps>
) {
  const {
    transitionDuration = '120ms',
    transitionTimingFunction = 'ease-in-out',
  } = settings;

  const transitionProperty = args.join(', ');
  const willChange = settings.willChange ? transitionProperty : null;

  return css({
    transitionProperty,
    transitionDuration,
    transitionTimingFunction,
    willChange,
  });
}

export function setTrans(settings: CSSProperties) {
  return (...cssprops: Array<keyof CSSProps>) =>
    transition(settings, ...cssprops);
}
