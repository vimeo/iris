import VimeoStyleSettings from '../globals/js/style-settings/VimeoStyleSettings';
import {
    rem,
    rgba
} from 'polished';
import COLORS from '../globals/js/constants/COLORS';
import {Omit} from '../globals/js/type-helpers';

export interface InputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'label' | 'size'> {
    errorMsg?: React.ReactNode,
    format?: 'negative' | 'positive' | 'neutral',
    isInline?: boolean,
    helperMsg?: React.ReactNode,
    label: React.ReactNode,
    id: string,
    preMessage?: any,
    showLabel?: boolean,
    theme?: 'default' | 'light' | 'dark',
    size?: 'md' | 'lg' | 'xl',
}

export const InputStyleSettings = {
    animationSpeed: 300,
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
                    default:COLORS.SoutherlySky,
                    hover: COLORS.White,
                },
                positive: {
                    default: VimeoStyleSettings.colors.uiColors.positiveColor,
                    hover: VimeoStyleSettings.colors.uiColors.positiveColorHover,
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
                    default:COLORS.RegentGray,
                    hover: COLORS.AstroGranite,
                },
                positive: {
                    default: VimeoStyleSettings.colors.uiColors.positiveColor,
                    hover: VimeoStyleSettings.colors.uiColors.positiveColorHover,
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
    }
};

export const getInputBorderBoxShadow = (color) => `0 0 0 ${rem(1)} ${color}`;
