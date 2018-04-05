import React from 'react';
import styled from 'styled-components';
import COLORS from '../globals/js/constants/COLORS';
//@ts-ignore
import HeartIcon from '../icons/heart-filled.svg';

// ==================== VideoCardDecorationArea Styled
const VideoCardLikeIconStyled = styled<
    React.HTMLProps<HTMLSpanElement>,
    'span'
>('span')`
    svg {
        width: 100%;
        height: auto;
        * {
            fill: ${COLORS.SunsetOrange};
    }
`;

// ==================== VideoCardDecorationArea

const VideoCardLikeIcon: React.SFC<React.HTMLProps<HTMLSpanElement>> = ({
    ref: _, // filter out ref from styled component
    ...filteredProps
}) => {
    return (
        <VideoCardLikeIconStyled {...filteredProps}>
            <HeartIcon />
        </VideoCardLikeIconStyled>
    );
};

export default VideoCardLikeIcon;
