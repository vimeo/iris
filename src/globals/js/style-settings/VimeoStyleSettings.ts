import COLORS from '../constants/COLORS';

const VimeoStyleSettings = {
    type: {
        fontFamily: {
            regular: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            light: '"Helvetica Neue Light", Helvetica, Arial, sans-serif',
        },
        weights: {
            light: '300',
            mediumLight: '400',
            medium: '500',
            bold: '600',
        },
    },

    colors: {
        typeColors: {
            textColorDark: COLORS.AstroGranite,
            textColorMediumDark: COLORS.RegentGray,
            textColorMedium: COLORS.RegentGray,
            textColorMediumLight: COLORS.SoutherlySky,
            textColorLight: COLORS.Plaster,
            linkColorLight: COLORS.VimeoBlue,
            linkColorLightHover: COLORS.VimeoBlueDarkened,
            linkColorDark: COLORS.AstroGranite,
            linkColorHovered: COLORS.RegentGray,
            placeholderText: COLORS.RegentGray,
            selectedText: COLORS.VimeoBlue,
        },
        uiColors: {
            alertColor: COLORS.SunsetOrange,
            alertColorHover: COLORS.SunsetOrangeDarkened,
            alertColorLight: COLORS.PalePink,
            liveColor: COLORS.SunsetOrange,
            positiveColor: COLORS.Pistachio,
            positiveColorHover: COLORS.PistachioDarkened,
            primaryColor: COLORS.VimeoBlue,
            primaryColorHover: COLORS.VimeoBlueDarkened,
            primaryColorLight: COLORS.Foam,
            successColor: COLORS.Pistachio,
            successColorHover: COLORS.PistachioDarkened,
            successColorLight: COLORS.RumSwizzle,
            warningColor: COLORS.WarningYellow,
        },
    },
};

export default VimeoStyleSettings;
