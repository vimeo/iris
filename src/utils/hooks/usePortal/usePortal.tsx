import React, {
  useRef,
  cloneElement,
  ReactElement,
  useEffect,
  ReactPortal,
} from 'react';
import { createPortal } from 'react-dom';

import { Screen } from './usePortal.style';
import { PortalConfig, AnchorProps } from './usePortal.types';
import { useMountAnimations } from './useMountAnimations';
import { coordinates } from './coordinates';
import { Anchor } from './Anchor';

import { useOutsideClick } from '../useOutsideClick';

import {
  SSR,
  createPortalOutlet,
  removeElementByID,
} from '../../DOM';
import { generateUID } from '../../general';

export function usePortal(
  Component: ReactElement,
  portalConfig: PortalConfig
): [false | ReactPortal, AnchorProps] {
  const UID = useRef<string>();
  useEffect(() => {
    UID.current = generateUID();
    return () => !SSR && removeElementByID(UID.current);
  }, []);

  const screenRef = useRef(null);
  const childRef = useRef(null);
  const ref = useRef(null);

  const {
    allowPageInteraction = false,
    anchorToWindow = false,
    attach = null,
    forceActive,
    margin = 8,
    onClick: onChildClick,
    screen = false,
    trigger = 'click',
  } = portalConfig;

  const {
    open,
    close,
    active,
    animationProps,
  } = useMountAnimations(portalConfig, { childRef, screenRef });

  const controlled = forceActive === true || forceActive === false;

  const toggle = (e) => (!controlled && active ? close(e) : open(e));

  const toggleWithChildClick = (e) => {
    onChildClick && onChildClick(e);
    toggle(e);
  };

  useOutsideClick([ref, childRef], (event) => {
    if (allowPageInteraction) return;
    if (!controlled && trigger === 'click') close(event);
  });

  if (SSR) return [null, null];

  const outlet = createPortalOutlet(UID.current);

  const clickProps = { onClick: toggleWithChildClick };
  const hoverProps = { onMouseEnter: open, onMouseLeave: close };

  const clickable = !controlled && trigger === 'click' && clickProps;
  const hoverable = !controlled && trigger === 'hover' && hoverProps;

  const children = cloneElement(Component, {
    ref: childRef,
    ...animationProps,
  });

  const Portal = createPortal(
    <>
      <Anchor
        anchor={ref}
        anchorToWindow={anchorToWindow}
        attach={coordinates(attach, anchorToWindow)}
        childRef={childRef}
        margin={margin}
        children={children}
      />
      {screen && <Screen ref={screenRef} onClick={toggle} />}
    </>,
    outlet
  );

  if (UID.current === undefined) removeElementByID(UID.current);

  return [active && Portal, { ref, ...clickable, ...hoverable }];
}

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
