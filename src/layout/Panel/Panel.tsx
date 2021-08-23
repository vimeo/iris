import React, {
  useLayoutEffect,
  useEffect,
  useState,
  MouseEvent,
  useRef,
  useImperativeHandle,
} from 'react';

import { Props } from './Panel.types';
import { DragEdge, PanelStyled } from './Panel.style';

import { withIris, throttle, getComputedStyles } from '../../utils';
import { createPortal } from 'react-dom';
import { clamp } from '../../tokens/util';

export const Panel = withIris<HTMLDivElement, Props>(PanelComponent);

function PanelComponent({
  active,
  attach = 'right',
  children = null,
  className,
  content,
  forwardRef,
  onDragStart,
  onDragEnd,
  onResize,
  resizable = false,
  screen = true,
  style,
  ...props
}: Props) {
  const [width, widthSet] = useState(0);
  const [dragging, draggingSet] = useState(false);

  const outlet = usePortal();

  const ref = useRef(null);
  useImperativeHandle(forwardRef as any, () => ref.current);

  const [dragConstraint, dragConstraintSet] = useState({
    min: 0,
    max: 600,
  });

  useIsomorphicEffect(() => {
    const styles = getComputedStyles(ref.current, [
      'min-width',
      'max-width',
    ]);

    const { min, max } = dragConstraint;
    const minNew = parseFloat(styles['min-width']) || min;
    const maxNew = parseFloat(styles['max-width']) || max;

    dragConstraintSet({ min: minNew, max: maxNew });
  }, [style, className]);

  const onMouseMove = throttle((event) => {
    if (dragging) {
      const { clientX } = event;
      const { offsetWidth, offsetLeft } = document.body;

      let width;
      if (attach === 'right') width = offsetWidth - clientX;
      if (attach === 'left') width = clientX - offsetLeft;

      width = clamp(width, dragConstraint);

      widthSet(width);
      onResize?.(event, { width });
    }
  }, 16);

  function onMouseDown(event: MouseEvent) {
    draggingSet(true);
    onDragStart?.(event);
  }

  function onMouseUp(event: MouseEvent) {
    draggingSet(false);
    onDragEnd?.(event);
  }

  useIsomorphicEffect(() => {
    document.addEventListener('mouseup', onMouseUp as any, true);
    document.addEventListener('mousemove', onMouseMove, true);

    return () => {
      document.removeEventListener('mouseup', onMouseUp as any, true);
      document.removeEventListener('mousemove', onMouseMove, true);
    };
  }, [dragging]);

  if (!outlet) return null;

  const visible = 'translateX(0)';
  const hidden =
    attach === 'left' ? 'translateX(-100%)' : 'translateX(100%)';
  const transform = active ? visible : hidden;

  const duration = Math.round(width / 6 + 90);
  const transition = dragging
    ? 'none'
    : `transform ${duration}ms ease-in-out`;

  style = {
    ...style,
    [attach]: 0,
    transform,
    width,
    transition,
  };

  const handle = active && (
    <DragEdge
      dragging={dragging}
      onMouseDown={onMouseDown}
      style={{ [attach]: 'calc(100% - 1rem)' }}
    />
  );

  const Panel = createPortal(
    <PanelStyled
      {...props}
      attach={attach}
      className={className}
      ref={ref}
      style={style}
    >
      {content}
      {handle}
    </PanelStyled>,
    outlet
  );

  return (
    <>
      {Panel}
      {children}
    </>
  );
}

const useIsomorphicEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

function usePortal() {
  let outlet = document.getElementById('iris-portals');

  if (!outlet) {
    outlet = document.createElement('div');
    outlet.id = 'iris-portals';
    document.body.appendChild(outlet);
  }

  return outlet;
}
