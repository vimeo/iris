import React, { SFC, ReactNode, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { VideoCardStyleSettings } from './VideoCardHelpers';

interface Props {
  socialBadges: ReactNode[];
  onClick?: MouseEventHandler;
}

const VideoCardSocialBadgeWrapperStyled = styled.div`
  display: flex;
  position: absolute;
  bottom: ${rem(VideoCardStyleSettings.padding)};
  left: ${rem(VideoCardStyleSettings.padding)};

  svg {
    width: ${rem(24)};
    height: ${rem(24)};
  }
`;

const BadgeCellStyled = styled.div<any>`
  margin-right: ${rem(8)};

  &:last-child {
    margin-right: 0;
  }
`;

export const VideoCardSocialBadgeArea: SFC<Props> = ({
  socialBadges,
  ...props
}) => (
  <VideoCardSocialBadgeWrapperStyled {...props}>
    {socialBadges.map((badge, i) => (
      <BadgeCellStyled key={i}>{badge}</BadgeCellStyled>
    ))}
  </VideoCardSocialBadgeWrapperStyled>
);
