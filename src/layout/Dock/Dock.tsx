import React, { createElement, ReactNode } from 'react';
import styled from 'styled-components';

import {
  IrisProps,
  withIris,
  Attach,
  AttachAlias,
  usePortal,
} from '../../utils';

export const Dock = withIris<HTMLDivElement, Props>(DockComponent);

type Props = IrisProps<{
  children: ReactNode;
  /**
   * [default = 'left']
   */
  attach?: Attach | AttachAlias;
}>;

function DockComponent({
  children,
  attach = 'left',
  forwardRef,
  ...props
}: Props) {
  const [Dock, anchor] = usePortal(
    <DockStyled ref={forwardRef} {...props}>
      {children}
    </DockStyled>,
    { attach, forceActive: true, anchorToWindow: true, margin: 0 }
  );

  return (
    <>
      {Dock}
      {createElement('div', anchor)}
    </>
  );
}

const DockStyled = styled.div`
  min-width: 3rem;
  min-height: 3rem;
  background: ${({ theme }) => theme.content.background};
`;