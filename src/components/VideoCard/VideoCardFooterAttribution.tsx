import React, { SFC, ReactNode } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ParagraphSm } from '../../legacy';
import { VideoCardStyleSettings } from './VideoCardHelpers';
import { TruncatedTextWrapper } from '../TruncatedTextWrapper/TruncatedTextWrapper';

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

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const AvatarWrapperStyled = styled.div`
  display: inline-flex;
  margin-right: ${rem(4)};
`;

const ParagraphSmFiltered = ({ hasActionArea, ...props }) => (
  <ParagraphSm {...props} />
);

const UserNameStyled = styled(ParagraphSmFiltered)`
  align-items: center;
  display: inline-flex;
  font-weight: 600;
  width: ${props =>
    props.hasActionArea
      ? `calc(100% - ${rem(VideoCardStyleSettings.actionButtonSize)})`
      : '100%'};
`;

const AttributionStyled = styled.div<{ hasActionArea: ReactNode }>`
  display: inline-flex;
  width: ${props =>
    props.hasActionArea
      ? `calc(100% - ${rem(VideoCardStyleSettings.actionButtonSize)})`
      : '100%'};
  align-items: center;
`;

const BadgeAreaStyled = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const VideoCardFooterAttribution: SFC<
  VideoCardFooterAttributionProps
> = ({
  attributionActionArea,
  userAvatar,
  userBadge,
  userName,
  ...props
}) => (
  <Wrapper onClick={e => e.stopPropagation()} {...props}>
    <AttributionStyled hasActionArea={attributionActionArea}>
      <AvatarWrapperStyled>{userAvatar}</AvatarWrapperStyled>
      <UserNameStyled
        element="span"
        hasActionArea={attributionActionArea}
      >
        <TruncatedTextWrapper>{userName}</TruncatedTextWrapper>
        {userBadge && <BadgeAreaStyled>{userBadge}</BadgeAreaStyled>}
      </UserNameStyled>
    </AttributionStyled>
    {attributionActionArea}
  </Wrapper>
);
