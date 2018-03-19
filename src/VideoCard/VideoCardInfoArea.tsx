import React from 'react';
import styled from 'styled-components';
import COLORS from '../globals/js/constants/COLORS';
import {rem} from 'polished';
import LinkText from '../LinkText';
import {Header6, ParagraphAltMd} from '../Type';
// @ts-ignore 
import LockFilled from '../icons/lock-filled.svg';
import {VideoCardStyleSettings} from './VideoCardHelpers';

export interface VideoCardInfoAreaProps extends React.HTMLProps<HTMLDivElement>  {
    footer?: React.Component<any>,
    isPrivate?: boolean,
    title: string,
    titleLinkElement?: any,
    titleLinkProps?: any,
    titleSubheader?: React.Component<any>,
};

// ==================== VideoCardInfoArea Styled

const VideoCardInfoAreaStyled = styled<React.HTMLProps<HTMLDivElement>, 'div'>('div')`
    position: relative;
    padding: ${rem(VideoCardStyleSettings.padding / 2 )} ${rem(VideoCardStyleSettings.padding)} ${rem(VideoCardStyleSettings.footerHeight)};
`;

const PrivacyIconStyled = styled<React.HTMLProps<HTMLSpanElement>, 'span'>('span')`
    display: inline-block;
    width: ${rem(12)};
    height: ${rem(12)};
    margin-right: ${rem(4)};
    transform: translateY(${rem(-3)});

    svg {
        width: 100%;
        height: auto;

        * {
            fill: ${COLORS.AstroGranite};
        }
    }
`;

export interface TitleHeaderStyledProps extends React.HTMLProps<HTMLSpanElement> {
    decoration?: string,
    element?: string,
    isPrivate?: boolean,
}

const TitleHeaderTruncation = styled<TitleHeaderStyledProps, 'span' >('span')`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    width: ${props => props.isPrivate ? `calc(100% - ${rem(16)})` : '100%'};
`

// ==================== VideoCardInfoArea

const VideoCardInfoArea: React.SFC<VideoCardInfoAreaProps> = ({
    isPrivate,
    title,
    titleLinkElement,
    titleLinkProps,
    titleSubheader,
    ref: _, // filter out ref from styled component
}) => {

    const _defaultLinkClickHandler = (e) => {
        e.preventDefault();
    }

    const LinkTextElement =  (
        <TitleHeaderTruncation
            isPrivate={isPrivate}
        >
            <LinkText
                
                decoration="inherit"
                element="span"
            >
                {title}
            </LinkText>
        </TitleHeaderTruncation>
    )

    const defaultLinkElement = (
        <a
            title={title}
            href="#"
            onClick={_defaultLinkClickHandler}
            {...titleLinkProps}
        >
            {LinkTextElement}
        </a>
    )

    const LinkElement = titleLinkElement;
    
    return (
        <VideoCardInfoAreaStyled>
            <Header6 noMargin>
                {isPrivate && (
                    <PrivacyIconStyled>
                        <LockFilled  />
                    </PrivacyIconStyled>
                )}
                {LinkElement ? (
                    <LinkElement
                        title={title}
                        onClick={_defaultLinkClickHandler}
                        {...titleLinkProps}
                    >
                        {LinkTextElement}
                    </LinkElement>
                ) : defaultLinkElement}
            </Header6>
            {titleSubheader && (
                <ParagraphAltMd
                    element="span"
                    noMargin
                >
                    {titleSubheader}
                </ParagraphAltMd>
            )}
        </VideoCardInfoAreaStyled>
    );
};

export default VideoCardInfoArea;
