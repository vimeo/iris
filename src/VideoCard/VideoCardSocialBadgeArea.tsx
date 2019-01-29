import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { VideoCardStyleSettings } from './VideoCardHelpers';

export interface VideoCardSocialBadgeAreaProps
  extends React.HTMLProps<HTMLDivElement> {
  socialBadges: any[];
}

const VideoCardSocialBadgeWrapperStyled = styled<
  React.HTMLProps<HTMLDivElement>,
  'div'
>('div')`
  display: flex;
  position: absolute;
  bottom: ${rem(VideoCardStyleSettings.padding)};
  left: ${rem(VideoCardStyleSettings.padding)};

  svg {
    width: ${rem(24)};
    height: ${rem(24)};
  }
`;

const BadgeCellStyled = styled<
  React.HTMLProps<HTMLDivElement>,
  'div'
>('div')`
  margin-right: ${rem(8)};

  &:last-child {
    margin-right: 0;
  }
`;

export const VideoCardSocialBadgeArea: SFC<
  VideoCardSocialBadgeAreaProps
> = ({ socialBadges, ref: _, ...props }) => (
  <VideoCardSocialBadgeWrapperStyled {...props}>
    {socialBadges.map((thisBadge, i) => (
      <BadgeCellStyled key={`socialBadge${i}`}>
        {thisBadge}
      </BadgeCellStyled>
    ))}
  </VideoCardSocialBadgeWrapperStyled>
);
