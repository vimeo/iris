import React, { SFC, ReactNode } from 'react';
import styled from 'styled-components';
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

interface Props {
  children: ReactNode;
  href: string;
  id: string | number;
  name: string;
  pronouns: string;
  badge: string;
}

export const CommentC: SFC<Props> = ({
  children,
  id,
  name,
  pronouns,
  badge,
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
          <Name>{name}</Name>
          <Pronouns>({pronouns})</Pronouns>
          {badge && (
            <Badge href="#" format={badge} size="sm">
              {badge}
            </Badge>
          )}
          <Time>2 hours ago</Time>
        </Meta>
        <CommentText style={{ width: '100%', display: 'block' }}>
          {children}
        </CommentText>
      </div>
      <ReplyButton>Reply</ReplyButton>
    </CommentWrapper>
  );
};

const Time = styled(HeaderAltSm)`
  display: inline-block;
`;

const CommentText = styled(ParagraphAltMd)`
  width: 100%;
  display: block;
  margin-top: 0.25rem;
`;

const Meta = styled.div``;

const Pronouns = styled(Header5)`
  margin-right: 0.5rem;
  display: inline-block;
`;

const Name = styled(Header5)`
  margin-right: 0.25rem;
  display: inline-block;
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
