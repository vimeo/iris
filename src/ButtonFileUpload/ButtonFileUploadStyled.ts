import styled, { css } from 'styled-components';
import { rem, rgba, darken } from 'polished';
import COLORS from '../globals/js/constants/COLORS';

interface LabelStyledProps {
    disabled: boolean;
    format: string;
    isInline: boolean;
    autoMargins: boolean;
    size: 'sm' | 'md';
}

export const LabelStyled = styled.label<LabelStyledProps>`
    display: inline-flex;
    position: relative;
    width: 100%;
    margin: 0;
    font-weight: 700;
    border-width: ${rem(1)};
    border-style: solid;
    border-radius: ${rem(4)};

    transition: 100ms ease-in-out;
    text-align: center;
    vertical-align: middle;
    letter-spacing: 0.1px;
    appearance: none;
    align-items: center;
    justify-content: center;
    -webkit-font-smoothing: antialiased;

    ${props =>
        props.size === 'sm'
            ? css`
                  min-width: ${rem(68)};
                  min-height: ${rem(30)};
                  padding: 0 ${rem(10)};
                  font-size: ${rem(14)};
                  line-height: ${30 / 14};
              `
            : css`
                  min-width: ${rem(84)};
                  min-height: ${rem(38)};
                  padding: 0 ${rem(16)};
                  font-size: ${rem(14)};
                  line-height: ${38 / 14};
              `};

    &:hover {
        cursor: pointer;
    }

    &:active {
        outline: 0;
        transform: scale(0.98);
    }

    ${props =>
        props.autoMargins &&
        css`
            margin-right: ${rem(8)};

            &:last-of-type {
                margin-right: 0;
            }
        `}

    ${props =>
        (props.isInline || !props.autoMargins) &&
        css`
            margin: 0 0 ${rem(8)} 0;

            &:first-of-type {
                margin-right: 0;
            }
        `};

    ${props =>
        props.disabled &&
        css`
            cursor: not-allowed;
            color: #d0d8db;
            border-color: ${COLORS.Porcelain};
            background-color: ${COLORS.Porcelain};

            &:active {
                outline: 0;
                transform: scale(1);
            }

            &:hover {
                color: #d0d8db;
                border-color: ${COLORS.Porcelain};
                background-color: ${COLORS.Porcelain};
            }

            ${props =>
                props.format === 'primary' &&
                css`
                    color: ${rgba(COLORS.White, 0.7)};
                    border-color: transparent;
                    background-color: ${rgba(COLORS.VimeoBlue, 0.4)};

                    &:hover {
                        color: ${rgba(COLORS.White, 0.7)};
                        border-color: transparent;
                        background-color: ${rgba(COLORS.VimeoBlue, 0.4)};
                    }
                `};
        `};

    ${props =>
        props.format === 'primary' &&
        css`
            color: ${COLORS.White};
            border-color: ${COLORS.VimeoBlue};
            background-color: ${COLORS.VimeoBlue};

            &:hover {
                color: ${COLORS.White};
                border-color: ${COLORS.VimeoBlueDarkened};
                background-color: ${COLORS.VimeoBlueDarkened};
            }

            &:active {
                background-color: ${darken(0.1, COLORS.VimeoBlueDarkened)};
            }
        `}

    ${props =>
        props.format === 'secondary' &&
        css`
            color: ${COLORS.AstroGranite};
            border-color: ${COLORS.Plaster};
            background-color: ${COLORS.Plaster};
            letter-spacing: 0.25px;

            &:hover {
                color: ${COLORS.AstroGranite};
                border-color: ${COLORS.Plaster};
                background-color: ${COLORS.Plaster};
            }

            &:active {
                background-color: ${darken(0.06, COLORS.Plaster)};
            }
        `}

    ${props =>
        props.format === 'secondaryTextOnly' &&
        css`
            color: $Button_secondary-text-color;
            border-color: $Button_transparent_for_animation;
            background: $Button_transparent_for_animation;

            &:hover {
                color: $Button_secondary-text-color;
                border-color: $Button_secondary-bg-color_hover;
                background-color: $Button_secondary-bg-color_hover;
            }
        `}
`;

export const IconWrapper = styled.span<{ size: 'sm' | 'md' }>`
    display: inline-flex;
    align-items: center;

    svg {
        margin-right: ${rem(4)};

        ${props =>
            props.size === 'sm'
                ? css`
                      width: ${rem(14)};
                      height: ${rem(14)};
                  `
                : css`
                      width: ${rem(16)};
                      height: ${rem(16)};
                  `};

        * {
            fill: currentColor;
        }
    }
`;
