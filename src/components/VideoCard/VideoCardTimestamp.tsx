import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem, rgba } from 'polished';
import { ParagraphSm } from '../../legacy';
import * as COLORS from '../../color';
import { VideoCardStyleSettings } from './VideoCardHelpers';

export interface VideoCardTimestamp {
  timestamp: string;
}

const VideoCardTimestampStyled = styled.div`
  background: ${rgba(COLORS.AstroGranite, 0.85)};
  border-radius: ${rem(2)};
  padding: ${rem(4)} ${rem(12)};
  position: absolute;
  bottom: ${rem(VideoCardStyleSettings.padding)};
  right: ${rem(VideoCardStyleSettings.padding)};
  text-transform: uppercase;
`;

export const VideoCardTimestamp: SFC<VideoCardTimestamp> = ({
  timestamp,
}) => (
  <VideoCardTimestampStyled>
    <ParagraphSm format="white" noMargin>
      {timestamp}
    </ParagraphSm>
  </VideoCardTimestampStyled>
);
