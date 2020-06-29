import React, {
  useRef,
  useState,
  useMemo,
  cloneElement,
  ReactElement,
  useEffect,
  ReactPortal,
} from 'react';
import { createPortal } from 'react-dom';

import { Anchor } from './Anchor';
import { Screen } from './usePortal.style';
import { PortalConfig, AnchorProps } from './usePortal.types';

import { SSR } from '../SSR';
import { generateUID } from '../generateUID';
import { useOutsideClick } from '../useOutsideClick';
import { coordinates } from './coordinates';
import { onEvent } from '../onEvent';

export function usePortal(
  Component: ReactElement,
  portalConfig: PortalConfig,
): [false | ReactPortal, AnchorProps] {
  const [active, setActive] = useState(false);
  const UID = useMemo(() => generateUID(), []);

  const childRef = useRef(null);
  const ref = useRef(null);

  const {
    anchorToWindow = false,
    attach = null,
    margin = 8,
    onClose,
    onOpen,
    screen = false,
    trigger = 'click',
    forceActive,
  } = portalConfig;

  const onClick = () => trigger === 'click' && setActive(false);

  useEffect(() => () => !SSR && removeElementByID(UID), [UID]);
  useOutsideClick([ref, childRef], onClick);

  if (SSR) return [null, null];

  const outlet = createPortalOutlet(UID);

  const open = onEvent(() => setActive(true), onOpen);
  const close = onEvent(() => setActive(false), onClose);
  const toggle = e => (active ? close(e) : open(e));

  const clickProps = { onClick: toggle };
  const hoverProps = { onMouseEnter: open, onMouseLeave: close };

  const controlled = forceActive === true || forceActive === false;
  const clickable = !controlled && trigger === 'click' && clickProps;
  const hoverable = !controlled && trigger === 'hover' && hoverProps;

  const children = cloneElement(Component, { ref: childRef });

  const Portal = createPortal(
    <>
      <Anchor
        anchor={ref}
        anchorToWindow={anchorToWindow}
        attach={coordinates(attach)}
        childRef={childRef}
        margin={margin}
        children={children}
      />
      {screen && <Screen onClick={toggle} />}
    </>,
    outlet,
  );

  const WithExternalState = forceActive && Portal;
  const WithInternalState = active && Portal;

  const anchorProps = { ref, ...clickable, ...hoverable };

  return controlled
    ? [WithExternalState, anchorProps]
    : [WithInternalState, anchorProps];
}

function createPortalOutlet(id) {
  const portal = document.createElement('div');
  portal.id = id;
  document.body.appendChild(portal);
  return document.getElementById(id);
}

const removeElementByID = UID => {
  const element = document.getElementById(UID);
  if (element) element.outerHTML = '';
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
