import React, {
  useRef,
  useState,
  useMemo,
  MouseEventHandler,
  RefObject,
  cloneElement,
  ReactElement,
  useEffect,
  ReactPortal,
  EventHandler,
} from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';

import {
  AnchoredComponent,
  Attach,
  AttachAlias,
} from './AnchoredComponent';

import { generateUID, SSR } from '../../utils';

interface AnchoredComponentProps {
  ref: RefObject<HTMLElement>;
  onClick?: MouseEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
}

interface PortalConfig {
  anchorToWindow?: boolean;
  attach?: Attach | AttachAlias;
  margin?: number;
  onClose?: EventHandler<any>;
  onOpen?: EventHandler<any>;
  screen?: boolean;
  trigger?: 'click' | 'hover';
  forceActive?: boolean | null | undefined;
}

export function usePortal(
  Component: ReactElement,
  {
    anchorToWindow = false,
    attach = null,
    margin = 8,
    onClose,
    onOpen,
    screen = false,
    trigger = 'click',
    forceActive,
  }: PortalConfig,
): [false | ReactPortal, AnchoredComponentProps] {
  const [active, setActive] = useState(false);
  const UID = useMemo(() => generateUID(), []);

  const childRef = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    if (trigger !== 'click') return;

    function offClick(event) {
      const { target } = event;
      const { current } = ref;

      return (
        active &&
        !outlet.contains(target) &&
        !current.contains(target) &&
        close(event)
      );
    }

    !SSR && document.addEventListener('click', offClick);

    return () =>
      !SSR && document.removeEventListener('click', offClick);
  });

  useEffect(portalCleanUp(UID), []);

  if (SSR) return [null, null];

  if (!SSR && !document.getElementById(UID)) {
    const portal = document.createElement('div');
    portal.id = UID;
    document.body.appendChild(portal);
  }

  const outlet = !SSR && document.getElementById(UID);

  function close(e) {
    onClose && onClose(e);
    setActive(false);
  }

  function open(e) {
    onOpen && onOpen(e);
    setActive(true);
  }

  function toggle(e) {
    setActive(active => {
      if (!active) open(e);
      return !active;
    });
  }

  const Portal = createPortal(
    <>
      <AnchoredComponent
        anchor={ref}
        anchorToWindow={anchorToWindow}
        attach={coords(attach)}
        childRef={childRef}
        margin={margin}
      >
        {cloneElement(Component, {
          ref: childRef,
        })}
      </AnchoredComponent>
      {screen && <Screen onClick={toggle} />}
    </>,
    outlet,
  );

  const clickable = trigger === 'click' && {
    onClick: toggle,
  };

  const hoverable = trigger === 'hover' && {
    onMouseEnter: toggle,
    onMouseLeave: toggle,
  };

  const controlled = forceActive === true || forceActive === false;

  return controlled
    ? [forceActive && Portal, { ref }]
    : [active && Portal, { ref, ...clickable, ...hoverable }];
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1
  }
`;

const Screen = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(50, 50, 50, 0.667);
  cursor: pointer;
  transition: 200ms;
  animation: ${fadeIn} 150ms ease-in-out;
`;

function coords(attach): Attach {
  if (typeof attach === 'string') {
    switch (attach) {
      case 'top':
        return [
          [0, 50],
          [100, 50],
        ];
      case 'topRight':
        return [
          [0, 100],
          [100, 0],
        ];
      case 'right':
        return [
          [50, 100],
          [50, 0],
        ];
      case 'bottomRight':
        return [
          [100, 100],
          [0, 0],
        ];
      case 'bottom':
        return [
          [100, 50],
          [0, 50],
        ];
      case 'bottomLeft':
        return [
          [100, 0],
          [0, 100],
        ];
      case 'left':
        return [
          [50, 0],
          [50, 100],
        ];
      case 'topLeft':
        return [
          [0, 0],
          [100, 100],
        ];
    }
  }

  if (attach && invalidCoords(attach)) {
    console.error(
      `Invalid coordinates: ${attach}. Values must be 0 - 100.`,
    );

    return attach.map(limitCoords);
  }

  return attach;
}

const invalidCoords = attach =>
  attach.flatMap(a => a).some(a => a < 0 || a > 100);

const limitCoords = coords =>
  coords.map(a => Math.min(100, Math.max(0, a)));

const portalCleanUp = UID => () => () => {
  return (
    !SSR &&
    document.getElementById(UID) &&
    (document.getElementById(UID).outerHTML = '')
  );
};

function isForwardRef(type) {
  return (
    type.$$typeof &&
    type.$$typeof.toString() === 'Symbol(react.forward_ref)'
  );
}

function isDOMElement(type) {
  return typeof type === 'string';
}

export function validate({ type }) {
  return isDOMElement(type) || isForwardRef(type);
}
