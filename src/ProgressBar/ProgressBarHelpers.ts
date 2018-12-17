import { rem, rgba } from 'polished';
import { COLORS } from '../Legacy/COLORS';

const ProgressBarStyleSettings = {
    colors: {
        defaultTrackBackgroundColor: rgba(COLORS.AstroGranite, 0.15),
        disabledBarColor: COLORS.SoutherlySky,
        disabledTrackBackgroundColor: COLORS.Porcelain,
    },
    height: {
        md: 4,
        lg: 8,
        xl: 12,
    },
    stripeSize: 10,
};

const getBarHeight = (size: string) =>
    rem(ProgressBarStyleSettings.height[`${size}`]);

const getBarRadius = (size: string) =>
    rem(ProgressBarStyleSettings.height[`${size}`] / 2);

export { ProgressBarStyleSettings, getBarHeight, getBarRadius };
