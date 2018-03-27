import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ParagraphSm } from '../Type';
import {VideoCardStyleSettings} from './VideoCardHelpers';
import Avatar from '../Avatar';

export interface VideoCardFooterAttributionProps {
    /**
    * Should take a ButtonIconOnly wrapped in a Menu and/or tooltip
    */
    attributionActionArea?: React.Component<any>,
    /**
    * URI for user avatar
    */
    userAvatarSrc: string,
    /**
    * URI for user avatar srcSet
    */
    userAvatarSrcSet?: string,
    /**
    * The author's name
    */
    userName: string,
    
};

// ==================== VideoCardFooterAttribution Styled

const Wrapper = styled<React.HTMLProps<HTMLDivElement>, 'div'>('div')`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const AvatarStyled = styled<React.HTMLProps<HTMLDivElement>, Avatar>(Avatar)`
    display: inline-flex;
    margin-right: ${rem(4)};
`;

const UserNameStyled = styled<React.HTMLProps<HTMLSpanElement>, any>(ParagraphSm)`
    align-items: center;
    display: inline-flex;
    font-weight: 600;
    width: calc(100% - ${rem(VideoCardStyleSettings.actionButtonSize)});
`;

const AttributionStyled = styled<React.HTMLProps<HTMLDivElement>, 'div'>('div')`
    display: inline-flex;
    width: calc(100% - ${rem(VideoCardStyleSettings.actionButtonSize)});
`;

const UserNameTruncation = styled<React.HTMLProps<HTMLSpanElement>, 'span' >('span')`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    width: 100%;
`
// ==================== VideoCardFooterAttribution

const VideoCardFooterAttribution: React.SFC<VideoCardFooterAttributionProps> = ({
    attributionActionArea,
    userAvatarSrc,
    userAvatarSrcSet,
    userName,
    ...filteredProps
}) => {

    const suppressClickPropagation = (e) => {
        // clicks in the footer area should not trigger the onClick for the entireCard.
        e.stopPropagation();
    }
    
    return (
        <Wrapper
            onClick={suppressClickPropagation}
            {...filteredProps}
        >
            <AttributionStyled>
                <AvatarStyled
                    alt={userName}
                    src={userAvatarSrc}
                    srcSet={userAvatarSrcSet}
                    size="sm"
                />
                    <UserNameStyled
                        element="span"
                        noMargin
                    >
                        <UserNameTruncation>{userName}</UserNameTruncation>
                    </UserNameStyled>
            </AttributionStyled>
            {attributionActionArea}
        </Wrapper>
    );
};

export default VideoCardFooterAttribution;
