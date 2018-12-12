import { rem } from 'polished';
import styled, { css } from 'styled-components';
import { COLORS } from '../Legacy/';

export const VerticalMenuHeaderGroupStyled = styled.div`
    padding: ${rem(8)};
`;

export const HeaderWrapper = styled.div<{ hasActionButton: boolean }>`
    position: relative;
    padding-left: ${rem(10)};
    ${props =>
        props.hasActionButton &&
        css`
            padding-right: $VerticalMenuHeaderGroup_ButtonSize + rem-calc(20);
        `};
`;

export const ActionButtonWrapper = styled.span`
    position: absolute;
    top: 0;
    right: ${rem(12)};
`;

export const ActionButton = styled.span`
    svg {
        width: 1rem;
        height: auto;
        * {
            fill: $BodyTextColor-Light;
        }
    }
    &:hover {
        svg * {
            fill: ${COLORS.AstroGranite};
        }
    }
`;
