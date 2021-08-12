import React, {
  cloneElement,
  useRef,
  useLayoutEffect,
  useState,
} from 'react';

import { Props } from './Panel.types';
import { DragEdge, DragHighlight, PanelStyled } from './Panel.style';

import {
  withIris,
  usePortal,
  Attach,
  SimpleAnimation,
  useIrisError,
  throttle,
} from '../../utils';

export const Panel = withIris<HTMLDivElement, Props>(PanelComponent);

function PanelComponent({
  active,
  attach = 'right',
  children = null,
  content,
  forwardRef,
  maxDragWidth = 600,
  minDragWidth = 256,
  onDragStart,
  onDragEnd,
  onClose,
  onOpen,
  onResize,
  resizable = false,
  screen = true,
  style,
  ...props
}: Props) {
  const dragEdgeRef = useRef<HTMLSpanElement>(null);
  const focusRef = useRef(null);
  const [width, setWidth] = useState(null);
  const attachTo = attacher(attach);

  const controlled = active === true || active === false;
  const valid = controlled || (!controlled && children);

  // TODO: convert to accept function to encapsulate additonal
  // logic related to error state in dev ENV.
  const { irisError } = useIrisError(
    props,
    'Panel',
    'Uncontrolled `Panel` components require `children`!',
    valid
  );

  if (process.env.NODE_ENV === 'development' && !valid) active = true;

  const closed = attach === 'right' ? 100 : -100;
  const animation: SimpleAnimation = {
    enter: { transform: 'translateX(0)' },
    exit: { transform: `translateX(${closed}%)` },
  };

  const handleMouseMove = throttle((e) => {
    // TODO - Issue w/ resizing when attach is 'right'
    const dragWidth =
      attach === 'left'
        ? e.clientX - document.body.offsetLeft
        : document.body.offsetWidth - e.clientX;

    const width =
      dragWidth < minDragWidth
        ? minDragWidth
        : dragWidth > maxDragWidth
        ? maxDragWidth
        : dragWidth;

    setWidth(width);
    onResize?.(width);
  }, 10);

  const handleMouseDown = (e) => {
    e.preventDefault();
    onDragStart?.(e);
    document.addEventListener('mouseup', handleMouseUp, true);
    document.addEventListener('mousemove', handleMouseMove, true);
  };

  const handleMouseUp = (e) => {
    onDragEnd?.(e);
    document.removeEventListener('mouseup', handleMouseUp, true);
    document.removeEventListener('mousemove', handleMouseMove, true);
  };

  const PortalContent = (
    <PanelStyled
      {...props}
      ref={forwardRef}
      attach={attach}
      style={{
        ...style,
        ...(width && { width }),
      }}
      {...irisError}
    >
      {content}
      {resizable && (
        <DragEdge
          attach={attach}
          onMouseDown={handleMouseDown}
          ref={dragEdgeRef}
        >
          <DragHighlight />
        </DragEdge>
      )}
    </PanelStyled>
  );

  const PortalConfig = {
    attach: attachTo,
    animation,
    screen,
    margin: 0,
    anchorToWindow: true,
    onOpen,
    onClose,
    forceActive: active,
  };

  const [Panel, anchor] = usePortal(PortalContent, PortalConfig);

  useLayoutEffect(() => {
    focusRef.current && focusRef.current.focus();

    const focuser = (event) =>
      focusRef.current &&
      focusRef.current.parentNode &&
      !focusRef.current.parentNode.contains(event.relatedTarget) &&
      focusRef.current.focus();

    document.addEventListener('focusin', focuser);
    return () =>
      document.removeEventListener('focusin', focuser, true);
  });

  return (
    <>
      {Panel}
      {children && cloneElement(children, anchor)}
    </>
  );
}

function attacher(attach): Attach {
  switch (attach) {
    case 'right':
      return [
        [0, 100],
        [100, 100],
      ];
    case 'left':
      return [
        [100, 0],
        [100, 100],
      ];
  }
}
