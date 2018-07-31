import { darken, rgba } from 'polished';

import COLORS from '../globals/js/constants/COLORS';
import VimeoStyleSettings from '../globals/js/style-settings/VimeoStyleSettings';

export const ButtonColors = {
    AlternativeBackground: '#3A5161',
    AlternativeBackgroundHover: COLORS.AstroGranite,
    AlternativeBackgroundActive: darken(0.06, COLORS.AstroGranite),

    AlternativeOutlineHover: COLORS.Porcelain,

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

    PrimaryOutlineHover: COLORS.Foam,

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

    SuccessBackground: VimeoStyleSettings.colors.uiColors.successColor,
    SuccessBackgroundActive: darken(
        0.1,
        VimeoStyleSettings.colors.uiColors.successColorHover
    ),
    SuccessBackgroundHover:
        VimeoStyleSettings.colors.uiColors.successColorHover,

    SuccessOutlineHover: COLORS.RumSwizzle,

    WarningBackground: VimeoStyleSettings.colors.uiColors.alertColor,
    WarningBackgroundActive: darken(
        0.1,
        VimeoStyleSettings.colors.uiColors.alertColorHover
    ),
    WarningBackgroundHover: VimeoStyleSettings.colors.uiColors.alertColorHover,

    WarningOutlineHover: COLORS.PalePink,

    Transparent: rgba(COLORS.White, 0),
};