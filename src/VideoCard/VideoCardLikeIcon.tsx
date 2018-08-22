import React, { SFC, HTMLProps } from 'react';
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
        * {
            fill: ${COLORS.SunsetOrange};
    }
`;

// ==================== VideoCardDecorationArea

const VideoCardLikeIcon: SFC<HTMLProps<HTMLSpanElement>> = ({
    ref: _, // filter out ref from styled component
    ...filteredProps
}) => (
    <VideoCardLikeIconStyled {...filteredProps}>
        <HeartIcon />
    </VideoCardLikeIconStyled>
);

export default VideoCardLikeIcon;
