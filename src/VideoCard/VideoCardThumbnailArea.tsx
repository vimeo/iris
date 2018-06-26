import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rem } from 'polished';
import { VideoCardStyleSettings } from './VideoCardHelpers';
import VideoCardSelectionCheckbox from './VideoCardSelectionCheckbox';
import VideoCardDecorationArea from './VideoCardDecorationArea';
import VideoCardPropertiesArea from './VideoCardPropertiesArea';
import VideoCardSocialBadgeArea from './VideoCardSocialBadgeArea';
import VideoCardThumbnailGroup from './VideoCardThumbnailGroup';
import { VideoCardThumbnailData } from './VideoCard';
import COLORS from '../globals/js/constants/COLORS';

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
    thumbnailData: Array<VideoCardThumbnailData>;
}

export interface VideoCardThumbnailWrapperProps extends React.HTMLProps<HTMLDivElement> {
    isHovered?: boolean;
}

// ==================== VideoCardThumbnailArea Styled

const WrapperStyled = styled('div')`
    position: relative;
`;

export interface ThumbnailStyledProps extends React.HTMLProps<HTMLImageElement> {
    isTopOfCard: boolean;
}

const ThumbnailShadowStyled = styled<ThumbnailStyledProps, 'div'>('div')`
    border-radius: ${props =>
        props.isTopOfCard
            ? `${rem(VideoCardStyleSettings.borderRadius)}
        ${rem(VideoCardStyleSettings.borderRadius)} 0 0`
            : '0'};
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: inset 0 ${rem(-1)} 0 0 rgba(0,0,0,0.075);
    width: 100%;
    padding-bottom: 56.15%;
`;

const ThumbnailStyled = styled<ThumbnailStyledProps, 'img'>('img')`
    border-radius: ${props =>
        props.isTopOfCard
            ? `${rem(VideoCardStyleSettings.borderRadius)}
        ${rem(VideoCardStyleSettings.borderRadius)} 0 0`
            : '0'};
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
`;

const ThumbnailContainerStyled = styled<VideoCardThumbnailWrapperProps, 'div'>(
    'div'
)`
    border-radius: ${rem(VideoCardStyleSettings.borderRadius)}
        ${rem(VideoCardStyleSettings.borderRadius)} 0 0;
    box-shadow: inset 1px 1px 0px 0px rgba(0,0,0,0.10);
`;

const ThumbnailPreloadWrapperStyled = styled(
    'div'
)`
    background-color: ${COLORS.Plaster};
    width: 100%;
    padding-bottom: 56.15%;
    position: relative;
`;
const hoverOverlayKeyframes = keyframes`
        from {
            opacity: 0;
        }
        to {
            opacity: .5;
        }
`;

const HoverOverlayWrapperStyled = styled(
    'div'
)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${hoverOverlayKeyframes}
        ${VideoCardStyleSettings.hoverTransition};
`;

const HoverOverlayStyled = styled('div')`
    width: 100%;
    height: 100%;
    border-radius: ${rem(VideoCardStyleSettings.borderRadius)}
        ${rem(VideoCardStyleSettings.borderRadius)} 0 0;
    background-image: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0) 100%
    );
`;

// ==================== VideoCardThumbnailArea

const VideoCardThumbnailArea: React.SFC<VideoCardThumbnailAreaProps> = ({
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
}) => {
    const catchClick = e => {
        // clicks in the footer area should not trigger the onClick for the entireCard.
        e.stopPropagation();
    };

    return (
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
                        <ThumbnailShadowStyled
                            isTopOfCard={isTopOfCard}
                        />
                    </ThumbnailPreloadWrapperStyled>
                )}
            </ThumbnailContainerStyled>
            {isHovered &&
                !isGroup && (
                    <HoverOverlayWrapperStyled>
                        <HoverOverlayStyled />
                    </HoverOverlayWrapperStyled>
                )}
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
                    onClick={catchClick}
                    socialBadges={thumbnailSocialBadgeArea}
                />
            )}
            {thumbnailTimestampArea}
        </WrapperStyled>
    );
};

export default VideoCardThumbnailArea;
