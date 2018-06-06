import { css } from 'styled-components';
import {
    darken,
    rem,
    rgba,
} from 'polished';
import COLORS from '../globals/js/constants/COLORS';
import calculateLineHeightTarget from '../globals/js/style-helpers/calculateLineHeight';
import VimeoStyleSettings from '../globals/js/style-settings/VimeoStyleSettings';
import mediaQuery from '../globals/js/style-helpers/mediaQuery';

const ButtonCoreCSS = `
    display: inline-flex;
    position: relative;

    width: 100%;
    margin: 0;

    font-family: ${VimeoStyleSettings.type.fontFamily.regular};
    font-weight: 700;

    border-width: ${rem(1)};
    border-style: solid;

    transition: all 0.1s ease-in-out;
    text-align: center;
    vertical-align: middle;
    letter-spacing: 0.1px;
    align-items: center;
    justify-content: center;
    -webkit-font-smoothing: antialiased;
`;


const ButtonColors = {
    AlternativeBackground: '#3A5161',
    AlternativeBackgroundHover: COLORS.AstroGranite,
    AlternativeBackgroundActive: darken(0.06, COLORS.AstroGranite),

    DisabledText: '#D0D8DB',
    DisabledBackground: COLORS.Porcelain,

    LightText: COLORS.White,

    LightTransparentBackground: rgba(COLORS.White, 0.3),
    LightTransparentBackgroundActive: rgba(COLORS.White, 0.7),
    LightTransparentBackgroundHover: rgba(COLORS.White, 0.5),

    PrimaryBackground: COLORS.VimeoBlue,
    PrimaryBackgroundActive: darken(0.1, COLORS.VimeoBlueDarkened),
    PrimaryBackgroundHover: COLORS.VimeoBlueDarkened,

    PrimaryDarkBackground: COLORS.VimeoBlue,
    PrimaryDarkBackgroundActive: COLORS.VimeoBlueDarkened,
    PrimaryDarkBackgroundHover: COLORS.VimeoBlueLightened,

    PrimaryDisabledText: rgba(COLORS.White, 0.7),
    PrimaryDisabledBackground: rgba(COLORS.VimeoBlue, 0.4),

    SecondaryText: COLORS.AstroGranite,
    SecondaryBackground: COLORS.Plaster,
    SecondaryBackgroundActive: darken(0.06, COLORS.Plaster),
    SecondaryBackgroundHover: COLORS.Porcelain,

    SecondaryDarkBackground: COLORS.AshenWinter,
    SecondaryDarkBackgroundHover: COLORS.IronHeart,
    SecondaryDarkBackgroundActive: COLORS.AshenWinter,

    SecondaryOutlineText: COLORS.RegentGray,
    SecondaryOutlineBackgroundHover: '#D0D8DB',

    SuccessBackground: VimeoStyleSettings.colors.uiColors.successColor,
    SuccessBackgroundActive: darken(
        0.1,
        VimeoStyleSettings.colors.uiColors.successColorHover
    ),
    SuccessBackgroundHover:
        VimeoStyleSettings.colors.uiColors.successColorHover,

    WarningBackground: VimeoStyleSettings.colors.uiColors.alertColor,
    WarningBackgroundActive: darken(
        0.1,
        VimeoStyleSettings.colors.uiColors.alertColorHover
    ),
    WarningBackgroundHover: VimeoStyleSettings.colors.uiColors.alertColorHover,

    Transparent: rgba(COLORS.White, 0),
};

const ButtonStyleSettings = {
    Formats: {
        alternative: {
            active: {
                backgroundColor: ButtonColors.AlternativeBackgroundActive,
            },
            default: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.AlternativeBackground,
                backgroundColor: ButtonColors.AlternativeBackground,
            },
            hover: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.AlternativeBackgroundHover,
                backgroundColor: ButtonColors.AlternativeBackgroundHover,
            },
        },

        alternativeOutline: {
            active: {
                backgroundColor: ButtonColors.AlternativeBackgroundActive,
            },
            default: {
                color: ButtonColors.AlternativeBackground,
                borderColor: ButtonColors.AlternativeBackground,
                backgroundColor: ButtonColors.Transparent,
            },
            hover: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.AlternativeBackground,
                backgroundColor: ButtonColors.AlternativeBackground,
            },
        },

        secondaryDark: {
            active: {
                backgroundColor: ButtonColors.SecondaryDarkBackgroundActive,
            },
            default: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.SecondaryDarkBackground,
                backgroundColor: ButtonColors.SecondaryDarkBackground,
            },
            hover: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.SecondaryDarkBackgroundHover,
                backgroundColor: ButtonColors.SecondaryDarkBackgroundHover,
            },
        },

        lightTransparent: {
            active: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.Transparent,
                backgroundColor: ButtonColors.LightTransparentBackgroundActive,
            },

            default: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.Transparent,
                backgroundColor: ButtonColors.LightTransparentBackground,
            },

            hover: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.Transparent,
                backgroundColor: ButtonColors.LightTransparentBackgroundHover,
            },
        },

        lightTextOnly: {
            active: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.Transparent,
                backgroundColor: ButtonColors.LightTransparentBackgroundActive,
            },

            default: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.Transparent,
                backgroundColor: ButtonColors.Transparent,
            },

            hover: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.Transparent,
                backgroundColor: ButtonColors.LightTransparentBackgroundHover,
            },
        },

        primary: {
            active: {
                backgroundColor: ButtonColors.PrimaryBackgroundActive,
            },
            default: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.PrimaryBackground,
                backgroundColor: ButtonColors.PrimaryBackground,
            },
            hover: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.PrimaryBackgroundHover,
                backgroundColor: ButtonColors.PrimaryBackgroundHover,
            },
            disabled: {
                color: ButtonColors.PrimaryDisabledText,
                borderColor: ButtonColors.PrimaryDisabledBackground,
                backgroundColor: ButtonColors.PrimaryDisabledBackground,
            },
        },

        primaryDark: {
            active: {
                backgroundColor: ButtonColors.PrimaryDarkBackgroundActive,
            },
            default: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.PrimaryDarkBackground,
                backgroundColor: ButtonColors.PrimaryDarkBackground,
            },
            hover: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.PrimaryDarkBackgroundHover,
                backgroundColor: ButtonColors.PrimaryDarkBackgroundHover,
            },
            disabled: {
                color: ButtonColors.PrimaryDisabledText,
                borderColor: ButtonColors.PrimaryDisabledBackground,
                backgroundColor: ButtonColors.PrimaryDisabledBackground,
            },
        },

        primaryOutline: {
            active: {
                backgroundColor: ButtonColors.PrimaryBackgroundActive,
            },
            default: {
                color: ButtonColors.PrimaryBackground,
                borderColor: ButtonColors.PrimaryBackground,
                backgroundColor: ButtonColors.Transparent,
            },
            hover: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.PrimaryBackground,
                backgroundColor: ButtonColors.PrimaryBackground,
            },
        },

        primaryTextOnly: {
            active: {
                backgroundColor: ButtonColors.PrimaryBackgroundActive,
            },
            default: {
                color: ButtonColors.PrimaryBackground,
                borderColor: ButtonColors.Transparent,
                backgroundColor: ButtonColors.Transparent,
            },
            hover: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.PrimaryBackgroundHover,
                backgroundColor: ButtonColors.PrimaryBackgroundHover,
            },
        },

        secondary: {
            active: {
                backgroundColor: ButtonColors.SecondaryBackgroundActive,
            },
            default: {
                color: ButtonColors.SecondaryText,
                borderColor: ButtonColors.SecondaryBackground,
                backgroundColor: ButtonColors.SecondaryBackground,
            },
            hover: {
                color: ButtonColors.SecondaryText,
                borderColor: ButtonColors.SecondaryBackgroundHover,
                backgroundColor: ButtonColors.SecondaryBackgroundHover,
            },
        },

        secondaryTextOnly: {
            active: {
                backgroundColor: ButtonColors.SecondaryBackgroundActive,
            },
            default: {
                color: ButtonColors.SecondaryText,
                borderColor: ButtonColors.Transparent,
                backgroundColor: ButtonColors.Transparent,
            },
            hover: {
                color: ButtonColors.SecondaryText,
                borderColor: ButtonColors.SecondaryBackground,
                backgroundColor: ButtonColors.SecondaryBackground,
            },
        },

        secondaryOutline: {
            active: {
                backgroundColor: ButtonColors.SecondaryBackgroundActive,
            },
            default: {
                color: ButtonColors.SecondaryOutlineText,
                borderColor: ButtonColors.SecondaryOutlineText,
                backgroundColor: ButtonColors.Transparent,
            },
            hover: {
                color: ButtonColors.SecondaryText,
                borderColor: ButtonColors.SecondaryOutlineBackgroundHover,
                backgroundColor: ButtonColors.SecondaryOutlineBackgroundHover,
            },
        },

        success: {
            active: {
                backgroundColor: ButtonColors.SuccessBackgroundActive,
            },
            default: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.SuccessBackground,
                backgroundColor: ButtonColors.SuccessBackground,
            },
            hover: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.SuccessBackgroundHover,
                backgroundColor: ButtonColors.SuccessBackgroundHover,
            },
        },

        successOutline: {
            active: {
                backgroundColor: ButtonColors.SuccessBackgroundActive,
            },
            default: {
                color: ButtonColors.SuccessBackground,
                borderColor: ButtonColors.SuccessBackground,
                backgroundColor: ButtonColors.Transparent,
            },
            hover: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.SuccessBackground,
                backgroundColor: ButtonColors.SuccessBackground,
            },
        },

        warning: {
            active: {
                backgroundColor: ButtonColors.WarningBackgroundActive,
            },
            default: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.WarningBackground,
                backgroundColor: ButtonColors.WarningBackground,
            },
            hover: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.WarningBackgroundHover,
                backgroundColor: ButtonColors.WarningBackgroundHover,
            },
        },

        warningOutline: {
            active: {
                backgroundColor: ButtonColors.WarningBackgroundActive,
            },
            default: {
                color: ButtonColors.WarningBackground,
                borderColor: ButtonColors.WarningBackground,
                backgroundColor: ButtonColors.Transparent,
            },
            hover: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.WarningBackground,
                backgroundColor: ButtonColors.WarningBackground,
            },
        },

        warningTextOnly: {
            active: {
                backgroundColor: ButtonColors.WarningBackgroundActive,
            },
            default: {
                color: ButtonColors.WarningBackground,
                borderColor: ButtonColors.Transparent,
                backgroundColor: ButtonColors.Transparent,
            },
            hover: {
                color: ButtonColors.LightText,
                borderColor: ButtonColors.WarningBackground,
                backgroundColor: ButtonColors.WarningBackground,
            },
        },
    },

    IconSizes: {
        xl: 24,
        lg: 18,
        md: 16,
        sm: 14,
        xs: 10,
    },

    Sizes: {
        xl: {
            fontSize: rem(16),
            lineHeight: calculateLineHeightTarget(16, 58),
            minWidth: rem(112),
            minHeight: rem(60),
            padding: `0 ${rem(24)}`,
        },
        lg: {
            fontSize: rem(16),
            lineHeight: calculateLineHeightTarget(16, 46),
            minWidth: rem(112),
            minHeight: rem(48),
            padding: `0 ${rem(24)}`,
        },

        md: {
            fontSize: rem(14),
            lineHeight: calculateLineHeightTarget(14, 38),
            minWidth: rem(84),
            minHeight: rem(39),
            padding: `0 ${rem(16)}`,
        },

        sm: {
            fontSize: rem(14),
            lineHeight: calculateLineHeightTarget(14, 30),
            minWidth: rem(68),
            minHeight: rem(32),
            padding: `0 ${rem(10)}`,
        },

        xs: {
            fontSize: rem(12),
            lineHeight: calculateLineHeightTarget(12, 23),
            minWidth: rem(48),
            minHeight: rem(24),
            padding: `0 ${rem(6)}`,
        },
    },
};

const getAutoWidthCSS = props => {
    const autoWidthCSS = css`
        width: auto;
        ${props.autoMargins
            ? `
                margin-right: ${rem(8)};

                &:last-of-type {
                    margin-right: 0;
                }
        `
            : ''};
    `;

    if (props.autoWidth === 'fluid') return;

    if (props.autoWidth === 'xs') {
        return autoWidthCSS;
    }

    return mediaQuery[props.autoWidth]`
        ${autoWidthCSS}
    `;
};


const getDefaultCSSByFormat = props => {
    const thisButtonFormat = ButtonStyleSettings.Formats[props.format] && ButtonStyleSettings.Formats[props.format].default;

    if(thisButtonFormat) {
        return `
            background-color: ${thisButtonFormat.backgroundColor};
            border-color: ${thisButtonFormat.borderColor};
            color: ${thisButtonFormat.color};
        `;
    }

    return '';
    
};

const getDisabledCSSByFormat = props => {
    const isPrimary = props.format === 'primary';

    return `
        background-color: ${
            isPrimary
                ? ButtonColors.PrimaryDisabledBackground
                : ButtonColors.DisabledBackground
        };
        border-color: ${
            isPrimary
                ? ButtonColors.PrimaryDisabledBackground
                : ButtonColors.DisabledBackground
        };
        color: ${
            isPrimary
                ? ButtonColors.PrimaryDisabledText
                : ButtonColors.DisabledText
        };
    `;
};

const getHoverCSSByFormat = props => {
    const thisButtonFormat = ButtonStyleSettings.Formats[props.format] &&ButtonStyleSettings.Formats[props.format].hover;

    if (thisButtonFormat) {
        return `
            background-color: ${thisButtonFormat.backgroundColor};
            border-color: ${thisButtonFormat.borderColor};
            color: ${thisButtonFormat.color};
        `;
    }

    return '';
};

const getActiveCSSByFormat = props => {
    const thisButtonFormat = ButtonStyleSettings.Formats[props.format] &&ButtonStyleSettings.Formats[props.format].active;
    if (thisButtonFormat) {
        return `
            background-color: ${thisButtonFormat.backgroundColor};
            border-color: ${thisButtonFormat.backgroundColor};
        `;
    }

    return '';
};

const getSizeCSS = props => {
    const thisButtonSize = ButtonStyleSettings.Sizes[props.size];

    return `
        min-width: ${thisButtonSize.minWidth};
        min-height: ${thisButtonSize.minHeight};
        padding: ${thisButtonSize.padding};

        font-size: ${thisButtonSize.fontSize};
        line-height: ${thisButtonSize.lineHeight};
    `;
};

const getVerticalAutoMarginCSS = props =>
    props.isInline || !props.autoMargins
        ? ''
        : `
        margin-bottom: ${rem(8)};
`;

export {
    ButtonColors,
    ButtonCoreCSS,
    ButtonStyleSettings,
    getActiveCSSByFormat,
    getAutoWidthCSS,
    getDefaultCSSByFormat,
    getDisabledCSSByFormat,
    getHoverCSSByFormat,
    getSizeCSS,
    getVerticalAutoMarginCSS,
};
