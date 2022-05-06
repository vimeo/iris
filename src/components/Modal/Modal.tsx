import React, { cloneElement, useRef, useLayoutEffect } from 'react';

import { Props } from './Modal.types';
import { Dismiss, Modal as ModalStyled } from './Modal.style';
import {
  Minors,
  Controls,
  Header,
  Footer,
  PrimaryAction,
  SecondaryAction,
} from './Modal.minors';

import {
  withIris,
  Attach,
  usePortal_DEPRECATED,
  SimpleAnimation,
} from '../../utils';
import { DismissX } from '../../icons';
import { themes } from '../../themes';

export const Modal = withIris<HTMLDivElement, Props, Minors>(
  ModalComponent
);

Modal.Header = Header;
Modal.Footer = Footer;
Modal.PrimaryAction = PrimaryAction;
Modal.SecondaryAction = SecondaryAction;

const animation: SimpleAnimation = {
  enter: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  exit: {
    opacity: 0,
    transform: `translateY(-15%)`,
  },
};

function ModalComponent({
  active,
  children,
  content,
  dismissLabel,
  feature,
  forwardRef,
  onClose,
  onOpen,
  screen = true,
  screenColor,
  ...props
}: Props) {
  const attach: Attach = feature
    ? [
        [97, 97],
        [100, 100],
      ]
    : [
        [50, 50],
        [50, 50],
      ];

  const allowPageInteraction = feature && !screen;
  const anchorToWindow = true;

  const [Modal, anchor] = usePortal_DEPRECATED(
    <ModalStyled ref={forwardRef} {...props}>
      <>
        {feature && (
          <Dismiss
            icon={<DismissX />}
            size="sm"
            variant="minimalTransparent"
            format="basic"
            theme={themes.dark}
            title={dismissLabel}
            onClick={(event) => anchor.onClick(event)}
          />
        )}
        <ModalContent>{content}</ModalContent>
      </>
    </ModalStyled>,
    {
      allowPageInteraction,
      anchorToWindow,
      animation,
      attach,
      forceActive: active,
      onClose,
      onOpen,
      screen,
      screenColor,
    }
  );

  return (
    <>
      {Modal && (
        <Controls.Provider value={{ close: anchor.onClick }}>
          {Modal}
        </Controls.Provider>
      )}
      {children && cloneElement(children, anchor)}
    </>
  );
}

function ModalContent({ children }) {
  const ref = useRef(null);

  // If focus leaves the modal, reset focus to the first
  // element of the modal. This ensure that so long as
  // the modal is active, elements outside the modal cannot
  // be focused.
  useLayoutEffect(() => {
    const { addEventListener, removeEventListener } = document;
    const firstFocusable = ref.current.querySelectorAll(focusable)[0];

    function captureFocus({ target }) {
      const focusOutOfModal = !ref.current?.contains(target);
      if (focusOutOfModal) firstFocusable?.focus();
    }

    addEventListener('focusin', captureFocus);
    return removeEventListener('focusin', captureFocus, true);
  }, [ref, children]);

  return <div ref={ref}>{children}</div>;
}

const focusable = [
  'a[href]',
  'area[href]',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  '[tabindex="0"]',
].join(', ');
