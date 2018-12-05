import styled from 'styled-components';
import COLORS from '../globals/js/constants/COLORS';
import { darken, rem, rgba } from 'polished';
import { css } from 'styled-components';
import DotsMenuIcon from '../icons/dots-menu.svg';

const speed = '100ms';
const activeColor = COLORS.Porcelain;
const inactiveColor = COLORS.Paste;
const hoverColor = darken(0.03, COLORS.Porcelain);

const truncation = baseColor => css`
    background: linear-gradient(
        to left,
        ${rgba(baseColor, 1)} 50%,
        ${rgba(COLORS.Black, 0)} 100%
    );
`;

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    background-color: ${inactiveColor};
    max-width: 30rem;
    margin-bottom: 0;
`;

export const LinkWrapper = styled.div<{
    hasRightSideContent: boolean;
    isActive: boolean;
}>`
    a {
        display: inline-block;
        position: relative;
        width: 100%;
        transition: background-color ${speed} ease;
        &:hover {
            color: inherit;
            border-radius: ${rem(2)};
            background-color: ${hoverColor};
        }
    }
    ${props =>
        props.hasRightSideContent &&
        css`
            a {
                padding-right: ${rem(36)};
            }
        `};
    ${props =>
        props.isActive &&
        css`
            a {
                background-color: ${activeColor};

                &:hover {
                    background-color: ${hoverColor};
                }
            }
        `};
`;

export const NestedMenu = styled.div<{
    isShowing: boolean;
    isActive: boolean;
    isHovered: boolean;
}>`
    ${truncation(inactiveColor)};
    position: absolute;
    top: ${rem(4)};
    right: 0;
    padding-left: 2rem;
    opacity: 0;
    transition: all ${speed} ease;
    pointer-events: none;
    margin-top: ${rem(-2)};
    opacity: ${props => (props.isShowing ? 1 : 0)};
    ${props => props.isActive && truncation(activeColor)};
    ${props => props.isShowing && props.isHovered && truncation(hoverColor)};
`;

export const DotsMenuIconStyled = styled(DotsMenuIcon)`
    transform: rotate(90deg);
`;
