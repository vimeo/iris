import React from 'react';
import styled from 'styled-components';
import COLORS from '../globals/js/constants/COLORS';
import { rem } from 'polished';
import LinkText from '../LinkText';
import { Header6, ParagraphAltMd } from '../Type';
// @ts-ignore
import LockFilled from '../icons/lock-filled.svg';
import { VideoCardStyleSettings } from './VideoCardHelpers';
import { TypeBaseStyleSettings } from '../Type/TypeBase';
import TooltipOverlay from '../TooltipOverlay';

export interface VideoCardInfoAreaProps
    extends React.HTMLProps<HTMLDivElement> {
    footer?: React.Component<any>;
    isPrivate?: boolean;
    privacyDescription?: string;
    title: string;
    titleLinkElement?: any;
    titleLinkProps?: any;
    titleSubheader?: React.Component<any>;
}

// ==================== VideoCardInfoArea Styled

const VideoCardInfoAreaStyled = styled<React.HTMLProps<HTMLDivElement>, 'div'>(
    'div'
)`
    position: relative;
    padding: ${rem(VideoCardStyleSettings.padding / 2)}
        ${rem(VideoCardStyleSettings.padding)}
        ${rem(VideoCardStyleSettings.footerHeight)};
`;

const PrivacyIconStyled = styled<React.HTMLProps<HTMLSpanElement>, 'span'>(
    'span'
)`
    float: left;
    display: inline-block;
    line-height: 1; // cancels out header line height
    margin-right: ${rem(4)};
    transform: translateY(${rem(2)});
    transition: transform 300ms ease;

    &:hover * {
        transform: scale(1.04);
        cursor: default;
    }
    svg {
        width: ${rem(16)};
        height: ${rem(16)};

        * {
            fill: ${COLORS.AstroGranite};
        }
    }

    *:focus {
        outline: none;
    }
`;

/* Header is truncated using technique from http://hackingui.com/front-end/a-pure-css-solution-for-multiline-text-truncation/ */

const HeaderStyled = styled(Header6)`
        word-wrap: break-word;
        /* start text truncation CSS */
        width: 100%;
        /* hide text if it more than N lines  */
        overflow: hidden;
        /* for set '...' in absolute position */
        position: relative; 
        /* max-height = line height of text * 2 lines */
        max-height: ${rem(TypeBaseStyleSettings.lineHeight.h6 * 2)}; 
        /* fix problem when last visible word doesn't adjoin right side  */
        text-align: justify;  
        /* place for '...' */
        margin-right: -1em;
        padding-right: 1em;
    }

    /* create the ... */
    &:before {
        /* ellipsis in the end */
        content: '...';
        /* absolute position */
        position: absolute;
        /* set position to right bottom corner of block */
        right: 0;
        bottom: 0;
    }

    /* hide ... if we have text, which is less than or equal to max lines */
    &:after {
        /* points in the end */
        content: '';
        /* absolute position */
        position: absolute;
        /* set position to right bottom corner of text */
        right: 0;
        /* set width and height */
        width: 1em;
        height: 1em;
        margin-top: 0.2em;
        /* bg color = bg color under block */
        background: ${COLORS.White};
    }
`;

const LinkTextStyled = styled(LinkText)`
    display: inline;
`;

export interface TitleHeaderStyledProps
    extends React.HTMLProps<HTMLSpanElement> {
    decoration?: string;
    element?: string;
    isPrivate?: boolean;
}

// ==================== VideoCardInfoArea

const VideoCardInfoArea: React.SFC<VideoCardInfoAreaProps> = ({
    isPrivate,
    privacyDescription,
    title,
    titleLinkElement,
    titleLinkProps,
    titleSubheader,
    ref: _, // filter out ref from styled component
}) => {
    const _defaultLinkClickHandler = e => {
        e.preventDefault();
    };

    const stopClickPropagation = e => {
        e.stopPropagation();
    };

    const LinkTextElement = (
        <span>
            {isPrivate && (
                <PrivacyIconStyled>
                    <TooltipOverlay
                        tooltipText={privacyDescription}
                        onClick={stopClickPropagation}
                    >
                        <LockFilled />
                    </TooltipOverlay>
                </PrivacyIconStyled>
            )}
            <LinkTextStyled decoration="inherit" element="span">
                {title}
            </LinkTextStyled>
        </span>
    );

    const defaultLinkElement = (
        <a
            title={title}
            href="#"
            onClick={_defaultLinkClickHandler}
            {...titleLinkProps}
        >
            {LinkTextElement}
        </a>
    );

    const LinkElement = titleLinkElement;

    return (
        <VideoCardInfoAreaStyled>
            <HeaderStyled element="h4" noMargin>
                {LinkElement ? (
                    <LinkElement
                        title={title}
                        onClick={_defaultLinkClickHandler}
                        {...titleLinkProps}
                    >
                        {LinkTextElement}
                    </LinkElement>
                ) : (
                    defaultLinkElement
                )}
            </HeaderStyled>
            {titleSubheader && (
                <ParagraphAltMd element="span" noMargin>
                    {titleSubheader}
                </ParagraphAltMd>
            )}
        </VideoCardInfoAreaStyled>
    );
};

export default VideoCardInfoArea;
