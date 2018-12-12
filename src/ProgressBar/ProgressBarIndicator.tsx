import React, { SFC } from 'react';
import styled, { keyframes } from 'styled-components';
import { VimeoStyleSettings } from '../Legacy/VimeoStyleSettings';
import { rem, rgba } from 'polished';
import {
    ProgressBarStyleSettings,
    getBarHeight,
    getBarRadius,
} from './ProgressBarHelpers';

export interface ProgressBarIndicatorProps {
    currentValue: number;
    format: 'neutral' | 'alert' | 'warning' | 'empty' | 'disabled';
    animated?: boolean;
    size: 'md' | 'lg' | 'xl';
}
// ==================== ProgressBarIndicator

const getBarBackgroundColor = props => {
    const progressBarColors = ProgressBarStyleSettings.colors;
    const uiColors = VimeoStyleSettings.colors.uiColors;

    const barBackgroundColorMap = {
        alert: uiColors.alertColor,
        disabled: progressBarColors.disabledBarColor,
        warning: uiColors.warningColor,
        empty: 'transparent',
    };

    return barBackgroundColorMap[props.formatProp] || uiColors.primaryColor;
};

const stripeSizeRems = rem(ProgressBarStyleSettings.stripeSize);

const stripeKeyframes = keyframes`
        from {
            background-position: 0 0;
        }
        to {
            background-position: ${rem(
                ProgressBarStyleSettings.stripeSize * 2,
            )} ${stripeSizeRems};
        }
    `;
interface BarProps {
    animated?: boolean;
    formatProp: 'neutral' | 'alert' | 'warning' | 'empty' | 'disabled';
    size: 'md' | 'lg' | 'xl';
}

const ProgressBarStyled = styled<BarProps, 'div'>('div')`
    height: ${props => getBarHeight(props.size)};
    border-radius: ${props => getBarRadius(props.size)};
    position: absolute;
    top: 0;
    left: 0;

    background-color: ${getBarBackgroundColor};

    ${props =>
        props.animated
            ? `
                background-image: linear-gradient(
                    -45deg,
                    ${rgba('#000', 0.1)} 25%,
                    transparent 25%,
                    transparent 50%,
                    ${rgba('#000', 0.1)} 50%,
                    ${rgba('#000', 0.1)} 75%,
                    transparent 5%,
                    transparent
                );
                background-size: ${stripeSizeRems} ${stripeSizeRems};
                animation: ${stripeKeyframes} 1.5s linear infinite;
        `
            : ''};
`;

export const ProgressBarIndicator: SFC<ProgressBarIndicatorProps> = props => {
    let progressValue;

    if (props.currentValue >= 0 && props.currentValue < 101) {
        progressValue = props.currentValue;
    } else {
        progressValue = 0;
        if (window && window.console) {
            console.warn(
                'Warning: you have passed an invalid number to the "currentValue" prop of this Progressbar. The number must be between 0-100, inclusive.',
            );
        }
    }

    // empty mode gets full width when animated
    const progressWidth =
        props.format === 'empty' && props.animated ? 100 : progressValue;

    // "format" does not get automatically filtered from the element by StyledComponents so we are renaming it formatProp

    const { format, ...filteredProps } = props;

    return (
        <ProgressBarStyled
            {...filteredProps}
            formatProp={format}
            role="progressbar"
            aria-valuenow={progressValue}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: `${progressWidth}%` }}
        />
    );
};
