import React, {
  useLayoutEffect,
  RefObject,
  useState,
  ReactElement,
  useCallback,
} from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { Attach } from './usePortal_DEPRECATED.types';

interface Props {
  anchor: RefObject<HTMLElement>;
  anchorToWindow: boolean;
  attach: Attach;
  childRef: RefObject<HTMLElement>;
  children: ReactElement;
  margin?: number;
  style?: any;
}

interface State {
  rect?: ClientRect;
  childRect?: ClientRect;
  top?: string | number;
  left?: string | number;
}

export function Anchor({
  anchor,
  anchorToWindow,
  attach,
  childRef,
  children,
  margin,
  style,
  ...props
}: Props) {
  const [state, setState] = useState<State>({});

  const onResize = useCallback(() => {
    const childElement: HTMLElement = childRef?.current;
    if (!childElement) return;

    const viewport = anchorToWindow && windowRect();
    const childRect = calcRect(childRef);
    const rect = viewport || calcRect(anchor, window);

    const { top, left } = remPos({
      attach,
      margin,
      rect,
      childRect,
    });

    setState((state) => ({
      ...state,
      top,
      left,
      rect,
      childRect,
    }));
  }, [anchor, anchorToWindow, attach, childRef, margin]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => onResize(), []);

  useLayoutEffect(() => {
    const childElement: HTMLElement = childRef?.current;

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onResize);
    childElement?.addEventListener('transitionend', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onResize);
      childElement?.removeEventListener('transitionend', onResize);
    };
  }, [childRef, onResize]);

  useLayoutEffect(() => {
    if (!top && !left) onResize();
  });

  const { top, left } = state;

  const zIndex = useChildZIndex(children);

  return (
    <AnchorStyled
      anchorToWindow={anchorToWindow}
      attach={attach}
      childRect={state.childRect}
      children={children}
      margin={margin}
      rect={state.rect}
      style={{ ...style, top, left, zIndex }}
      {...props}
    />
  );
}

function useChildZIndex(children) {
  if (children.ref.current) {
    const style = getComputedStyle(children.ref.current);
    const zIndex = parseInt(style.zIndex);

    if (zIndex > 0) return zIndex;
  }

  return 5000;
}

function calcRect(
  ref: RefObject<HTMLElement>,
  { scrollX = 0, scrollY = 0 } = {}
): ClientRect {
  if (ref && ref.current) {
    const { offsetHeight, offsetWidth } = ref.current;
    const { x, y } = ref.current.getBoundingClientRect();

    const height = offsetHeight;
    const left = x + scrollX;
    const top = y + scrollY;
    const width = offsetWidth;

    return {
      bottom: top + height,
      height,
      left,
      right: left + width,
      top,
      width,
    };
  }

  return null;
}

function windowRect() {
  return {
    bottom: 0,
    height: window.innerHeight,
    left: 0,
    right: 0,
    top: 0,
    width: window.innerWidth,
  };
}

function remPos({ attach: [a, b], margin, rect, childRect }: any) {
  if (!rect || !childRect) return { top: null, left: null };

  const top =
    rect.top +
    rect.height * (a[0] / 100) -
    (childRect.height + margin * 2) * (b[0] / 100);

  const left =
    rect.left +
    rect.width * (a[1] / 100) -
    (childRect.width + margin * 2) * (b[1] / 100);

  return {
    top: rem(top <= 0 ? rect.bottom : top),
    left: rem(left <= 0 ? rect.right : left),
  };
}

export interface StyledProps {
  anchorToWindow: boolean;
  attach: Attach;
  childRect: ClientRect;
  margin: number;
  rect: ClientRect;
}

const AnchorStyled = styled.div<StyledProps>`
  position: fixed;
  margin: ${(p) => rem(p.margin)};
  overflow: visible;
  max-width: calc(100vw - 1.5rem) !important;

  ${(p) =>
    !p.anchorToWindow &&
    css`
      position: absolute;

      > div {
        max-width: 100%;

        > div {
          max-width: 100%;

          > * {
            max-width: 100%;
          }
        }
      }
    `}
`;
