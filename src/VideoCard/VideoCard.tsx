import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Card from '../Card';
import VideoCardThumbnailArea from './VideoCardThumbnailArea';
import VideoCardInfoArea from './VideoCardInfoArea';
import VideoCardLoadingState from './VideoCardLoadingState';
import { VideoCardStyleSettings } from './VideoCardHelpers';
import LoaderCircular from '../LoaderCircular';
import { Omit } from '../globals/js/type-helpers';
export interface VideoCardThumbnailData {
    /**
     * Alt Text for Thumbnail, probably the video title. **Required** for single video cards, can be excluded for group cards.
     */
    thumbnailAltText?: string;
    /**
     * src URI info for thumbnail
     */
    thumbnailSrc: string;
    /**
     * srcSet URI info for thumbnail **Required** for single video cards, can be excluded for group cards.
     */
    thumbnailSrcSet?: string;
}
export interface VideoCardProps {
    /**
     * A string to describe what checking the checkbox does. This is for screenreaders. This is **required** if `isSelectable` is chosen.
     */
    checkboxA11yLabel?: string;
    /**
     * Pass a VideoContextInfoArea component to provide context for a video's inclusion.
     */
    contextInfoArea?: React.ReactNode;
    /**
     * Class is added to the outer div of the VideoCard.
     */
    className?: string;
    /**
     * Pass ths content to the bottom of the card. This should be either a `VideoCardFooterActionsGrid or `VideoCardFooterAttribution` component.
     */
    footer?: React.Component<any>;
    /**
     * Set to true if the card is being used in a drag n'drop interfavce
     */
    isDraggable?: boolean;
    /**
     * Set to `true` if card is representing a group of videos (e.g. an album)
     */
    isGroup?: boolean;
    /**
     * Set to `true` to show an empty loading state for the card
     */
    isLoading?: boolean;
    /**
     * Set to `true` to put the card in a processing state (spinner)
     */
    isProcessing?: boolean;
    /**
     * Show privacy icon on title if set to `true`
     */
    isPrivate?: boolean;
    /**
     * Selection checkbox state should be controlled with this prop. Box is checked if set to `true`
     */
    isSelected?: boolean;
    /**
     * Show selection checkbox if set to `true`
     */
    isSelectable?: boolean;
    /**
     * Set to `tall` to force the loading state to be tall, as if the card had a context area, otherwise defaults to "normal"
     */
    loadingStyle?: 'normal' | 'tall';
    /**
     * Defeats standard margin-bottom on cards
     */
    noMargin?: boolean;
    /**
     * Fires when the checkbox is clicked. This callback should control `isSelected`
     */
    onCheckBoxClick: (event: React.MouseEvent<HTMLElement>) => void;
    /**
     * Fires when an area of card that does not have its own click behavior is clicked.
     */
    onCardClick?: (event: React.MouseEvent<HTMLElement>) => void;
    /**
     * Fires when the card receives MouseEnter
     */
    onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
    /**
     * Fires when the card receives MouseEnter
     */
    onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => void;
    /**
     * A string that descibes the privacy level
     */
    privacyDescription?: string;
    /**
     * use 'sm' for a more compact card, best used if width is below 250px wide. Default is 'md'
     */
    size?: 'sm' | 'md';
    /**
     * Action area specifically for small size. Usually an iconOnly button wraped in a menuPanel
     */
    smallActionArea?: React.ReactNode;
    /**
     * Top-left area of thumbnail for branding like SP Badge or VOD. This should receive an SVG component.
     */
    thumbnailBrandDecorationArea?: React.Component<any>;
    /**
     * For one or more social badges. Pass an array of React Components, usually an social badge SVG wrapped in a `MenuPanel`
     */
    thumbnailSocialBadgeArea?: Array<React.Component<any>>;
    /**
     * Pass a Timestamp (`VideoCardTimestamp` component) or LiveBadge (`VideoCardLiveBadge` component)
     */
    thumbnailTimestampArea?: React.Component<any>;
    /**
     * Takes an array of `VideoCardPropertyBadge` components (e.g. 'HDR')
     */
    thumbnailVideoCardPropertiesArea?: Array<React.Component<any>>;
    /**
     * An array of thumbnail data objects, Only one is required for a standard card. Use 3 for a group. See props above.
     */
    thumbnailData: Array<VideoCardThumbnailData>;
    /**
     * The title of the video or album as a string.
     */
    title: string;
    /**
     * The title link will be an HTML anchor tag by default
     * If an alternative such as React Router is required, pass it as a function reference here.
     */
    titleLinkElement?: any;
    /**
     * An object of props (e.g. href, onClick, ReactRouter `to`) to be spread onto the link element.
     */
    titleLinkProps?: any;
    /**
     * Pass the video or album subheader, usually used for stats accepts HTML.
     */
    titleSubheader?: React.Component<any>;
}

export interface VideoCardState extends React.HTMLProps<HTMLDivElement> {
    isHovered?: boolean;
}

// ==================== VideoCardWrapper



export interface WrapperStyledProps extends Omit<React.HTMLProps<HTMLElement>, 'size'> {
    hasContextArea?: boolean;
    isDraggable?: boolean;
    isSelected?: boolean;
    isLoading?: boolean;
    isProcessing?: boolean;
    noMargin?: boolean;
    size?: 'sm' | 'md';
}

const WrapperStyled = styled<WrapperStyledProps, any>(Card)`
    padding-bottom: ${props =>
        props.hasContextArea
            ? `calc(100% + ${rem(VideoCardStyleSettings.contextAreaHeight)})`
            : '100%'}; // forces square aspect ratio
    margin-bottom: ${props => props.noMargin ? 0 : rem(20)};
`;

export interface ContentPositionWrapperStyledProps
    extends React.HTMLProps<HTMLDivElement> {
    isProcessing?: boolean;
}

const ContentPositionWrapperStyled = styled<ContentPositionWrapperStyledProps,'div'>('div')`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    filter: ${props => (props.isProcessing ? 'grayscale(.7)' : 'none')};
`;

const SmallActionWrapperStyled = styled('div')`
    position: absolute;
    right: ${rem(4)};
    bottom: ${rem(4)};
`;

const FooterAreaStyled = styled('div')`
    padding: ${rem((VideoCardStyleSettings.footerHeight - VideoCardStyleSettings.actionButtonSize) / 2)} ${rem(VideoCardStyleSettings.padding)};
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
`;

const ProcessingOverlayStyled = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: ${rem(VideoCardStyleSettings.borderRadius)};
    background: rgba(0, 0, 0, 0.3);
    filter: none;
`;

// ==================== VideoCard
class VideoCard extends React.Component<VideoCardProps, any> {
    constructor(props: VideoCardProps) {
        super(props);
        this.state = {
            isHovered: false,
        };
    }
    state: VideoCardState;
    props: VideoCardProps;

    _handleClick = e => {
        if (typeof this.props.onCardClick === 'function') {
            this.props.onCardClick(e);
        }
    };

    _handleMouseEnter = e => {
        if (!this.props.isProcessing) {
            this.setState({
                isHovered: true,
            });

            if (typeof this.props.onMouseEnter === 'function') {
                this.props.onMouseEnter(e);
            }
        }
    };

    _handleMouseLeave = e => {
        this.setState({
            isHovered: false,
        });

        if (typeof this.props.onMouseLeave === 'function') {
            this.props.onMouseLeave(e);
        }
    };

    _suppressEvents = e => {
        e.stopPropagation();
    };

    public render() {
        const {
            checkboxA11yLabel,
            contextInfoArea,
            footer,
            isDraggable,
            isGroup,
            isLoading,
            isPrivate,
            isProcessing,
            isSelected,
            isSelectable,
            loadingStyle="normal",
            noMargin,
            onCheckBoxClick,
            onCardClick,
            onMouseEnter,
            onMouseLeave,
            privacyDescription,
            size = "md",
            smallActionArea,
            thumbnailBrandDecorationArea,
            thumbnailSocialBadgeArea,
            thumbnailTimestampArea,
            thumbnailVideoCardPropertiesArea,
            thumbnailData,
            titleLinkElement,
            titleLinkProps,
            title,
            titleSubheader,
            ...filteredProps
        } = this.props;

        const showAllContent = size !== 'sm';

        const VideoCardContent = (
            <div>
                <ContentPositionWrapperStyled isProcessing={isProcessing}>
                    {contextInfoArea}
                    <VideoCardThumbnailArea
                        checkboxA11yLabel={checkboxA11yLabel}
                        isGroup={isGroup}
                        isTopOfCard={contextInfoArea && showAllContent ? false : true}
                        isHovered={this.state.isHovered}
                        isSelectable={isSelectable}
                        isSelected={isSelected}
                        onCheckBoxClick={onCheckBoxClick}
                        thumbnailBrandDecorationArea={
                            showAllContent && thumbnailBrandDecorationArea
                        }
                        thumbnailSocialBadgeArea={showAllContent && thumbnailSocialBadgeArea}
                        thumbnailTimestampArea={showAllContent && thumbnailTimestampArea}
                        thumbnailVideoCardPropertiesArea={
                            showAllContent && thumbnailVideoCardPropertiesArea
                        }
                        thumbnailData={thumbnailData}
                    />
                    <VideoCardInfoArea
                        footer={showAllContent && footer}
                        isPrivate={isPrivate}
                        privacyDescription={privacyDescription}
                        size={size}
                        title={title}
                        titleLinkElement={titleLinkElement}
                        titleLinkProps={titleLinkProps}
                        titleSubheader={showAllContent && titleSubheader}
                    />
                </ContentPositionWrapperStyled>
                {!showAllContent && smallActionArea && (
                    <SmallActionWrapperStyled
                        onClick={this._suppressEvents}
                    >
                        {smallActionArea}
                    </SmallActionWrapperStyled>
                    )   
                }
                {showAllContent && footer ? <FooterAreaStyled>{footer}</FooterAreaStyled> : null}
                {isProcessing && (
                    <ProcessingOverlayStyled onClick={this._suppressEvents}>
                        <LoaderCircular size="xl" format="light" />
                    </ProcessingOverlayStyled>
                )}
            </div>
        )

        return (
            <WrapperStyled
                hasContextArea={(isLoading && loadingStyle==="tall") || (showAllContent && contextInfoArea) ? true : false}
                isDraggable={isDraggable}
                isLoading={isLoading}
                isProcessing={isProcessing}
                isSelected={isSelected}
                noMargin={noMargin}
                onClick={this._handleClick}
                onMouseEnter={this._handleMouseEnter}
                onMouseLeave={this._handleMouseLeave}
                size={size}
                {...filteredProps}
            >
                {isLoading ? <VideoCardLoadingState /> : VideoCardContent}
            </WrapperStyled>
        );
    }
}

export default VideoCard;
