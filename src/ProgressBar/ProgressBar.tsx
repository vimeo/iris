import React from 'react';
import styled, {StyledComponentClass} from 'styled-components';
import {
    getBarHeight,
    getBarRadius,
} from './ProgressBarHelpers';
import ProgressBarIndicator from '../ProgressBarIndicator';
import {Omit} from '../globals/js/type-helpers';

export interface ProgressBarProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'>  {
    /**
     * Determines if the progress bar should be animated.
     */
    animated?: boolean,
    /**
     * Class is added to the outer div of the ProgressBar
     */
    className?: string,
    /**
     * Current value should be between 0-100, inclusive.
     */
    currentValue: number,
    /**
     * Determines coloring of the bar.
     */
    format: 'neutral' | 'alert' | 'warning' | 'empty' | 'disabled',
    /**
     * Determines height of the bar
     */
    size: 'md' | 'lg' | 'xl',
};

// ==================== ProgressBarContainer

const getContainerBackgroundColor = (props) => {
    const themeColors = props.theme.colors;
    const format = props.format;
    const containerBackgroundColorMap = {
        'alert' : themeColors.uiColors.alertColorLight,
        'disabled': themeColors.componentSpecificColors.progressBar.disabledTrackBackgroundColor,
    }

    return containerBackgroundColorMap[format] || themeColors.componentSpecificColors.progressBar.defaultTrackBackgroundColor;
};

export interface ProgressBarContainerProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
    animated?: boolean,
    currentValue: number,
    format: 'neutral' | 'alert' | 'warning' | 'empty' | 'disabled',
    size: 'md' | 'lg' | 'xl',
}

// ==================== ProgressBar

const ProgressBar: StyledComponentClass<ProgressBarContainerProps, 'div'> = styled(({
    className,
    currentValue,
    format = 'neutral',
    animated,
    size = 'md',
    ...filteredProps
}: ProgressBarContainerProps) => {

    return (
            <div
                {...filteredProps}
                className={className}
            >
                <ProgressBarIndicator
                    animated={animated}
                    currentValue={currentValue}
                    format={format}
                    size={size}
                />
            </div>
    );
})`
height: ${props => getBarHeight(props.size)};
border-radius: ${props => getBarRadius(props.size)};
overflow: hidden;
position: relative;
width: 100%;
background-color: ${getContainerBackgroundColor};
`;

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
