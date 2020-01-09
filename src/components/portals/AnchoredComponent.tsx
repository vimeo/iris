import React, { useLayoutEffect, RefObject, useReducer } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { geometry } from '../../utils';

type Point = number;
type Coordinates = [Point, Point];
export type Attach = [Coordinates, Coordinates];
export type AttachAlias =
  | 'top'
  | 'topRight'
  | 'right'
  | 'bottomRight'
  | 'bottom'
  | 'bottomLeft'
  | 'left'
  | 'topLeft';

export function AnchoredComponent({
  anchor,
  anchorToWindow,
  attach,
  margin,
  childRef,
  children,
  ...props
}) {
  const [{ rect, childRect }, dispatch] = useReducer(reducer, {});

  function reducer(state, action) {
    if (childRef.current) {
      const rect = anchorToWindow
        ? windowRect()
        : calcRect(anchor, window);

      if (!state.rect || sizeChanged(rect, state.rect)) {
        switch (action.type) {
          case 'resize':
            const childRect = calcRect(childRef);
            return { rect, childRect };
        }
      }
    }

    return state;
  }

  useLayoutEffect(() => {
    const onResize = () => dispatch({ type: 'resize' });
    onResize();

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onResize);
    };
  }, [attach]);

  return (
    <AnchoredComponentStyled
      attach={attach}
      margin={margin}
      rect={rect}
      childRect={childRect}
      {...props}
    >
      {children}
    </AnchoredComponentStyled>
  );
}

function calcRect(
  ref: RefObject<HTMLElement>,
  { scrollX = 0, scrollY = 0 } = {},
): ClientRect {
  if (ref && ref.current) {
    const rect = geometry(ref);

    return {
      bottom: rect.bottom,
      height: rect.height,
      left: rect.left + scrollX,
      right: rect.right,
      top: rect.top + scrollY,
      width: rect.width,
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

function sizeChanged(a: ClientRect, b: ClientRect) {
  if (!a || !b) {
    if (process.env.NODE_ENV === 'development')
      console.warn(
        '@vimeo/iris: usePortal is missing a ref for size change comparison!\n',
        '\n\tlast: ',
        a,
        '\n\tcurrent: ',
        b,
      );
    return null;
  }
  return a.width !== b.width || a.height !== b.height;
}

interface StyledProps {
  attach: Attach;
  margin: number;
  rect: ClientRect;
  childRect: ClientRect;
}

const AnchoredComponentStyled = styled.div<StyledProps>`
  position: absolute;
  margin: ${p => rem(p.margin)};
  overflow: visible;
  z-index: 1000;
  ${remPos}
`;

function remPos({
  attach: [a, b],
  margin,
  rect,
  childRect,
}: StyledProps) {
  if (!rect || !childRect) return;

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
