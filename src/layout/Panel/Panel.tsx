import React, {
  cloneElement,
  useRef,
  useLayoutEffect,
  useEffect,
} from 'react';

import { Props } from './Panel.types';
import { DragEdge, DragHighlight, PanelStyled } from './Panel.style';

import {
  withIris,
  usePortal,
  Attach,
  SimpleAnimation,
  useIrisError,
} from '../../utils';

export const Panel = withIris<HTMLDivElement, Props>(PanelComponent);

function PanelComponent({
  active,
  attach = 'right',
  children = null,
  content,
  forwardRef,
  maxWidth = 600,
  minWidth = 256,
  onClose,
  onOpen,
  onResize,
  resizable = false,
  screen = true,
  ...props
}: Props) {
  const dragEdgeRef = useRef<HTMLSpanElement>(null);
  const focusRef = useRef(null);
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

  const PortalContent = (
    <PanelStyled
      {...props}
      ref={forwardRef}
      attach={attach}
      minWidth={minWidth}
      maxWidth={maxWidth}
      {...irisError}
    >
      {content}
      {resizable && (
        <DragEdge ref={dragEdgeRef}>
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

  useEffect(() => {
    const dragEdge = dragEdgeRef.current;

    if (!dragEdge || !resizable) return;

    const handleMouseDown = () => {
      document.addEventListener('mouseup', handleMouseUp, true);
      document.addEventListener('mousemove', handleMouseMove, true);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mouseup', handleMouseUp, true);
      document.removeEventListener(
        'mousemove',
        handleMouseMove,
        true
      );
    };

    const handleMouseMove = (e: MouseEvent) => {
      // TODO - account for different values of 'attach'!
      e.preventDefault();
      const newWidth = e.clientX - document.body.offsetLeft;
      if (newWidth > minWidth && newWidth < maxWidth) {
        onResize && onResize(newWidth);
      }
    };

    dragEdge.addEventListener('mousedown', handleMouseDown);

    return () => {
      dragEdge.removeEventListener('mousedown', handleMouseDown);
    };
  }, [
    // TODO - Should not be passing ref here?
    // If we don't dragging stops working after we collapse the nav once
    // Probably because we stop rendering the drag edge if collapsed and when we re-open it's lost the reference?
    dragEdgeRef.current,
    maxWidth,
    minWidth,
    onResize,
    resizable,
  ]);

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
