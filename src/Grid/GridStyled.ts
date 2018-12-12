import styled from 'styled-components';
import { rem } from 'polished';
import { GridProps, GRID } from './GridTypes';
import { GridVariableElement } from './GridVariableElement';
import { mediaQuery } from '../Layout/MediaQuery';

export const GridStyled = styled<GridProps, any>(GridVariableElement)`
    ${mediaQuery.sm`
        padding-right: ${rem(GRID.gutterWidth * 4)};
        padding-left: ${rem(GRID.gutterWidth * 4)};

        ${props =>
            props.isNested
                ? `
            padding-right: ${rem(GRID.gutterWidth)};
            padding-left: ${rem(GRID.gutterWidth)};
        `
                : null}
    `} display: flex;

    max-width: ${props => (props.hasMaxWidth ? rem(GRID.maxWidth) : 'none')};

    margin: 0 auto;

    padding-right: ${rem(GRID.gutterWidth)};
    padding-left: ${rem(GRID.gutterWidth)};

    flex-wrap: wrap;

    ${props => (props.centered ? 'justify-content: center;' : null)};
`;
