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

import {
  IrisProps,
  withIris,
  Attach,
  AttachAlias,
  usePortal,
} from '../../utils';

export const PopOver = withIris<HTMLDivElement, Props, Minors>(
  PopOverComponent,
);

type Props = IrisProps<{
  /**
   * The popover's open/close state can be controlled with this prop.
   * If not defined, it will use the internal state.
   */
  active?: boolean;
  /**
   * [default = 'bottom']
   */
  attach?: Attach | AttachAlias;
  /**
   * The `content` defines what will appear inside the portal component,
   * whereas the `children` defines what the portal component is anchored to.
   */
  content?: ReactNode;
  children: ReactElement;
  onClose?: EventHandler<any>;
  onOpen?: EventHandler<any>;
}>;

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
