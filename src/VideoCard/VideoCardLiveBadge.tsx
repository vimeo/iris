import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ParagraphSm } from '../Type';
import { CircleFilled } from '../Icons';
import { VimeoStyleSettings } from '../Legacy/VimeoStyleSettings';
import { VideoCardStyleSettings } from './VideoCardHelpers';

export interface VideoCardLiveBadge
  extends React.HTMLProps<HTMLInputElement> {
  /**
   * We need the translated string for "Live"
   */
  liveLabelString: string;
}

const VideoCardLiveBadgeStyled = styled<
  React.HTMLProps<HTMLDivElement>,
  'div'
>('div')`
  align-items: center;
  background: ${VimeoStyleSettings.colors.uiColors.liveColor};
  border-radius: ${rem(2)};
  display: inline-flex;
  padding: ${rem(4) + ' ' + rem(12)};
  position: absolute;
  bottom: ${rem(VideoCardStyleSettings.padding)};
  right: ${rem(VideoCardStyleSettings.padding)};
  text-transform: uppercase;
`;

const VideoCardLiveBadgeTextStyled = styled<
  React.HTMLProps<HTMLDivElement>,
  any
>(ParagraphSm)`
  align-items: center;
  display: inline-flex;
  letter-spacing: ${rem(1.25)};
  margin-bottom: 0;
`;

const LiveIconStyled = styled<
  React.HTMLProps<HTMLSpanElement>,
  'span'
>('span')`
  display: inline-flex;
  height: ${rem(6)};
  width: ${rem(6)};

  margin-right: ${rem(4)};
  transform: translateY(${rem(-1)});

  svg {
    width: 100%;
    height: auto;

    * {
      fill: currentcolor;
    }
  }
`;

export const VideoCardLiveBadge: SFC<VideoCardLiveBadge> = ({
  liveLabelString,
}) => (
  <VideoCardLiveBadgeStyled>
    <VideoCardLiveBadgeTextStyled format="white">
      <LiveIconStyled>
        <CircleFilled />
      </LiveIconStyled>
      {liveLabelString}
    </VideoCardLiveBadgeTextStyled>
  </VideoCardLiveBadgeStyled>
);
