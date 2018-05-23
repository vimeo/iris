import React from 'react';
import styled from 'styled-components';
import COLORS from '../globals/js/constants/COLORS';
import { rem } from 'polished';
import LinkText from '../LinkText';
import TruncatedTextWrapper from '../TruncatedTextWrapper';
import { Header6, ParagraphSm, ParagraphAltMd } from '../Type';
// @ts-ignore
import LockFilled from '../icons/lock-filled.svg';
import { VideoCardStyleSettings } from './VideoCardHelpers';
import TooltipOverlay from '../TooltipOverlay';
import { Omit } from '../globals/js/type-helpers';
import VimeoStyleSettings from '../globals/js/style-settings/VimeoStyleSettings';
export interface VideoCardInfoAreaProps
extends Omit<React.HTMLProps<HTMLElement>, 'size'> {
    footer?: React.Component<any>;
    isPrivate?: boolean;
    privacyDescription?: string;
    size?: 'sm' | 'md';
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

interface PrivacyIconStyledProps extends Omit<React.HTMLProps<HTMLSpanElement>, 'size'> {
    size: 'sm' | 'md';
}

const PrivacyIconStyled = styled<PrivacyIconStyledProps, 'span'>(
    'span'
)`
    float: left;
    display: inline-block;
    line-height: 1; // cancels out header line height
    margin-right: ${rem(4)};
    transform: translateY(${rem(2)});
    transition: transform 300ms ease;

    &:hover svg {
        transform: scale(1.15);
        cursor: default;
    }
    svg {
        width: ${props => props.size === 'sm' ? rem(12) : rem(16)};
        height:  ${props => props.size === 'sm' ? rem(12) : rem(16)};

        * {
            fill: ${COLORS.AstroGranite};
        }
    }

    *:focus {
        outline: none;
    }
`;


const HeaderSmStyled = styled(ParagraphSm)`
    font-weight: ${VimeoStyleSettings.type.weights.bold}
`;

const LinkTextStyled = styled(LinkText)`
    display: flex;
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
    size,
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
                <PrivacyIconStyled size={size}>
                    <TooltipOverlay
                        tooltipText={privacyDescription}
                        onClick={stopClickPropagation}
                    >
                        <LockFilled />
                    </TooltipOverlay>
                </PrivacyIconStyled>
            )}
            <LinkTextStyled
                decoration="inherit"
                element="span"
            >
                <TruncatedTextWrapper>
                    {title}
                </TruncatedTextWrapper>
            </LinkTextStyled>
    </span>
    );

    const defaultLinkElement = (
        <a
            href="#"
            onClick={_defaultLinkClickHandler}
            title={title}
            {...titleLinkProps}
        >
            {LinkTextElement}
        </a>
    );

    const LinkElement = titleLinkElement;
    const TypeElement = size === 'sm' ? HeaderSmStyled : Header6;
    return (
        <VideoCardInfoAreaStyled>
            <TypeElement element="h4" noMargin>
                {LinkElement ? (
                    <LinkElement
                        onClick={_defaultLinkClickHandler}
                        {...titleLinkProps}
                    >
                        {LinkTextElement}
                    </LinkElement>
                ) : (
                    defaultLinkElement
                )}
            </TypeElement>
            {titleSubheader && (
                <ParagraphAltMd element="span" noMargin>
                    {titleSubheader}
                </ParagraphAltMd>
            )}
        </VideoCardInfoAreaStyled>
    );
};

export default VideoCardInfoArea;
