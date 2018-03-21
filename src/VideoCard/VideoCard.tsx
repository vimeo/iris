import React from 'react';
import styled from 'styled-components';
import {rem} from 'polished';
import COLORS from '../globals/js/constants/COLORS';
import VideoCardThumbnailArea from './VideoCardThumbnailArea';
import VideoCardInfoArea from './VideoCardInfoArea';
import {VideoCardStyleSettings} from './VideoCardHelpers';

export interface VideoCardThumbnailData {
    /**
    * Alt Text for Thumbnail, probably the video title. **Required** for single video cards, can be excluded for group cards.
    */
    thumbnailAltText?: string,
    /**
    * src URI info for thumbnail
    */
    thumbnailSrc: string,
    /**
    * srcSet URI info for thumbnail **Required** for single video cards, can be excluded for group cards.
    */
    thumbnailSrcSet?: string,
}
export interface VideoCardProps {
    /**
    * A string to describe what checking the checkbox does. This is for screenreaders. This is **required** if `isSelectable` is chosen.
    */
    checkboxA11yLabel?:string,
    /**
    * Class is added to the outer div of the VideoCard.
    */
    className?: string,
    /**
    * Pass ths content to the bottom of the card. This should be either a `VideoCardFooterActionsGrid or `VideoCardFooterAttribution` component.
    */
    footer?: React.Component<any>,
    /**
    * Set to `true` if card is representing a group of videos (e.g. an album)
    */
    isGroup?: boolean,
    /**
    * Show privacy icon on title if set to `true`
    */
    isPrivate?: boolean,
    /**
    * Selection checkbox state should be controlled with this prop. Box is checked if set to `true`
    */
    isSelected?: boolean,
    /**
    * Show selection checkbox if set to `true`
    */
    isSelectable?: boolean,
    /**
    * Fires when the checkbox is clicked. This callback should control `isSelected`
    */
    onCheckBoxClick: (event) => void,
    /**
    * Fires when an area of card that does not have its own click behavior is clicked.
    */
    onCardClick?: (event) => void,
    /**
    * Fires when the card receives MouseEnter
    */
    onMouseEnter?: (event) => void,
    /**
    * Fires when the card receives MouseEnter
    */
    onMouseLeave?: (event) => void,
    /**
    * Top-left area of thumbnail for branding like SP Badge or VOD. This should receive an SVG component.
    */
    thumbnailBrandDecorationArea?: React.Component<any>,
    /**
    * For one or more social badges. Pass an array of React Components, usually an social badge SVG wrapped in a `MenuPanel`
    */
    thumbnailSocialBadgeArea?: Array<React.Component<any>>,
    /**
    * Pass a Timestamp (`VideoCardTimestamp` component) or LiveBadge (`VideoCardLiveBadge` component)
    */
    thumbnailTimestampArea?: React.Component<any>,
    /**
    * Takes an array of `VideoCardPropertyBadge` components (e.g. 'HDR')
    */
    thumbnailVideoCardPropertiesArea?: Array<React.Component<any>>,
    /**
    * An array of thumbnail data objects, Only one is required for a standard card. Use 3 for a group. See props above.
    */
    thumbnailData: Array<VideoCardThumbnailData>,
    /**
    * The title of the video or album as a string.
    */
    title: string,
    /**
    * The title link will be an HTML anchor tag by default
    * If an alternative such as React Router is required, pass it as a function reference here.
    */
    titleLinkElement?: any,
    /**
    * An object of props (e.g. href, onClick, ReactRouter `to`) to be spread onto the link element.
    */
    titleLinkProps?: any,
    /**
    * Pass the video or album subheader, usually used for stats accepts HTML.
    */
    titleSubheader?: React.Component<any>,
};


export interface VideoCardState extends React.HTMLProps<HTMLDivElement> {
    isHovered?: boolean,
}


// ==================== VideoCardWrapper

const getBoxShadow = (props) => {
    if(props.isSelected) return `0 0 0 ${rem(3)} ${COLORS.VimeoBlue}`
    
    if(props.isHovered) return `0 ${rem(4)} ${rem(8)} 0 rgba(0,0,0,0.15)`

    return `0 0 ${rem(10)} 0 rgba(0,0,0,0.05)`
}

export interface WrapperStyledProps extends React.HTMLProps<HTMLDivElement> {
    isSelected?: boolean,
    isHovered?: boolean,
}

const WrapperStyled = styled<WrapperStyledProps, 'div'>('div')`
    position: relative;
    background: #FFFFFF;
    border: ${rem(1)} solid ${props => props.isSelected ? COLORS.VimeoBlueDarkened : COLORS.Plaster};
    border-radius: ${rem(VideoCardStyleSettings.borderRadius)};
    box-shadow: ${getBoxShadow};
    min-height: ${rem(248)};
    width: 100%;
    overflow: hidden;
    padding-bottom: 100%; // forces square aspect ratio
    margin-bottom: ${rem(20)};
    transition: box-shadow ${VideoCardStyleSettings.hoverTransition};
    
    &:hover{
        cursor: pointer;
    }
`;

const ContentPositionWrapperStyled = styled<React.HTMLProps<HTMLDivElement>, 'div'>('div')`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`

const FooterAreaStyled = styled<React.HTMLProps<HTMLDivElement>, 'div'>('div')`
    padding: ${rem((VideoCardStyleSettings.footerHeight - VideoCardStyleSettings.actionButtonSize)/2)} ${rem(VideoCardStyleSettings.padding)};
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
`;

// ==================== VideoCard
class VideoCard extends React.Component<VideoCardProps, any> {
    constructor(props: VideoCardProps) {
        super(props);
        this.state = {
            isHovered: false,
        }
    }
    state: VideoCardState;
    props: VideoCardProps;

    _handleClick = (e) => {
        if(typeof this.props.onCardClick === 'function') {
            this.props.onCardClick(e);
        }
    }

    _handleMouseEnter = (e) => {
        this.setState({
            isHovered: true,
        });

        if(typeof this.props.onMouseEnter === 'function') {
            this.props.onMouseEnter(e);
        }
    }

    _handleMouseLeave= (e) => {
        this.setState({
            isHovered: false,
        });

        if(typeof this.props.onMouseLeave === 'function') {
            this.props.onMouseLeave(e);
        }
    }
    
    public render() {
        const {
            checkboxA11yLabel,
            footer,
            isGroup,
            isPrivate,
            isSelected,
            isSelectable,
            onCheckBoxClick,
            onCardClick,
            onMouseEnter,
            onMouseLeave,
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

        return (
            <WrapperStyled
                isHovered={this.state.isHovered}
                isSelected={isSelected}
                onClick={this._handleClick}
                onMouseEnter={this._handleMouseEnter}
                onMouseLeave={this._handleMouseLeave}
                {...filteredProps}
            >
                <ContentPositionWrapperStyled>
                    <VideoCardThumbnailArea
                        checkboxA11yLabel={checkboxA11yLabel}
                        isGroup={isGroup}
                        isHovered={this.state.isHovered}
                        isSelectable={isSelectable}
                        isSelected={isSelected}
                        onCheckBoxClick={onCheckBoxClick}
                        thumbnailBrandDecorationArea={thumbnailBrandDecorationArea}
                        thumbnailSocialBadgeArea={thumbnailSocialBadgeArea}
                        thumbnailTimestampArea={thumbnailTimestampArea}
                        thumbnailVideoCardPropertiesArea={thumbnailVideoCardPropertiesArea}
                        thumbnailData={thumbnailData}
                    />
                    <VideoCardInfoArea
                        footer={footer}
                        isPrivate={isPrivate}
                        title={title}
                        titleLinkElement={titleLinkElement}
                        titleLinkProps={titleLinkProps}
                        titleSubheader={titleSubheader}
                    />
                </ContentPositionWrapperStyled>
                {footer && (
                    <FooterAreaStyled>
                        {footer}
                    </FooterAreaStyled>
                )} 
            </WrapperStyled>
        );
    }
};


export default VideoCard;
