import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Avatar, Badge } from '../../components';
import { ParagraphSm, Header5 } from '../../legacy';
import { IronHeart } from '../../color';

export const UserInfo = ({ badge = 'staff', id, name }) => {
  return (
    <Wrapper>
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
        <Name>
          <span>{name}</span>
          <Badge href="#" format="live-archive" size="sm">
            she/her
          </Badge>
          <Badge href="#" format={badge as Format} size="sm">
            {badge}
          </Badge>
        </Name>
        <Data>Joined: Jun 19, 2008</Data>
        <Data>User ID: 548723</Data>
        <Data>Membership: Plus</Data>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Name = styled(Header5)`
  margin: 0 0 0.2rem 0;
  display: flex;
  align-items: center;

  > * {
    margin-right: 0.5rem;
  }
`;

const Data = styled(ParagraphSm)`
  margin: 0 0 0.1rem 0;
  color: ${rgba(IronHeart, 0.667)};
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
