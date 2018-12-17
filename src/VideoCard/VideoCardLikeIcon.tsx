import React, { SFC, HTMLProps } from 'react';
import styled from 'styled-components';
import { COLORS } from '../Legacy/COLORS';
import HeartIcon from '../icons/heart-filled.svg';

const VideoCardLikeIconStyled = styled.span`
    svg {
        * {
            fill: ${COLORS.SunsetOrange};
        }
    }
`;

export const VideoCardLikeIcon: SFC<HTMLProps<HTMLSpanElement>> = ({
    ref: _,
    ...props
}) => (
    <VideoCardLikeIconStyled {...props}>
        <HeartIcon />
    </VideoCardLikeIconStyled>
);
