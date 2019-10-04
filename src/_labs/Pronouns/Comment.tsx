import React, { SFC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { Avatar, Badge as B, TipOverlay } from '../../components';
import {
  Header5,
  Header6,
  HeaderAltSm,
  ParagraphAltMd,
} from '../../legacy';
import {
  AshenWinter,
  Black,
  White,
  Plaster,
  RavenImperial,
  IronHeart,
  Porcelain,
} from '../../color';

interface Props {
  children: ReactNode;
  href: string;
  id: string | number;
  name: string;
  pronouns: string;
  badge: string;
  variation: 'B' | 'A' | 'C' | 'D' | 'E' | 'F' | 'G';
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
      <div
        style={{
          alignSelf: 'start',
          width:
            (variation === 'E' ||
              variation === 'F' ||
              variation === 'G') &&
            '5.5rem',
          minWidth:
            (variation === 'E' ||
              variation === 'F' ||
              variation === 'G') &&
            '5.5rem',
          maxWidth:
            (variation === 'E' ||
              variation === 'F' ||
              variation === 'G') &&
            '5.5rem',
        }}
      >
        <Avatar
          alt="name"
          src={`https://i.vimeocdn.com/portrait/${id}_75x75`}
          srcSet={`https://i.vimeocdn.com/portrait/${id}_150x150 2x`}
          style={{
            width: '3rem',
            marginRight: '1rem',
          }}
        />
        {(variation === 'E' || variation === 'F') && (
          <>
            <div style={{ marginTop: '0.25rem' }} />
            <Badge href="#" format="live-archive" size="sm">
              {pronouns}
            </Badge>
          </>
        )}
        {badge && variation === 'F' && (
          <>
            <div style={{ marginTop: '0.25rem' }} />
            <Badge href="#" format={badge as Format} size="sm">
              {badge}
            </Badge>
          </>
        )}
        {variation === 'G' && <PronounsSm>{pronouns}</PronounsSm>}
      </div>
      <div>
        <Meta>
          {variation !== 'D' ? (
            <Name variation={variation}>{name}</Name>
          ) : (
            <InlineTipHack>
              <TipOverlay
                tooltipText={pronouns}
                triggerOnClick={false}
              >
                <Name>{name}</Name>
              </TipOverlay>
            </InlineTipHack>
          )}

          {variation === 'B' && <Time>2 hours ago</Time>}
          {variation === 'C' && <Pronouns>({pronouns})</Pronouns>}

          {variation === 'B' && <br />}

          {variation !== 'C' &&
            variation !== 'D' &&
            variation !== 'E' &&
            variation !== 'F' &&
            variation !== 'G' && (
              <Badge href="#" format="live-archive" size="sm">
                {pronouns}
              </Badge>
            )}

          {badge && variation !== 'F' && (
            <Badge href="#" format={badge as Format} size="sm">
              {badge}
            </Badge>
          )}

          {variation !== 'B' && <Time>2 hours ago</Time>}
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
    case 'B':
      return css`
        margin-top: 1rem;
      `;
    case 'A':
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
  color: ${({ theme }) =>
    theme.name === 'dark' ? Plaster : RavenImperial};
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
  color: ${({ theme }) => (theme.name === 'dark' ? White : Black)};
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
  display: inline-block;
`;

const ReplyButton = styled(Header6)`
  position: absolute;
  right: 0;
  bottom: 0.5rem;
  color: ${({ theme }) =>
    theme.name === 'dark' ? Porcelain : AshenWinter};
`;

const PronounsSm = styled(Header6)`
  margin-top: 0.5rem;
  display: inline-block;
  color: ${({ theme }) => (theme.name === 'dark' ? White : Black)};
  transform: scale(0.85) translateX(-3px);
`;

const Pronouns = styled(Header5)`
  margin-right: 0.5rem;
  display: inline-block;
  color: ${({ theme }) => (theme.name === 'dark' ? White : Black)};
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
