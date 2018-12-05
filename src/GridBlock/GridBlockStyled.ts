import styled from 'styled-components';
import { rem } from 'polished';

import { GridBlockProps } from './GridBlock';
import { GRID } from '../Grid/GridTypes';

export const GridBlockStyled = styled<GridBlockProps, 'div'>('div')`
    width: calc(100% + ${rem(GRID.columnGutter)});
    flex-grow: 1;
    flex-wrap: wrap;
    display: flex;
    padding: 0;
    margin-left: ${rem(GRID.gutterWidth * -1)};
    margin-right: ${rem(GRID.gutterWidth * -1)};

    ${props => (props.nowrap ? 'flex-wrap: nowrap;' : null)};
`;
