import { rem } from 'polished';

const ProgressBarStyleSettings = {
    height: {
        md: 4,
        lg: 8,
        xl: 12,
    },
    stripeSize: 10,
};

const getBarHeight = (size: String) => rem(ProgressBarStyleSettings.height[`${size}`]);

const getBarRadius = (size: String) => rem(ProgressBarStyleSettings.height[`${size}`] / 2);

export { ProgressBarStyleSettings, getBarHeight, getBarRadius };
