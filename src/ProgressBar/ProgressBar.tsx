import React from 'react';
import styled from 'styled-components';
import {
    getBarHeight,
    getBarRadius,
} from './ProgressBarHelpers';
import ProgressBarIndicator from '../ProgressBarIndicator';

export interface ProgressBarProps {
    className?: string,
    /**
     * Current value should be between 0-100, inclusive.
     */
    currentValue: number,
    format: 'neutral' | 'alert' | 'warning' | 'empty' | 'disabled',
    /**
     * Determines if the progress bar should be animated.
     */
    animated?: boolean,
    size: 'md' | 'lg' | 'xl',
};

// ==================== ProgressBarContainer
const getContainerBackgroundColor = (format: string, theme: any) => {
    let backgroundColor = theme.colors.componentSpecificColors.progressBar.defaultTrackBackgroundColor;

    if (format === 'disabled') {
        backgroundColor = theme.colors.componentSpecificColors.progressBar.disabledTrackBackgroundColor
    }
    else if (format === 'alert') {
        backgroundColor = theme.colors.uiColors.alertColorLight;
    }

    return backgroundColor;
};
interface ProgressBarContainerProps {
    format: 'neutral' | 'alert' | 'warning' | 'empty' | 'disabled',
    size: 'md' | 'lg' | 'xl',
}

const ProgressBarContainer = styled<ProgressBarContainerProps, 'div'>('div')`
    height: ${props => getBarHeight(props.size)};
    border-radius: ${props => getBarRadius(props.size)};
    overflow: hidden;
    position: relative;
    width: 100%;
    background-color: ${props => getContainerBackgroundColor(props.format, props.theme)};
`;

// ==================== ProgressBar

const ProgressBar: React.SFC<ProgressBarProps | HTMLDivElement> = ({
    className,
    currentValue,
    format = 'neutral',
    animated,
    size = 'md',
    ...filteredProps
}: ProgressBarProps) => {

    return (
            <ProgressBarContainer
                {...filteredProps}
                className={className}
                format={format}
                size={size}
            >
                <ProgressBarIndicator
                    animated={animated}
                    currentValue={currentValue}
                    format={format}
                    size={size}
                />
            </ProgressBarContainer>
    );
};

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
