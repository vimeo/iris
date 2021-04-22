import React, {
  cloneElement,
  useRef,
  useLayoutEffect,
  ReactNode,
  ReactElement,
  MouseEventHandler,
} from 'react';
import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

import {
  withIris,
  usePortal,
  Attach,
  IrisProps,
  SimpleAnimation,
} from '../../utils';
import { white } from '../../color';

export const Panel = withIris<HTMLDivElement, Props>(PanelComponent);

export type Props = IrisProps<{
  /**
   * The Panel's open/close state can be controlled with this prop.
   * If not defined, it will use the internal state.
   */
  active?: boolean;
  /**
   * [default = 'right']
   */
  attach?: 'right' | 'left';
  /**
   * The `content` defines what will appear inside the portal component,
   * whereas the `children` defines what the portal component is anchored to.
   */
  content?: ReactNode;
  children: ReactElement;
  onClose?: MouseEventHandler;
  onOpen?: MouseEventHandler;
  /**
   * Display a transparent screen over content when Panel is opened.
   *
   * [default = true]
   */
  screen?: boolean;
}>;

function PanelComponent({
  active,
  attach = 'right',
  children,
  content,
  forwardRef,
  onClose,
  onOpen,
  screen = true,
  ...props
}: Props) {
  const focusRef = useRef(null);
  const attachTo = attacher(attach);

  const closed = attach === 'right' ? 100 : -100;
  const animation: SimpleAnimation = {
    enter: { transform: 'translateX(0)' },
    exit: { transform: `translateX(${closed}%)` },
  };

  const [Panel, anchor] = usePortal(
    <PanelStyled ref={forwardRef} attach={attach} {...props}>
      <div>{content}</div>
    </PanelStyled>,
    {
      attach: attachTo,
      animation,
      screen,
      margin: 0,
      anchorToWindow: true,
      onOpen,
      onClose,
      forceActive: active,
    }
  );

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

const fadeIn = ({ attach }) => keyframes`
  0% {
    transform: translateX(${attach === 'right' ? '100%' : '-100%'});

  }

  100% {
    transform: translateX(0) rotate(0deg);
  }
`;

const PanelStyled = styled.div<{ attach: Props['attach'] }>`
  background: ${(p) => p.theme.content.background};
  padding: 10rem;
  z-index: 2000;
  animation: ${fadeIn} 300ms ease-in-out;
  height: 100vh;
  ${edge};
`;

// This is temporary until we have a universal solution for
// theme values that do not correspond to the same CSS
// property in different themes.

function edge({ theme, attach }) {
  return theme.name === 'dark'
    ? `border-${side(attach)}: 1px solid ${rgba(white, 0.25)}`
    : `box-shadow: 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.2)`;
}

function side(attach) {
  if (attach === 'left') return 'right';
  if (attach === 'right') return 'left';
}
