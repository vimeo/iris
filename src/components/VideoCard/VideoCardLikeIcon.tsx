import React, { SFC } from 'react';
import styled from 'styled-components';
import * as COLORS from '../../color';
import { Heart } from '../../icons';

const VideoCardLikeIconStyled = styled.span`
  svg {
    * {
      fill: ${COLORS.SunsetOrange};
    }
  }
`;

export const VideoCardLikeIcon: SFC = props => (
  <VideoCardLikeIconStyled {...props}>
    <Heart />
  </VideoCardLikeIconStyled>
);
