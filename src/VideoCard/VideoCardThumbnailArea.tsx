import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { VideoCardStyleSettings as settings } from './VideoCardHelpers';
import { VideoCardSelectionCheckbox } from './VideoCardSelectionCheckbox';
import { VideoCardDecorationArea } from './VideoCardDecorationArea';
import { VideoCardPropertiesArea } from './VideoCardPropertiesArea';
import { VideoCardSocialBadgeArea } from './VideoCardSocialBadgeArea';
import {
  VideoCardThumbnailGroup,
  VideoCardThumbnailData,
} from './VideoCardThumbnailGroup';
import * as COLORS from '../Color/Color';

export interface VideoCardThumbnailAreaProps {
  checkboxA11yLabel?: string;
  isGroup?: boolean;
  isHovered?: boolean;
  isSelectable?: boolean;
  isSelected?: boolean;
  isTopOfCard?: boolean;
  onCheckBoxClick?: any;
  thumbnailBrandDecorationArea?: any;
  thumbnailSocialBadgeArea?: any;
  thumbnailTimestampArea?: any;
  thumbnailVideoCardPropertiesArea?: any;
  thumbnailData: VideoCardThumbnailData[];
  title: string;
}

export interface VideoCardThumbnailWrapperProps
  extends React.HTMLProps<HTMLDivElement> {
  isHovered?: boolean;
}

const WrapperStyled = styled('div')`
  position: relative;
`;

export interface ThumbnailStyledProps
  extends React.HTMLProps<HTMLImageElement> {
  isTopOfCard: boolean;
}

const ThumbnailShadowStyled = styled.div<ThumbnailStyledProps>`
  border-radius: ${props =>
    props.isTopOfCard
      ? `${rem(settings.borderRadius)}
        ${rem(settings.borderRadius)} 0 0`
      : '0'};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-bottom: 56.15%;
`;

const ThumbnailStyled = styled<ThumbnailStyledProps, 'img'>('img')`
  border-radius: ${props =>
    props.isTopOfCard
      ? `${rem(settings.borderRadius)}
        ${rem(settings.borderRadius)} 0 0`
      : '0'};
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
`;

const ThumbnailContainerStyled = styled.div<
  VideoCardThumbnailWrapperProps
>`
  border-radius: ${rem(settings.borderRadius)}
    ${rem(settings.borderRadius)} 0 0;
`;

const ThumbnailPreloadWrapperStyled = styled('div')`
  background-color: ${COLORS.Plaster};
  width: 100%;
  padding-bottom: 56.15%;
  position: relative;
`;

const HoverOverlayStyled = styled.div<{ active?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${rem(settings.borderRadius)}
    ${rem(settings.borderRadius)} 0 0;
  background-image: linear-gradient(
    -180deg,
    rgba(0, 0, 0, 0.334) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  transition: 80ms ease-in-out;
  opacity: ${props => (props.active ? '1' : '0')};
  pointer-events: none;
  z-index: 0;
`;

export const VideoCardThumbnailArea: SFC<
  VideoCardThumbnailAreaProps
> = ({
  checkboxA11yLabel,
  isGroup,
  isHovered,
  isSelected,
  isSelectable,
  isTopOfCard,
  onCheckBoxClick,
  thumbnailBrandDecorationArea,
  thumbnailSocialBadgeArea,
  thumbnailTimestampArea,
  thumbnailVideoCardPropertiesArea,
  thumbnailData,
  title,
}) => (
  <WrapperStyled>
    <ThumbnailContainerStyled isHovered={isHovered}>
      {isGroup ? (
        <VideoCardThumbnailGroup thumbnailData={thumbnailData} />
      ) : (
        <ThumbnailPreloadWrapperStyled>
          <ThumbnailStyled
            alt={thumbnailData[0].thumbnailAltText}
            src={thumbnailData[0].thumbnailSrc}
            srcSet={thumbnailData[0].thumbnailSrcSet}
            isTopOfCard={isTopOfCard}
          />
          <ThumbnailShadowStyled isTopOfCard={isTopOfCard} />
        </ThumbnailPreloadWrapperStyled>
      )}
    </ThumbnailContainerStyled>
    <HoverOverlayStyled active={isHovered && !isGroup} />}
    {thumbnailBrandDecorationArea && (
      <VideoCardDecorationArea
        isHovered={isHovered}
        isSelected={isSelected}
      >
        {thumbnailBrandDecorationArea}
      </VideoCardDecorationArea>
    )}
    {isSelectable && (
      <VideoCardSelectionCheckbox
        onCheckBoxClick={onCheckBoxClick}
        isShowing={isHovered || isSelected}
        checked={isSelected}
        label={checkboxA11yLabel}
        title={title}
      />
    )}
    {thumbnailVideoCardPropertiesArea && (
      <VideoCardPropertiesArea
        isHovered={isHovered}
        properties={thumbnailVideoCardPropertiesArea}
      />
    )}
    {thumbnailSocialBadgeArea && (
      <VideoCardSocialBadgeArea
        onClick={e => {
          e.stopPropagation();
        }}
        socialBadges={thumbnailSocialBadgeArea}
      />
    )}
    {thumbnailTimestampArea}
  </WrapperStyled>
);
