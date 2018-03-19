import React from 'react';
import styled from 'styled-components';
import {rem} from 'polished';
import {VideoCardStyleSettings} from './VideoCardHelpers';
export interface VideoCardDecorationAreaProps extends React.HTMLProps<HTMLDivElement>  {
    isHovered?: boolean,
    isSelected?: boolean,
};

// ==================== VideoCardDecorationArea Styled
const VideoCardDecorationAreaStyled= styled<VideoCardDecorationAreaProps, 'div'>('div')`
    opacity: ${props=> props.isHovered || props.isSelected ? '.5' : '1'};
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

// ==================== VideoCardDecorationArea

const VideoCardDecorationArea: React.SFC<VideoCardDecorationAreaProps> = ({
    ref: _, // filter out ref from styled component
    ...filteredProps
}) => {
    
    return (
        <VideoCardDecorationAreaStyled
            {...filteredProps}
        />
    );
};

export default VideoCardDecorationArea;
