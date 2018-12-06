import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { VideoCardStyleSettings } from './VideoCardHelpers';

export interface VideoCardDecorationAreaProps
    extends React.HTMLProps<HTMLDivElement> {
    isHovered?: boolean;
    isSelected?: boolean;
}

const VideoCardDecorationAreaStyled = styled.div<VideoCardDecorationAreaProps>`
    opacity: ${props => (props.isHovered || props.isSelected ? '.5' : '1')};
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

const VideoCardDecorationArea: SFC<VideoCardDecorationAreaProps> = ({
    ref: _,
    ...props
}) => <VideoCardDecorationAreaStyled {...props} />;

export default VideoCardDecorationArea;
