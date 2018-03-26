import COLORS from '../constants/COLORS';

const VimeoStyleSettings = {
    colors: {
        typeColors: {
            bodyTextColorDark: COLORS.AstroGranite,
            bodyTextColorLight: COLORS.RegentGray,
            headerTextColor: COLORS.AstroGranite,
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
            primaryColor: COLORS.VimeoBlue,
            primaryColorHover: COLORS.VimeoBlueDarkened,
            primaryColorLight: COLORS.Foam,
            successColor: COLORS.Pistachio,
            successColorHover: COLORS.PistachioDarkened,
            successColorLight: COLORS.RumSwizzle,
            warningColor: COLORS.WarningYellow,
        },
    },
    type: {
        fontFacePrimary: 'Helvetica Neue,Helvetica,Arial,sans-serif',
    },
};

export default VimeoStyleSettings;
