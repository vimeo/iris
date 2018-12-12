import { COLORS } from '../Legacy/';
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
            labelHoverBackground: COLORS.IronHeart,
            labelBackground: COLORS.SovereignShadow,
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
        disabled: {
            inRangeColor: COLORS.AshenWinter,
            outRangeColor: COLORS.AshenWinter,
            handleColor: COLORS.AshenWinter,
            handleBorder: COLORS.AshenWinter,
            handleBackground: `radial-gradient(
                ellipse at center,
                ${COLORS.AshenWinter} 50%,
                ${rgba(COLORS.RavenImperial, 0.25)} 54%,
                ${rgba(COLORS.RavenImperial, 0)} 59%,
                ${rgba(COLORS.RavenImperial, 0)} 100%
            )`,
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
            handleBackground: sliderColors.light.handleBackground,
            handleFocusBackground: sliderColors.light.handleFocusBackground,
            handleBorder: sliderColors.light.handleBorder,
            labelColor: sliderColors.light.labelColor,
            labelFocusedColor: sliderColors.light.labelFocusedColor,
            labelHoverBackground: sliderColors.light.labelHoverBackground,
            labelBackground: sliderColors.light.labelBackground,
        },
        disabled: {
            inRangeBgColor: sliderColors.disabled.inRangeColor,
            outRangeBgColor: sliderColors.disabled.outRangeColor,
            handleBackground: sliderColors.disabled.handleBackground,
            handleBorder: sliderColors.disabled.handleBorder,
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
