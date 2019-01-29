import React, { SFC, HTMLProps } from 'react';
import styled from 'styled-components';
import * as COLORS from '../Color/Color';
import { Heart } from '../Icons';

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
    <Heart />
  </VideoCardLikeIconStyled>
);
