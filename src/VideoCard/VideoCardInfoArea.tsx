import React, { SFC, ReactNode } from 'react';
import styled from 'styled-components';
import { COLORS } from '../globals/js/constants/COLORS';
import { rem } from 'polished';
import { LinkText } from '../LinkText/LinkText';
import { TruncatedTextWrapper } from '../TruncatedTextWrapper/TruncatedTextWrapper';
import { Header6, ParagraphSm, ParagraphAltMd } from '../Type';
import LockFilled from '../icons/lock-filled.svg';
import { VideoCardStyleSettings } from './VideoCardHelpers';
import { TooltipOverlay } from '../TooltipOverlay/TooltipOverlay';
import { Omit } from '../globals/js/type-helpers';
import { VimeoStyleSettings } from '../globals/js/style-settings/VimeoStyleSettings';

export interface VideoCardInfoAreaProps
    extends Omit<React.HTMLProps<HTMLElement>, 'size'> {
    footer?: ReactNode;
    isPrivate?: boolean;
    privacyDescription?: string;
    size?: 'sm' | 'md';
    title: string;
    titleLinkElement?: any;
    titleLinkProps?: any;
    titleSubheader?: ReactNode;
}

const VideoCardInfoAreaStyled = styled<React.HTMLProps<HTMLDivElement>, 'div'>(
    'div',
)`
    position: relative;
    padding: ${rem(VideoCardStyleSettings.padding / 2)}
        ${rem(VideoCardStyleSettings.padding)}
        ${rem(VideoCardStyleSettings.footerHeight)};
`;

interface PrivacyIconStyledProps
    extends Omit<React.HTMLProps<HTMLSpanElement>, 'size'> {
    size: 'sm' | 'md';
}

const PrivacyIconSize = {
    sm: '.75rem',
    md: '1rem',
};

const PrivacyIconStyled = styled<PrivacyIconStyledProps, 'span'>('span')`
    float: left;
    display: inline-block;
    margin-right: ${rem(4)};
    transform: translateY(${rem(2)});
    transition: transform 300ms ease;

    &:hover svg {
        transform: scale(1.15);
        cursor: default;
    }
    svg {
        width: ${props => PrivacyIconSize[props.size] || PrivacyIconSize.md};
        height: ${props => PrivacyIconSize[props.size] || PrivacyIconSize.md};

        * {
            fill: ${COLORS.AstroGranite};
        }
    }

    *:focus {
        outline: none;
    }
`;

interface TitleWrapperProps extends React.HTMLProps<HTMLDivElement> {
    isPrivate: boolean;
    cardSize: 'sm' | 'md';
}

const TitleWrapper = styled<TitleWrapperProps, 'div'>('div')`
    ${props =>
        props.isPrivate
            ? `
    padding-left: ${PrivacyIconSize[props.cardSize] || PrivacyIconSize.md}
    `
            : ''};
`;

const HeaderSmStyled = styled(ParagraphSm)`
    font-weight: ${VimeoStyleSettings.type.weights.bold};
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

export const VideoCardInfoArea: SFC<VideoCardInfoAreaProps> = ({
    isPrivate,
    privacyDescription,
    size,
    title,
    titleLinkElement,
    titleLinkProps,
    titleSubheader,
    // @ts-ignore
    ref: _,
}) => {
    const _defaultLinkClickHandler = e => {
        e.preventDefault();
    };

    const stopClickPropagation = e => {
        e.stopPropagation();
    };

    const LinkTextElement = (
        <span>
            <LinkTextStyled decoration="inherit" element="span">
                <TruncatedTextWrapper displayCSSType="block">
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
            <TitleWrapper cardSize={size} isPrivate={isPrivate}>
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
            </TitleWrapper>
            {titleSubheader && (
                <ParagraphAltMd element="span" noMargin>
                    {titleSubheader}
                </ParagraphAltMd>
            )}
        </VideoCardInfoAreaStyled>
    );
};
