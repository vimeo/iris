import React, { cloneElement, useImperativeHandle } from 'react';

import { Props } from './PopOver.types';
import { PopOverStyled } from './PopOver.style';
import { ErrorBoundary } from './PopOver.error';
import { Minors } from './PopOver.minors';

import {
  withIris,
  usePortal_DEPRECATED,
  SimpleAnimation,
} from '../../utils';

export const PopOver = withIris<HTMLDivElement, Props, Minors>(
  PopOverComponent
);

const animation: SimpleAnimation = {
  enter: {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
  exit: {
    opacity: 0,
    transform: `translateY(-0.25rem) scale(0.98)`,
  },
};

function PopOverComponent({
  active,
  attach = 'bottom',
  content,
  children,
  forwardRef,
  onClose,
  onOpen,
  ...props
}: Props) {
  const [PopOver, anchor] = usePortal_DEPRECATED(
    <PopOverStyled ref={forwardRef} {...props}>
      <div>{content}</div>
    </PopOverStyled>,
    {
      attach,
      animation,
      forceActive: active,
      onClose,
      onOpen,
      onClick: children.props.onClick,
    }
  );

  // It doesn't seem like there's any official guidance on
  // preserving overwritten Refs from cloneElement ¯\_(ツ)_/¯
  useImperativeHandle(children?.ref, () => anchor.ref.current);

  return (
    <ErrorBoundary>
      {PopOver}
      {cloneElement(children, anchor)}
    </ErrorBoundary>
  );
}
