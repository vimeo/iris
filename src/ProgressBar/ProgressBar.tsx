import React, { SFC, HTMLProps } from 'react';
import { VimeoStyleSettings } from '../Legacy/VimeoStyleSettings';
import styled from 'styled-components';
import {
  getBarHeight,
  getBarRadius,
  ProgressBarStyleSettings,
} from './ProgressBarHelpers';
import { ProgressBarIndicator } from './ProgressBarIndicator';
import { Omit } from '../Utils/Omit';

export interface ProgressBarProps {
  /**
   * Determines if the progress bar should be animated.
   */
  animated?: boolean;
  /**
   * Class is added to the outer div of the ProgressBar
   */
  className?: string;
  /**
   * Current value should be between 0-100, inclusive.
   */
  currentValue: number;
  /**
   * Determines coloring of the bar.
   */
  format: 'neutral' | 'alert' | 'warning' | 'empty' | 'disabled';
  /**
   * Determines height of the bar
   */
  size: 'md' | 'lg' | 'xl';
}

// ==================== ProgressBarContainer

const getContainerBackgroundColor = props => {
  const progressBarColors = ProgressBarStyleSettings.colors;
  const containerBackgroundColorMap = {
    alert: VimeoStyleSettings.colors.uiColors.alertColorLight,
    disabled: progressBarColors.disabledTrackBackgroundColor,
  };

  return (
    containerBackgroundColorMap[props.format] ||
    progressBarColors.defaultTrackBackgroundColor
  );
};

export interface ProgressBarContainerProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  formatProp: 'neutral' | 'alert' | 'warning' | 'empty' | 'disabled';
  size: 'md' | 'lg' | 'xl';
}

const ProgressBarContainer = styled<ProgressBarContainerProps, 'div'>(
  'div',
)`
  height: ${props => getBarHeight(props.size)};
  border-radius: ${props => getBarRadius(props.size)};
  overflow: hidden;
  position: relative;
  width: 100%;
  background-color: ${getContainerBackgroundColor};
`;

// ==================== ProgressBar

export const ProgressBar: SFC<
  ProgressBarProps & Omit<HTMLProps<HTMLDivElement>, 'size'>
> = ({
  currentValue,
  format = 'neutral',
  animated,
  size = 'md',
  ref: _,
  ...props
}) => (
  <ProgressBarContainer formatProp={format} size={size} {...props}>
    <ProgressBarIndicator
      animated={animated}
      currentValue={currentValue}
      format={format}
      size={size}
    />
  </ProgressBarContainer>
);
