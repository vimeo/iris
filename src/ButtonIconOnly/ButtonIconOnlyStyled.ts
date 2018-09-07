// @ts-ignore including React suppresses cannot be named error
import React from 'react';
// @ts-ignore
import styled, { StyledComponentClass, css } from 'styled-components';
import { rem } from 'polished';
import COLORS from '../globals/js/constants/COLORS';
import { ButtonIconOnlyStyledProps } from './ButtonIconOnlyTypes';

const ICON_SIZE = 20;

const ButtonSizes = {
    md: 40,
    sm: 32,
};

const maybeAutoSpacingHorizontal = props =>
    props.autoSpacingHorizontal
        ? css`
              margin-left: ${rem(2)};
              &:first-of-type {
                  margin-left: 0;
              }
          `
        : '';

const getSizeCSS = props => {
    const ButtonSizeInRem = rem(ButtonSizes[props.size] || ButtonSizes.md);

    return css`
        width: ${ButtonSizeInRem};
        height: ${ButtonSizeInRem};
    `;
};

const getFormatCSS = props => {
    switch (props.format) {
        case 'alternative':
            return css`
                color: ${COLORS.RegentGray};

                &:hover {
                    color: rgba(162, 175, 184, 0.16);
                }
            `;

        case 'light':
            return css`
                color: ${COLORS.AstroGranite};
                background-color: ${COLORS.White};

                &:hover {
                    color: ${COLORS.VimeoBlue};
                }
            `;

        case 'lightTransparent':
            return css`
                color: ${COLORS.White};

                &:hover {
                    color: rgba(255, 255, 255, 0.3);
                }
            `;

        case 'lightWarning':
            return css`
                color: ${COLORS.AstroGranite};
                background-color: ${COLORS.White};

                &:hover {
                    color: ${COLORS.SunsetOrange};
                }
            `;

        case 'midDark':
            return css`
                color: ${COLORS.RegentGray};

                &:hover {
                    color: ${COLORS.AstroGranite};
                    background-color: rgba(162, 175, 184, 0.16);
                }
            `;

        case 'primary':
            return css`
                color: ${COLORS.White};
                background-color: ${COLORS.VimeoBlue};

                &:hover {
                    background-color: ${COLORS.VimeoBlueDarkened};
                }
            `;

        case 'warning':
            return css`
                color: ${COLORS.SunsetOrange};

                &:hover {
                    color: ${COLORS.White};
                    background-color: ${COLORS.SunsetOrange};
                }
            `;

        default:
            // default is the 'dark' format
            return css`
                color: ${COLORS.AstroGranite};

                &:hover {
                    background-color: rgba(162, 175, 184, 0.16);
                }
            `;
    }
};

const ButtonIconOnlySharedCSS = css`
    display: inline-flex;
    position: relative;

    width: auto;
    margin: 0;
    padding: 0;

    outline: 0;
    border: 0;
    border-radius: ${rem(3)};
    background: transparent;

    transition: all 300ms ease;
    text-align: center;
    vertical-align: middle;

    appearance: none;
    align-items: center;
    justify-content: center;
    -webkit-font-smoothing: antialiased;

    &:hover {
        cursor: pointer;
    }

    &:active {
        outline: 0;
        transform: scale(0.92);
    }

    &:disabled {
        color: ${COLORS.Porcelain} !important;

        &:hover {
            color: ${COLORS.Porcelain} !important;
            background: inherit !important;
            pointer-events: none;
            cursor: not-allowed;
        }
    }
`;

export const ButtonStyled = styled<ButtonIconOnlyStyledProps, 'button'>(
    'button',
)`
    ${ButtonIconOnlySharedCSS}
    ${getFormatCSS}
    ${getSizeCSS}
    ${maybeAutoSpacingHorizontal}
`;

export const SpanStyled = styled<ButtonIconOnlyStyledProps, 'span'>('span')`
    ${ButtonIconOnlySharedCSS}
    ${getFormatCSS}
    ${getSizeCSS}
    ${maybeAutoSpacingHorizontal}
`;

export const IconWrapperStyled = styled.span`
    display: inline-flex;
    align-items: center;
    flex: 1;

    svg {
        width: ${rem(ICON_SIZE)};
        height: ${rem(ICON_SIZE)};
        flex: 1;
    }

    svg * {
        fill: currentColor;
    }
`;
