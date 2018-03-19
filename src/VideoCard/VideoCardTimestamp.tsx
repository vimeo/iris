import React from 'react';
import styled from 'styled-components';
import { rem, rgba } from 'polished';
import {ParagraphSm} from '../Type';
import COLORS from '../globals/js/constants/COLORS';
import {VideoCardStyleSettings} from './VideoCardHelpers';

export interface VideoCardTimestamp extends React.HTMLProps<HTMLInputElement>  {
    timestamp: string,
};


// ==================== VideoCardTimestamp Styled

const VideoCardTimestampStyled = styled<React.HTMLProps<HTMLDivElement>, 'div'>('div')`
    background: ${rgba(COLORS.AstroGranite, .85)};
    border-radius: ${rem(2)};
    padding: ${rem(4)} ${rem(12)};
    position: absolute;
    bottom: ${rem(VideoCardStyleSettings.padding)};
    right: ${rem(VideoCardStyleSettings.padding)};
    text-transform: uppercase;
`;

// ==================== VideoCardTimestamp

const VideoCardTimestamp: React.SFC<VideoCardTimestamp> = ({
    ref: _,
    timestamp,
}) => {

    
    return (
        <VideoCardTimestampStyled>
            <ParagraphSm
                format="light"
                noMargin
            >
                {timestamp}
            </ParagraphSm>
        </VideoCardTimestampStyled>
    );
};

export default VideoCardTimestamp;
