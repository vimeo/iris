import React, { useState, MouseEvent } from 'react';
import { createPortal } from 'react-dom';

import { Props } from './Panel.types';
import { DragEdge, PanelStyled } from './Panel.style';

import {
  clamp,
  withIris,
  throttle,
  useForwardRef,
  useIsomorphicEffect,
  useStyleVars,
  usePortal,
} from '../../utils';

export const Panel = withIris<HTMLDivElement, Props>(PanelComponent);

const initialState = { min: 0, max: 600 };

function PanelComponent({
  active,
  attach = 'right',
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
  const outlet = usePortal();
  const ref = useForwardRef(forwardRef);

  const [width, widthSet] = useState(160);
  const [dragging, draggingSet] = useState(false);
  const [dragConstraint, dragConstraintSet] = useState(initialState);

  useIsomorphicEffect(() => {
    if (!resizable) return;

    const { minWidth, maxWidth } = getComputedStyle(ref.current);

    const min = parseFloat(minWidth) || dragConstraint.min;
    const max = parseFloat(maxWidth) || dragConstraint.max;

    dragConstraintSet({ min, max });
  }, [style, className]);

  const onMouseMove =
    resizable &&
    throttle((event: MouseEvent) => {
      if (dragging) {
        event.preventDefault();
        const { clientX } = event;
        const { offsetWidth, offsetLeft } = document.body;

        let width;
        if (attach === 'right') width = offsetWidth - clientX;
        if (attach === 'left') width = clientX - offsetLeft;
        width = clamp(width, dragConstraint);

        widthSet(width);

        const eventIris = { ...dragConstraint, current: width };
        onResize?.(event, eventIris);
      }
    }, 16);

  function onMouseDown(event: MouseEvent) {
    if (!resizable) return;

    event.preventDefault();

    draggingSet(true);
    onDragStart?.(event);
  }

  function onMouseUp(event: MouseEvent) {
    if (!resizable) return;

    draggingSet(false);
    onDragEnd?.(event);
  }

  useIsomorphicEffect(() => {
    if (!resizable) return;

    const htmlStyle = document.documentElement.style;
    if (dragging) htmlStyle.cursor = 'col-resize';

    document.addEventListener('mouseup', onMouseUp as any, true);
    document.addEventListener('mousemove', onMouseMove, true);

    return () => {
      htmlStyle.removeProperty('cursor');

      document.removeEventListener('mouseup', onMouseUp as any, true);
      document.removeEventListener('mousemove', onMouseMove, true);
    };
  }, [dragging]);

  const handle = resizable && active && (
    <DragEdge
      dragging={dragging}
      onMouseDown={onMouseDown}
      style={{ [attach]: 'calc(100% - 1rem)' }}
    />
  );

  const visible = 'translateX(0)';
  const shift = attach === 'left' ? -1 : 1;
  const hidden = `translateX(${shift * 100}%)`;
  const transform = active ? visible : hidden;

  const duration = Math.round(width / 6 + 90);
  const transition = dragging
    ? 'none'
    : `transform ${duration}ms ease-in-out`;

  const styleVars = useStyleVars({
    transform,
    transition,
    width,
  });

  return createPortal(
    <PanelStyled
      attach={attach}
      className={className}
      ref={ref}
      style={{ [attach]: 0, ...style, ...styleVars }}
      {...props}
    >
      {content}
      {handle}
    </PanelStyled>,
    outlet
  );
}
