import React, {
  cloneElement,
  // useImperativeHandle,
  useMemo,
} from 'react';

import { Props } from './PopOver.types';
import { PopOverStyled } from './PopOver.style';
// import { ErrorBoundary } from './PopOver.error';
import { Minors } from './PopOver.minors';
import { useState } from 'react';
import { mergeRefs } from 'react-merge-refs';

import {
  useFloating,
  // Placement,
  offset,
  flip,
  shift,
  useClick,
  useInteractions,
  FloatingFocusManager,
  useRole,
  useDismiss,
  autoUpdate,
} from '@floating-ui/react-dom-interactions';

import {
  withIris,
  // usePortal_DEPRECATED,
  // SimpleAnimation,
} from '../../utils';
// import { useFloating } from '@floating-ui/react-dom';

export const PopOver = withIris<HTMLDivElement, Props, Minors>(
  PopOverComponent
);

// const animation: SimpleAnimation = {
//   enter: {
//     opacity: 1,
//     transform: 'translateY(0) scale(1)',
//   },
//   exit: {
//     opacity: 0,
//     transform: `translateY(-0.25rem) scale(0.98)`,
//   },
// };

function PopOverComponent({
  // active,
  attach = 'bottom',
  content,
  children,
  forwardRef,
}: // onClose,
// onOpen,
Props) {
  const [open, setOpen] = useState(false);

  const { x, y, reference, floating, strategy, context } =
    useFloating({
      open,
      onOpenChange: setOpen,
      middleware: [offset(10), flip(), shift()],
      placement: attach,
      whileElementsMounted: autoUpdate,
    });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context),
    useDismiss(context),
  ]);

  const ref = useMemo(
    () => mergeRefs([reference, (children as any).ref]),
    [reference, children]
  );

  return (
    <>
      {cloneElement(
        children,
        getReferenceProps({ ref, ...children.props })
      )}
      {open && (
        <FloatingFocusManager
          context={context}
          modal={false}
          order={['reference', 'content']}
          returnFocus={false}
        >
          <div
            ref={floating}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
            }}
            {...getFloatingProps()}
          >
            <PopOverStyled ref={forwardRef}>{content}</PopOverStyled>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}
