import { VimeoStyleSettings } from '../Legacy/VimeoStyleSettings';
import { css } from 'styled-components';
import { rem, rgba } from 'polished';
import { COLORS } from '../Legacy/COLORS';
import { ReactNode } from 'react';

export interface InputProps {
    errorMsg?: React.ReactNode;
    format?: 'negative' | 'positive' | 'neutral';
    isInline?: boolean;
    hasIcon?: boolean;
    helperMsg?: React.ReactNode;
    label: React.ReactNode;
    id: string;
    preMessage?: any;
    showLabel?: boolean;
    theme?: 'default' | 'light' | 'dark';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface InputStyledProps {
    format: 'negative' | 'positive' | 'neutral';
    isInline?: boolean;
    hasIcon?: boolean;
    theme?: 'light' | 'dark';
    inputSize?: 'sm' | 'md' | 'lg' | 'xl';
    inlineButton?: ReactNode;
}

export const InputStyleSettings = {
    border: {
        borderRadius: 3,
        borderSize: 1,
        borderSizeFocused: 2,
        borderStyle: 'solid',
    },
    color: {
        dark: {
            background: {
                default: rgba(COLORS.White, 0.1),
                disabled: COLORS.Plaster,
            },
            border: {
                disabled: COLORS.Porcelain,
                focus: COLORS.VimeoBlueDarkened,
                negative: {
                    default: VimeoStyleSettings.colors.uiColors.alertColor,
                    hover: VimeoStyleSettings.colors.uiColors.alertColorHover,
                },
                neutral: {
                    default: COLORS.IronHeart,
                    hover: COLORS.White,
                },
                positive: {
                    default: VimeoStyleSettings.colors.uiColors.positiveColor,
                    hover:
                        VimeoStyleSettings.colors.uiColors.positiveColorHover,
                },
            },
            text: {
                default: COLORS.Porcelain,
                disabled: COLORS.RegentGray,
                placeholder: COLORS.SoutherlySky,
            },
        },
        light: {
            background: {
                default: COLORS.White,
                disabled: COLORS.Plaster,
            },
            border: {
                disabled: COLORS.Porcelain,
                focus: COLORS.VimeoBlueDarkened,
                negative: {
                    default: VimeoStyleSettings.colors.uiColors.alertColor,
                    hover: VimeoStyleSettings.colors.uiColors.alertColorHover,
                },
                neutral: {
                    default: COLORS.RegentGray,
                    hover: COLORS.AstroGranite,
                },
                positive: {
                    default: VimeoStyleSettings.colors.uiColors.positiveColor,
                    hover:
                        VimeoStyleSettings.colors.uiColors.positiveColorHover,
                },
            },
            text: {
                default: VimeoStyleSettings.colors.typeColors.textColorDark,
                disabled: COLORS.RegentGray,
                placeholder: COLORS.SoutherlySky,
            },
        },
    },
    marginBottom: 8,
    size: {
        sm: {
            buttonInputPaddingHorizontal: 40,
            fontSize: 14,
            height: 32,
            iconInputPaddingHorizontal: 28,
            iconWrapperPaddingHorizontal: 12,
            iconWrapperPaddingVertical: 9,
            iconSize: 16,
            lineHeight: 16,
            paddingHorizontal: 9,
            paddingVertical: 7,
        },
        md: {
            buttonInputPaddingHorizontal: 40,
            fontSize: 14,
            height: 40,
            iconInputPaddingHorizontal: 36,
            iconWrapperPaddingHorizontal: 12,
            iconWrapperPaddingVertical: 11,
            iconSize: 18,
            lineHeight: 16,
            paddingHorizontal: 11,
            paddingVertical: 11,
        },
        lg: {
            buttonInputPaddingHorizontal: 48,
            fontSize: 16,
            height: 48,
            iconInputPaddingHorizontal: 36,
            iconWrapperPaddingHorizontal: 13,
            iconWrapperPaddingVertical: 15,
            iconSize: 18,
            lineHeight: 20,
            paddingHorizontal: 6,
            paddingVertical: 11,
        },
        xl: {
            buttonInputPaddingHorizontal: 60,
            fontSize: 16,
            height: 52,
            iconInputPaddingHorizontal: 39,
            iconWrapperPaddingHorizontal: 13,
            iconWrapperPaddingVertical: 15,
            iconSize: 24,
            lineHeight: 20,
            paddingHorizontal: 6,
            paddingVertical: 11,
        },
    },
};

const styles = InputStyleSettings;
const color = theme => styles.color[theme];
const size = inputSize => styles.size[inputSize];

const inlineButtonPadding = ({ inlineButton, inputSize }) =>
    size(inputSize)
        ? !inlineButton
            ? size(inputSize).paddingHorizontal
            : size(inputSize).buttonInputPaddingHorizontal
        : 0;

const iconPadding = ({ hasIcon, inputSize }) =>
    size(inputSize)
        ? hasIcon
            ? size(inputSize).iconInputPaddingHorizontal
            : size(inputSize).paddingHorizontal
        : 0;

export const getInputBaseStyles = ({
    theme = 'light',
    format = 'neutral',
    isInline,
    hasIcon,
    inputSize = 'md',
    inlineButton,
}: InputStyledProps) => {
    if (theme !== 'light' && theme !== 'dark') {
        theme = 'light';
    }

    return css`
        appearance: none;
        display: inline-block;
        width: 100%;
        background-color: ${color(theme).background.default};
        color: ${color(theme).text.default};
        height: ${rem(size(inputSize).height)};
        padding: ${rem(size(inputSize).paddingVertical)};
        padding-right: ${rem(inlineButtonPadding({ inlineButton, inputSize }))};
        padding-left: ${rem(iconPadding({ hasIcon, inputSize }))};
        margin: 0 0 ${isInline ? 0 : rem(styles.marginBottom)} 0;

        font-family: ${VimeoStyleSettings.type.fontFamily.regular};
        font-size: ${rem(size(inputSize).fontSize)};
        line-height: ${size(inputSize).lineHeight / size(inputSize).fontSize};

        border-color: ${color(theme).border[format].default};
        border-width: ${rem(styles.border.borderSize)};
        border-style: ${styles.border.borderStyle};
        border-radius: ${rem(styles.border.borderRadius)};
        box-shadow: inset 0 0 0 0 #ffffff;

        transition: 300ms ease-out;

        &:hover {
            border-color: ${color(theme).border[format].hover};
        }

        &:focus {
            box-shadow: ${getInputBorderBoxShadow(color(theme).border.focus)};
            border-color: ${color(theme).border.focus};
            outline: 0;
        }

        &::placeholder {
            color: ${color(theme).text.placeholder};
        }

        &:disabled {
            color: ${color(theme).text.disabled} !important;
            background-color: ${color(theme).background.disabled} !important;
            border-color: ${color(theme).border.disabled} !important;
        }
    `;
};

export const getInputBorderBoxShadow = color => `0 0 0 ${rem(1)} ${color}`;
