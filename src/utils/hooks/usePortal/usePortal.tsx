import React, {
  useRef,
  useMemo,
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
  const UID = useMemo(() => generateUID(), []);

  const screenRef = useRef(null);
  const childRef = useRef(null);
  const ref = useRef(null);

  const {
    anchorToWindow = false,
    attach = null,
    forceActive,
    margin = 8,
    screen = false,
    trigger = 'click',
    onClick: onChildClick,
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

  const onClick = !controlled && trigger === 'click' && close;

  useEffect(() => () => !SSR && removeElementByID(UID), [UID]);
  useOutsideClick([ref, childRef], onClick);

  if (SSR) return [null, null];

  const outlet = createPortalOutlet(UID);

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
