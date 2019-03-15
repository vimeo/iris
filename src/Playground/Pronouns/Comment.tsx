import React, { SFC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Avatar } from '../../Avatar/Avatar';
import {
  Header5,
  Header6,
  HeaderAltSm,
  ParagraphAltMd,
} from '../../Type';
import { Badge as B } from '../../Badge/Badge';
import { AshenWinter, Black } from '../../Color/Color';
import { rgba } from 'polished';
import { TooltipOverlay } from '../../TooltipOverlay/TooltipOverlay';

interface Props {
  children: ReactNode;
  href: string;
  id: string | number;
  name: string;
  pronouns: string;
  badge: string;
  variation: 'A' | 'B' | 'C' | 'D';
}

// A: comment, badges below

export const Comment: SFC<Props> = ({
  children,
  id,
  name,
  pronouns,
  badge,
  variation,
}) => {
  return (
    <CommentWrapper id={`comment_${id}`}>
      <Avatar
        alt="name"
        src={`https://i.vimeocdn.com/portrait/${id}_75x75`}
        srcSet={`https://i.vimeocdn.com/portrait/${id}_150x150 2x`}
        style={{
          width: '3rem',
          marginRight: '1rem',
        }}
      />
      <div>
        <Meta>
          {variation !== 'D' ? (
            <Name variation={variation}>{name}</Name>
          ) : (
            <InlineTipHack>
              <TooltipOverlay
                tooltipText={pronouns}
                triggerOnClick={false}
              >
                <Name>{name}</Name>
              </TooltipOverlay>
            </InlineTipHack>
          )}

          {variation === 'A' && <Time>2 hours ago</Time>}
          {variation === 'C' && <Pronouns>({pronouns})</Pronouns>}

          {variation === 'A' && <br />}

          {variation !== 'C' && variation !== 'D' && (
            <Badge href="#" format="live-archive" size="sm">
              {pronouns}
            </Badge>
          )}

          {badge && (
            <Badge href="#" format={badge as Format} size="sm">
              {badge}
            </Badge>
          )}

          {variation !== 'A' && <Time>2 hours ago</Time>}
        </Meta>
        <CommentText variation={variation}>{children}</CommentText>
      </div>
      <ReplyButton>Reply</ReplyButton>
    </CommentWrapper>
  );
};

const Time = styled(HeaderAltSm)`
  display: inline-block;
`;

const CommentTextMargin = ({ variation = '' }) => {
  switch (variation) {
    case 'A':
      return css`
        margin-top: 1rem;
      `;
    case 'B':
    case 'C':
      return css`
        margin-top: 0.25rem;
      `;
    default:
      return '';
  }
};

const CommentText = styled(ParagraphAltMd)<{ variation?: string }>`
  width: 100%;
  display: block;
  ${CommentTextMargin};
`;

const Meta = styled.div``;

const NameMargin = ({ variation = '' }) => {
  switch (variation) {
    case 'C':
      return css`
        margin-right: 0.25rem;
      `;
    default:
      return css`
        margin-right: 0.5rem;
      `;
  }
};

const Name = styled(Header5)<{ variation?: string }>`
  display: inline-block;
  ${NameMargin}
`;

const CommentWrapper = styled.article`
  display: flex;
  position: relative;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid ${rgba(Black, 0.1)};
  margin-bottom: 1.5rem;
`;

const Badge = styled(B)`
  margin-right: 0.5rem;
`;

const ReplyButton = styled(Header6)`
  position: absolute;
  right: 0;
  bottom: 0.5rem;
  color: ${AshenWinter};
`;

const Pronouns = styled(Header5)`
  margin-right: 0.5rem;
  display: inline-block;
`;

const InlineTipHack = styled.span`
  > div {
    display: inline-block;
  }
`;

type Format =
  | 'alum'
  | 'beta'
  | 'business'
  | 'curation'
  | 'default'
  | 'explicit'
  | 'featured'
  | 'hd'
  | 'info'
  | 'live'
  | 'live-archive'
  | 'new'
  | 'partner'
  | 'plus'
  | 'producer'
  | 'pro'
  | 'spatial'
  | 'sponsor'
  | 'staff'
  | 'support'
  | 'unrated'
  | 'upgrade'
  | 'vod';
