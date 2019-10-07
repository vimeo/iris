import React, { SFC } from 'react';
import { VimeoStyleSettings } from '../../../legacy';
import styled from 'styled-components';
import {
  getBarHeight,
  getBarRadius,
  ProgressBarStyleSettings,
} from './ProgressBarHelpers';
import { ProgressBarIndicator } from './ProgressBarIndicator';

type formats = 'neutral' | 'alert' | 'warning' | 'empty' | 'disabled';
type sizes = 'md' | 'lg' | 'xl';

interface Props {
  animated?: boolean;
  className?: string;
  currentValue: number;
  format: formats;
  size: sizes;
}

const disabledBarColor =
  ProgressBarStyleSettings.colors.disabledTrackBackgroundColor;

const bgColors = {
  alert: VimeoStyleSettings.colors.uiColors.alertColorLight,
  disabled: disabledBarColor,
};

const ProgressBarContainer = styled.div<{
  format: formats;
  size: sizes;
}>`
  height: ${props => getBarHeight(props.size)};
  border-radius: ${props => getBarRadius(props.size)};
  overflow: hidden;
  position: relative;
  width: 100%;
  background-color: ${props =>
    bgColors[props.format] || disabledBarColor};
`;

export const ProgressBar: SFC<Props> = ({
  currentValue,
  format = 'neutral',
  animated,
  size = 'md',
  ...props
}) => (
  <ProgressBarContainer format={format} size={size} {...props}>
    <ProgressBarIndicator
      animated={animated}
      currentValue={currentValue}
      format={format}
      size={size}
    />
  </ProgressBarContainer>
);
