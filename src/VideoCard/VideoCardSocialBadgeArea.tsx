import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { VideoCardStyleSettings } from './VideoCardHelpers';

export interface VideoCardSocialBadgeAreaProps
    extends React.HTMLProps<HTMLDivElement> {
    socialBadges: any[];
}

// ==================== VideoCardSocialBadgeArea Styled
const VideoCardSocialBadgeWrapperStyled = styled<
    React.HTMLProps<HTMLDivElement>,
    'div'
>('div')`
    display: flex;
    position: absolute;
    bottom: ${rem(VideoCardStyleSettings.padding)};
    left: ${rem(VideoCardStyleSettings.padding)};

    svg {
        width: ${rem(24)};
        height: ${rem(24)};
    }
`;

const BadgeCellStyled = styled<React.HTMLProps<HTMLDivElement>, 'div'>('div')`
    margin-right: ${rem(8)};

    &:last-child {
        margin-right: 0;
    }
`;

// ==================== VideoCardSocialBadgeArea

const VideoCardSocialBadgeArea: SFC<VideoCardSocialBadgeAreaProps> = ({
    socialBadges,
    ref: _, // filter out ref from styled component
    ...filteredProps
}) => {
    const Badges = socialBadges.map((thisBadge, i) => (
        <BadgeCellStyled key={`socialBadge${i}`}>{thisBadge}</BadgeCellStyled>
    ));

    return (
        <VideoCardSocialBadgeWrapperStyled {...filteredProps}>
            {Badges}
        </VideoCardSocialBadgeWrapperStyled>
    );
};

export default VideoCardSocialBadgeArea;
