import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { VideoCardStyleSettings } from './VideoCardHelpers';
import { ParagraphAltXs, Header6 } from '../Type';

export interface VideoCardContextInfoAreaProps {
    /**
     * Intro header for context, e.g. "Added to"
     */
    contextSubHeader: string;
    /**
     * Icon decoration for intro header, for likes use <VideoCardLikeIcon />
     */
    contextSubHeaderIcon?: React.ReactNode;
    /**
     * Main context attribution, can be a string or a complex React node (e.g. a link).
     */
    contextAttributionHeader: React.ReactNode;
}

export interface WrapperStyledProps extends React.HTMLProps<HTMLDivElement> {
    hasIcon: boolean;
}

const ContextIconSize = 12;
// ==================== VideoCardContextArea Styled
const WrapperStyled = styled<WrapperStyledProps, 'div'>('div')`
    position: relative;
    max-height: ${rem(VideoCardStyleSettings.contextAreaHeight)};
    padding-top: ${rem(VideoCardStyleSettings.padding / 2)};
    padding-right: ${rem(VideoCardStyleSettings.padding)};
    padding-bottom: ${rem(VideoCardStyleSettings.padding / 2)};
    padding-left: ${props =>
        props.hasIcon
            ? rem(VideoCardStyleSettings.padding + ContextIconSize + 4)
            : rem(VideoCardStyleSettings.padding)};
`;

const IconStyled = styled('div')`
    position: absolute;
    top: ${rem(2)};
    left: ${rem(VideoCardStyleSettings.padding)};
    height: ${rem(ContextIconSize)};
    width: ${rem(ContextIconSize)};
    svg {
        height: ${rem(ContextIconSize)};
        width: ${rem(ContextIconSize)};
    }
`;

// ==================== VideoCardContextArea

const VideoCardContextInfoArea = ({
    contextAttributionHeader,
    contextSubHeader,
    contextSubHeaderIcon,
    ...filteredProps
}: VideoCardContextInfoAreaProps) => {
    const suppressClickPropagation = e => {
        e.stopPropagation();
    };

    return (
        <WrapperStyled
            {...filteredProps}
            onClick={suppressClickPropagation}
            hasIcon={contextSubHeaderIcon ? true : false}
        >
            {contextSubHeaderIcon && (
                <IconStyled>{contextSubHeaderIcon}</IconStyled>
            )}
            <ParagraphAltXs noMargin>{contextSubHeader}</ParagraphAltXs>
            <Header6 element="p" noMargin>
                {contextAttributionHeader}
            </Header6>
        </WrapperStyled>
    );
};

export default VideoCardContextInfoArea;
