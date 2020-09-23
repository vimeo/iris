import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Checkmark } from '../../icons';
import { Text, Header } from '../../typography';
import { IrisProps, MinorComponent } from '../../utils';

export interface Minors {
  Header: MinorComponent;
  List: MinorComponent;
  Item: MinorComponent<{ selected?: boolean; href?: string }>;
  Divider: MinorComponent;
}

export const Pop: Minors = {
  Header: ({ children, ...props }: IrisProps) => (
    <Header
      size="6"
      style={{ padding: '0.5rem 1.5rem', margin: 0 }}
      {...props}
    >
      {children}
    </Header>
  ),
  List: ({ children }) => <>{children}</>,
  Item: ({ children, selected, ...props }) => (
    <PopItemStyled {...props}>
      {selected && <Check />}
      {children}
    </PopItemStyled>
  ),
  Divider: styled.div<IrisProps>`
    border-bottom: 1px solid
      ${({ theme }) => rgba(theme.content.color, 0.25)};
    width: 100%;
  `,
};

const PopItemStyled = styled(Text)`
  display: flex;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.content.color};
  padding: 0.5rem 1.5rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) =>
      rgba(
        theme.content.color,
        theme.name === 'light' ? 0.075 : 0.125
      )};
  }

  svg {
    width: 1rem;
    margin-right: 0.75rem;

    * {
      fill: currentColor;
    }
  }
`;

const Check = styled(Checkmark)`
  position: absolute;
  width: 1rem;
  top: 0.75rem;
  left: 0.25rem;
  color: ${({ theme }) => theme.formats.primary};
`;
