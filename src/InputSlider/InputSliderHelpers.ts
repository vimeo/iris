import COLORS from '../globals/js/constants/COLORS';
import { rem, rgba } from 'polished';

const InputSliderStyleSettings = {
    colors: {
        dark: {
            inRangeColor: COLORS.VimeoBlue,
            outRangeColor: COLORS.AshenWinter,
            handleColor: COLORS.White,
            handleBorder: 'none',
            handleBackground: `radial-gradient(
                ellipse at center,
                ${COLORS.White} 50%,
                ${rgba(COLORS.RavenImperial, 0.25)} 54%,
                ${rgba(COLORS.White, 0)} 59%,
                ${rgba(COLORS.White, 0)} 100%
            )`,
            handleFocusBackground: `radial-gradient(
                ellipse at center,
                ${COLORS.White} 50%,
                ${rgba(COLORS.RavenImperial, 0.25)} 54%,
                ${rgba(COLORS.RavenImperial, 0.08)} 59%,
                ${COLORS.VimeoBlueLightened} 65%,
                ${COLORS.VimeoBlueLightened} 71%,
                ${rgba(COLORS.VimeoBlueLightened, 0)} 71%,
                ${rgba(COLORS.VimeoBlueLightened, 0)} 100%
            )`,
            labelColor: COLORS.White,
            labelFocusedColor: COLORS.AstroGranite,
            labelHoverBackground: COLORS.AshenWinter,
            labelBackground: COLORS.ObsidianState,
        },
        light: {
            inRangeColor: COLORS.VimeoBlue,
            outRangeColor: COLORS.SoutherlySky,
            handleColor: COLORS.VimeoBlueDarkened,
            handleBorder: COLORS.Porcelain,
            handleBackground: `radial-gradient(
                ellipse at center,
                ${COLORS.White} 50%,
                ${rgba(COLORS.RavenImperial, 0.25)} 54%,
                ${rgba(COLORS.White, 0)} 59%,
                ${rgba(COLORS.White, 0)} 100%
            )`,
            handleFocusBackground: `radial-gradient(
                ellipse at center,
                ${COLORS.White} 50%,
                ${rgba(COLORS.RavenImperial, 0.25)} 54%,
                ${rgba(COLORS.RavenImperial, 0.08)} 59%,
                ${COLORS.VimeoBlueDarkened} 65%,
                ${COLORS.VimeoBlueDarkened} 71%,
                ${rgba(COLORS.VimeoBlueDarkened, 0)} 71%,
                ${rgba(COLORS.VimeoBlueDarkened, 0)} 100%
            )`,
            labelColor: COLORS.AstroGranite,
            labelFocusedColor: COLORS.AstroGranite,
            labelHoverBackground: COLORS.Plaster,
            labelBackground: COLORS.Plaster,
        },
    },
    dimensions: {
        handleDiameter: 32,
        padding: 25,
        sliderTrackHeight: 5,
        gradientOffset: 4,
        // gradientOffset is needed to adjust the selected range background start and end position which appears to be extra because of the transparency of thumb gradient
        labelOffsetFromTrack: 18,
    },
};

const themeOptions = ['dark', 'light'];

enum sliderZindex {
    bubbleWrapper = 1,
    startSlider,
    endSlider,
    startHandle,
}

const getSliderThemeColors = format => {
    const sliderColors = InputSliderStyleSettings.colors;
    const sliderColorMap = {
        dark: {
            inRangeBgColor: sliderColors.dark.inRangeColor,
            outRangeBgColor: sliderColors.dark.outRangeColor,
            handleBgColor: sliderColors.dark.handleColor,
            handleBackground: sliderColors.dark.handleBackground,
            handleFocusBackground: sliderColors.dark.handleFocusBackground,
            handleBorder: sliderColors.dark.handleBorder,
            labelColor: sliderColors.dark.labelColor,
            labelFocusedColor: sliderColors.dark.labelFocusedColor,
            labelHoverBackground: sliderColors.dark.labelHoverBackground,
            labelBackground: sliderColors.dark.labelBackground,
        },
        light: {
            inRangeBgColor: sliderColors.light.inRangeColor,
            outRangeBgColor: sliderColors.light.outRangeColor,
            handleBgColor: sliderColors.light.handleColor,
            handleBackground: sliderColors.light.handleBackground,
            handleFocusBackground: sliderColors.light.handleFocusBackground,
            handleBorder: sliderColors.light.handleBorder,
            labelColor: sliderColors.light.labelColor,
            labelFocusedColor: sliderColors.light.labelFocusedColor,
            labelHoverBackground: sliderColors.light.labelHoverBackground,
            labelBackground: sliderColors.light.labelBackground,
        },
    };
    return sliderColorMap[format] || sliderColorMap[themeOptions[0]];
};

const getSliderDimension = (attribute: string) =>
    rem(InputSliderStyleSettings.dimensions[attribute]);

export {
    getSliderThemeColors,
    themeOptions,
    InputSliderStyleSettings,
    getSliderDimension,
    sliderZindex,
};
