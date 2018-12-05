import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ParagraphSm } from '../Type';
import { TypeProps } from '../Type/TypeTypes';
import { VideoCardStyleSettings } from './VideoCardHelpers';
import TruncatedTextWrapper from '../TruncatedTextWrapper';

export interface VideoCardFooterAttributionProps {
    /**
     * Should take a ButtonIconOnly wrapped in a Menu and/or tooltip
     */
    attributionActionArea?: React.ReactNode;
    /**
     * Should be an xs Avatar component optionally wrapped in a link. Use this: `<Avatar alt={userName} src={userAvatarSrc} srcSet={userAvatarSrcSet} size="xs" />`
     */
    userAvatar: string;
    /**
     * pass in an small Iris Badge Component
     */
    userBadge?: React.ReactNode;
    /**
     * The author's name as a string or link, if a link use `<LinkText decoration="inherit">`
     */
    userName: React.ReactNode;
}

// ==================== VideoCardFooterAttribution Styled

const Wrapper = styled('div')`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const AvatarWrapperStyled = styled('div')`
    display: inline-flex;
    margin-right: ${rem(4)};
`;

const ParagraphSmFiltered = ({ hasActionArea, ...props }) => (
    <ParagraphSm {...props} />
);

interface UserNameStyledProps extends TypeProps {
    hasActionArea: boolean;
}

const UserNameStyled = styled<UserNameStyledProps, any>(ParagraphSmFiltered)`
    align-items: center;
    display: inline-flex;
    font-weight: 600;
    width: ${props =>
        props.hasActionArea
            ? `calc(100% - ${rem(VideoCardStyleSettings.actionButtonSize)})`
            : '100%'};
`;

interface AttributionStyledProps {
    hasActionArea: boolean;
}

const AttributionStyled = styled<AttributionStyledProps, any>('div')`
    display: inline-flex;
    width: ${props =>
        props.hasActionArea
            ? `calc(100% - ${rem(VideoCardStyleSettings.actionButtonSize)})`
            : '100%'};
    align-items: center;
`;

const BadgeAreaStyled = styled('span')`
    display: inline-flex;
    justify-content: center;
    align-items: center;
`;
// ==================== VideoCardFooterAttribution

const VideoCardFooterAttribution: SFC<VideoCardFooterAttributionProps> = ({
    attributionActionArea,
    userAvatar,
    userBadge,
    userName,
    ...filteredProps
}) => {
    const suppressClickPropagation = e => {
        // clicks in the footer area should not trigger the onClick for the entireCard.
        e.stopPropagation();
    };

    return (
        <Wrapper onClick={suppressClickPropagation} {...filteredProps}>
            <AttributionStyled hasActionArea={attributionActionArea}>
                <AvatarWrapperStyled>{userAvatar}</AvatarWrapperStyled>
                <UserNameStyled
                    element="span"
                    noMargin
                    hasActionArea={attributionActionArea}
                >
                    <TruncatedTextWrapper>{userName}</TruncatedTextWrapper>
                    {userBadge && (
                        <BadgeAreaStyled>{userBadge}</BadgeAreaStyled>
                    )}
                </UserNameStyled>
            </AttributionStyled>
            {attributionActionArea}
        </Wrapper>
    );
};

export default VideoCardFooterAttribution;
