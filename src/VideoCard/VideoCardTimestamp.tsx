import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem, rgba } from 'polished';
import { ParagraphSm } from '../Type';
import COLORS from '../globals/js/constants/COLORS';
import { VideoCardStyleSettings } from './VideoCardHelpers';

export interface VideoCardTimestamp {
    timestamp: string;
}

// ==================== VideoCardTimestamp Styled

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

// ==================== VideoCardTimestamp

const VideoCardTimestamp: SFC<
    VideoCardTimestamp & React.HTMLProps<HTMLInputElement>
> = ({
    // @ts-ignore
    ref: _,
    timestamp,
}) => {
    return (
        <VideoCardTimestampStyled>
            <ParagraphSm format="white" noMargin>
                {timestamp}
            </ParagraphSm>
        </VideoCardTimestampStyled>
    );
};

export default VideoCardTimestamp;
