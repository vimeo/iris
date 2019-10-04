import React, { SFC, ReactNode } from 'react';
import styled from 'styled-components';

import { Button } from '../../Button/Button';
import { OverflowTruncationWrapper } from '../../OverflowTruncationWrapper/OverflowTruncationWrapper';

import * as COLORS from '../../../color';
import { mediaQuery } from '../../../layout';

interface Props {
  children: ReactNode;
  className?: string;
  primaryButtonProps: { children: ReactNode };
  secondaryButtonProps?: { children: ReactNode };
  maxHeight: number;
}

const ActionArea = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${mediaQuery.md`
    flex-wrap: nowrap;
  `}
`;

const $Button = styled(Button)`
  margin: 0.25rem;

  ${mediaQuery.md`
    margin: 0 0.5rem;
  `}
`;

export const PopOverScrollableWithActionArea: SFC<Props> = ({
  children,
  className,
  maxHeight,
  primaryButtonProps,
  secondaryButtonProps,
  ...props
}) => (
  <div {...props} style={{ position: 'relative' }}>
    <OverflowTruncationWrapper maxHeight={maxHeight}>
      <div style={{ padding: '1rem' }}>{children}</div>
    </OverflowTruncationWrapper>
    <div
      style={{
        position: 'relative',
        padding: '0.75rem 0.5rem',
        backgroundColor: COLORS.White,
      }}
    >
      <ActionArea>
        {secondaryButtonProps && (
          <$Button
            {...secondaryButtonProps}
            autoWidth="fluid"
            format="secondary"
            size="sm"
            children={secondaryButtonProps.children}
          />
        )}
        <$Button
          {...primaryButtonProps}
          autoWidth="fluid"
          format="primary"
          size="sm"
          children={primaryButtonProps.children}
        />
      </ActionArea>
    </div>
  </div>
);
