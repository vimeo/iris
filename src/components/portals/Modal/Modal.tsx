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

import { usePortal } from '../usePortal';
import { Attach } from '../AnchoredComponent';

import { DismissX } from '../../../icons';
import { themes } from '../../../themes';
import { withIris } from '../../../utils';

export const Modal = withIris<HTMLDivElement, Props, Minors>(
  ModalComponent,
);

Modal.Header = Header;
Modal.Footer = Footer;
Modal.PrimaryAction = PrimaryAction;
Modal.SecondaryAction = SecondaryAction;

function ModalComponent({
  active,
  content,
  children,
  dismissLabel,
  forwardRef,
  feature,
  onOpen,
  onClose,
  ...props
}: Props) {
  const focusRef = useRef(null);

  const attach: Attach = feature
    ? [
        [97, 97],
        [100, 100],
      ]
    : [
        [50, 50],
        [50, 50],
      ];

  const [Modal, anchor] = usePortal(
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
            onClick={event => anchor.onClick(event)}
          />
        )}
        <div>
          <a href="#" ref={focusRef} />
          {content}
        </div>
      </>
    </ModalStyled>,
    {
      attach,
      screen: true,
      anchorToWindow: true,
      onOpen,
      onClose,
      forceActive: active,
    },
  );

  useLayoutEffect(() => {
    focusRef.current && focusRef.current.focus();

    const focuser = event =>
      focusRef.current &&
      focusRef.current.parentNode &&
      !focusRef.current.parentNode.contains(event.relatedTarget) &&
      focusRef.current.focus();

    document && document.addEventListener('focusin', focuser);
    return (
      document &&
      document.removeEventListener('focusin', focuser, true)
    );
  });

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
