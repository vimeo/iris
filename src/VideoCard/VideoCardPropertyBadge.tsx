import React from 'react';
import styled from 'styled-components';
import { rem, rgba } from 'polished';
import {ParagraphSm} from '../Type';
import COLORS from '../globals/js/constants/COLORS';

export interface VideoCardPropertyBadge extends React.HTMLProps<HTMLInputElement>  {
    /* 
    * The Property Badge Label
    */
    label: string,
};

// ==================== VideoCardPropertyBadge Styled

const VideoCardPropertyBadgeStyled = styled<React.HTMLProps<HTMLDivElement>, 'div'>('div')`
    align-items: center;
    background: ${rgba(COLORS.White, .9)};
    border-radius: ${rem(2)};
    display: inline-flex;
    padding: ${rem(4)} ${rem(8)};
    text-transform: uppercase;
`;

const VideoCardPropertyBadgeTextStyled = styled<React.HTMLProps<HTMLDivElement>, ParagraphSm >(ParagraphSm )`
    align-items: center;
    display: inline-flex;
    font-weight: 600;
    letter-spacing: ${rem(1.25)};
    margin-bottom: 0;
`;

// ==================== VideoCardPropertyBadge

const VideoCardPropertyBadge: React.SFC<VideoCardPropertyBadge> = ({
    label,
    ref: _,
}) => {
    
    return (
        <VideoCardPropertyBadgeStyled>
            <VideoCardPropertyBadgeTextStyled>
                {label}
            </VideoCardPropertyBadgeTextStyled>
        </VideoCardPropertyBadgeStyled>
    );
};

export default VideoCardPropertyBadge;
