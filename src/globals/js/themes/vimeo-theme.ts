import COLORS from '../constants/COLORS';
import {rgba} from 'polished';

const VimeoTheme = {
    colors: {
        componentSpecificColors: {
            progressBar: {
                defaultTrackBackgroundColor: rgba(COLORS.AstroGranite, 0.15),
                disabledBarColor: COLORS.SoutherlySky,
                disabledTrackBackgroundColor: COLORS.Porcelain,
            },
        },
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
            primaryColor: COLORS.VimeoBlue,
            primaryColorHover: COLORS.VimeoBlueDarkened,
            primaryColorLight: COLORS.Foam,
            warningColor: COLORS.WarningYellow,
        },
    },
};

export default VimeoTheme;
