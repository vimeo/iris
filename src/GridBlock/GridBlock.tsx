import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { GRID } from '../Grid/GridTypes';

export interface GridBlockProps {
  /**
   * Determine wether grid contents wrap to rows
   */
  nowrap?: boolean;
}

export const GridBlock: SFC<GridBlockProps> = ({
  nowrap = false,
  ...props
}) => <GridBlockStyled nowrap={nowrap} {...props} />;

export const GridBlockStyled = styled.div<GridBlockProps>`
  width: calc(100% + ${rem(GRID.columnGutter)});
  flex-grow: 1;
  flex-wrap: wrap;
  display: flex;
  padding: 0;
  margin-left: ${rem(GRID.gutterWidth * -1)};
  margin-right: ${rem(GRID.gutterWidth * -1)};

  ${props => (props.nowrap ? 'flex-wrap: nowrap;' : null)};
`;
