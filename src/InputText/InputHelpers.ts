import VimeoStyleSettings from '../globals/js/style-settings/VimeoStyleSettings';
import {
    css,
    //@ts-ignore
    InterpolationFunction,
    //@ts-ignore
    StyledComponentClass,
    //@ts-ignore
    Styles,
    //@ts-ignore
    ThemeProps,
} from 'styled-components';
import {
    rem,
    rgba
} from 'polished';
import COLORS from '../globals/js/constants/COLORS';

export interface InputProps {
    errorMsg?: React.ReactNode,
    format?: 'negative' | 'positive' | 'neutral',
    isInline?: boolean,
    hasIcon?: boolean,
    helperMsg?: React.ReactNode,
    label: React.ReactNode,
    id: string,
    preMessage?: any,
    showLabel?: boolean,
    theme?: 'default' | 'light' | 'dark',
    size?: 'sm' | 'md' | 'lg' | 'xl',
}

export interface InputStyledProps extends React.HTMLProps<HTMLInputElement>{
    format: 'negative' | 'positive' | 'neutral',
    isInline?: boolean,
    hasIcon?: boolean,
    theme?: 'default' | 'light' | 'dark',
    inputSize?: 'sm' | 'md' | 'lg' | 'xl',
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
    }
};

const getMaybeInlineButtonPadding = props => {
    if(props.inlineButton  && InputStyleSettings.size[props.inputSize]) {
        return InputStyleSettings.size[props.inputSize].buttonInputPaddingHorizontal;
    } else if (!props.inlineButton &&  InputStyleSettings.size[props.inputSize]) {
        return  InputStyleSettings.size[props.inputSize].paddingHorizontal;
    }
    
    return 0;
};


const getMaybeIconPadding = props => {

    if(InputStyleSettings.size[props.inputSize]) {
        return props.hasIcon ? InputStyleSettings.size[props.inputSize].iconInputPaddingHorizontal : InputStyleSettings.size[props.inputSize].paddingHorizontal;
    }

    return 0;
};

// @ts-ignore
export const getInputBaseStyles = props => props && css`
    appearance: none;
    display: inline-block;
    width: 100%;

    background-color: ${props => InputStyleSettings.color[props.theme] ? InputStyleSettings.color[props.theme].background.default : InputStyleSettings.color.light.background.default};
    color: ${props => InputStyleSettings.color[props.theme] ? InputStyleSettings.color[props.theme].text.default : InputStyleSettings.color.light.text.default};
    font-family: ${VimeoStyleSettings.type.fontFamily.regular};
    // @ts-ignore
    height:${props => InputStyleSettings.size[props.inputSize] ? rem(InputStyleSettings.size[props.inputSize].height) : rem(InputStyleSettings.size.md.height)};
    // @ts-ignore
    padding: ${props =>  InputStyleSettings.size[props.inputSize] ? rem(InputStyleSettings.size[props.inputSize].paddingVertical) : rem(InputStyleSettings.size.md.paddingVertical)};
    padding-right: ${props => rem(getMaybeInlineButtonPadding(props))};
    padding-left: ${props => rem(getMaybeIconPadding(props))};
    // @ts-ignore
    font-size: ${props => InputStyleSettings.size[props.inputSize] ? rem(InputStyleSettings.size[props.inputSize].fontSize) : rem(InputStyleSettings.size.md.fontSize)};
    // @ts-ignore
    line-height: ${props => InputStyleSettings.size[props.inputSize] ? InputStyleSettings.size[props.inputSize].lineHeight / InputStyleSettings.size[props.inputSize].fontSize : InputStyleSettings.size.md.lineHeight / InputStyleSettings.size.md.fontSize};
    // @ts-ignore
    margin: 0 0 ${props => props.isInline ? 0 : rem(InputStyleSettings.marginBottom)} 0;
    // @ts-ignore
    border-color: ${props => InputStyleSettings.color[props.theme].border[props.format].default};
    border-width: ${rem(InputStyleSettings.border.borderSize)};
    border-style: ${InputStyleSettings.border.borderStyle};
    border-radius: ${rem(InputStyleSettings.border.borderRadius)};
    box-shadow: inset 0 0 0 0 #FFFFFF;

    transition: all ${InputStyleSettings.animationSpeed}ms ease-out;

    &:hover {
        // @ts-ignore
        border-color: ${props => InputStyleSettings.color[props.theme] && InputStyleSettings.color[props.theme].border[props.format] ?InputStyleSettings.color[props.theme].border[props.format].hover : InputStyleSettings.color.light.border.neutral};
    }

    &:focus {
        box-shadow: ${props => InputStyleSettings.color[props.theme] ? getInputBorderBoxShadow(InputStyleSettings.color[props.theme].border.focus) : getInputBorderBoxShadow(InputStyleSettings.color.light.border.focus)};
        border-color: ${props => InputStyleSettings.color[props.theme] ? InputStyleSettings.color[props.theme].border.focus : InputStyleSettings.color.light.border.focus};
        outline: 0;
    }

    &::placeholder {
        color: ${props => InputStyleSettings.color[props.theme] ? InputStyleSettings.color[props.theme].text.placeholder : InputStyleSettings.color.light.text.placeholder};
    }

    &:disabled {
        color: ${props => InputStyleSettings.color[props.theme] ? InputStyleSettings.color[props.theme].text.disabled : InputStyleSettings.color.light.text.disabled} !important;
        background-color: ${props => InputStyleSettings.color[props.theme] ? InputStyleSettings.color[props.theme].background.disabled : InputStyleSettings.color.light.background.disabled}!important;
        border-color: ${props => InputStyleSettings.color[props.theme] ? InputStyleSettings.color[props.theme].border.disabled : InputStyleSettings.color.light.border.disabled} !important;
    }
`;

export const getInputBorderBoxShadow = (color) => `0 0 0 ${rem(1)} ${color}`;
