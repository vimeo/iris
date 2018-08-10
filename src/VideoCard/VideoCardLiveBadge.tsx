import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ParagraphSm } from '../Type';
// @ts-ignore
import CircleIcon from '../icons/circle-filled.svg';
import VimeoStyleSettings from '../globals/js/style-settings/VimeoStyleSettings';
import { VideoCardStyleSettings } from './VideoCardHelpers';

export interface VideoCardLiveBadge extends React.HTMLProps<HTMLInputElement> {
    /**
     * We need the translated string for "Live"
     */
    liveLabelString: string;
}

// ==================== VideoCardLiveBadge Styled

const VideoCardLiveBadgeStyled = styled<React.HTMLProps<HTMLDivElement>, 'div'>(
    'div'
)`
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

const LiveIconStyled = styled<React.HTMLProps<HTMLSpanElement>, 'span'>('span')`
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

// ==================== VideoCardLiveBadge

const VideoCardLiveBadge: React.SFC<VideoCardLiveBadge> = ({
    liveLabelString,
}) => {
    return (
        <VideoCardLiveBadgeStyled>
            <VideoCardLiveBadgeTextStyled format="white">
                <LiveIconStyled>
                    <CircleIcon />
                </LiveIconStyled>
                {liveLabelString}
            </VideoCardLiveBadgeTextStyled>
        </VideoCardLiveBadgeStyled>
    );
};

export default VideoCardLiveBadge;
