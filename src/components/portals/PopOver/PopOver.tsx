import React, {
  cloneElement,
  ReactNode,
  ReactElement,
  EventHandler,
} from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Minors } from './PopOver.minors';
export { Pop } from './PopOver.minors';

import { usePortal } from '../usePortal';
import { Attach, AttachAlias } from '../AnchoredComponent';

import { IrisProps, withIris } from '../../../utils';

export const PopOver = withIris<HTMLDivElement, Props, Minors>(
  PopOverComponent,
);

type Props = IrisProps<{
  active?: boolean;
  attach?: Attach | AttachAlias;
  content?: ReactNode;
  children: ReactElement;
  onClose?: EventHandler<any>;
  onOpen?: EventHandler<any>;
}>;

function PopOverComponent({
  active,
  attach,
  content,
  children,
  forwardRef,
  onClose,
  onOpen,
  ...props
}: Props) {
  const [PopOver, anchor] = usePortal(
    <PopOverStyled ref={forwardRef} {...props}>
      <div>{content}</div>
    </PopOverStyled>,
    { attach, forceActive: active, onClose, onOpen },
  );

  return (
    <>
      {PopOver}
      {cloneElement(children, anchor)}
    </>
  );
}

const PopOverStyled = styled.div<Props>`
  background: ${({ theme }) => theme.content.background};
  min-width: 10rem;
  min-height: 5rem;
  max-width: 40rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 ${rem(1)} 0 rgba(0, 0, 0, 0.15),
    0 ${rem(4)} ${rem(8)} 0 rgba(0, 0, 0, 0.15);
`;
