import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { VideoCardStyleSettings } from './VideoCardHelpers';

export interface Props {
  isHovered?: boolean;
  isSelected?: boolean;
}

const VideoCardDecorationAreaStyled = styled.div<Props>`
  position: absolute;
  top: ${rem(VideoCardStyleSettings.padding)};
  left: ${rem(VideoCardStyleSettings.padding)};
  width: ${rem(32)};
  height: ${rem(32)};

  svg {
    width: 100%;
    height: auto;
  }
`;

export const VideoCardDecorationArea: SFC<Props> = props => (
  <VideoCardDecorationAreaStyled {...props} />
);
