import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem, rgba } from 'polished';
import { ParagraphSm } from '../Type';
import * as COLORS from '../Color/Color';
import { VideoCardStyleSettings } from './VideoCardHelpers';

export interface VideoCardTimestamp {
    timestamp: string;
}

const VideoCardTimestampStyled = styled<React.HTMLProps<HTMLDivElement>, 'div'>(
    'div',
)`
    background: ${rgba(COLORS.AstroGranite, 0.85)};
    border-radius: ${rem(2)};
    padding: ${rem(4)} ${rem(12)};
    position: absolute;
    bottom: ${rem(VideoCardStyleSettings.padding)};
    right: ${rem(VideoCardStyleSettings.padding)};
    text-transform: uppercase;
`;

export const VideoCardTimestamp: SFC<
    VideoCardTimestamp & React.HTMLProps<HTMLInputElement>
> = ({
    // @ts-ignore
    ref: _,
    timestamp,
}) => (
    <VideoCardTimestampStyled>
        <ParagraphSm format="white" noMargin>
            {timestamp}
        </ParagraphSm>
    </VideoCardTimestampStyled>
);
