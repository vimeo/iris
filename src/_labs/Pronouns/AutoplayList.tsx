import React from 'react';
import styled from 'styled-components';

import { InputToggle, Badge } from '../../components';
import { Header } from '../../typography';
import {
  AstroGranite,
  RegentGray,
  VimeoBlue,
  VimeoBlueLightened,
} from '../../color';

export const AutoplayList = ({ videos, variation }) => {
  return (
    <>
      <Header size="3">More from Vimeo Staff Picks</Header>
      <HeaderWrap>
        <InputToggle id="1" label="" value="true" defaultChecked />
        <Header size="6">Autoplay next video</Header>
      </HeaderWrap>
      <div>
        {videos.map((video, i) => (
          <Video key={i}>
            <img src={`https://i.vimeocdn.com/video/${video.src}`} />
            <div style={{ paddingTop: '0.9rem' }}>
              <Title size="5">{video.title}</Title>
              <Author size="6">
                {video.author}{' '}
                {variation === 'A' && video.pronouns && (
                  <>({video.pronouns})</>
                )}
                {variation === 'B' && video.pronouns && (
                  <div style={{ transform: 'translateY(-1px)' }}>
                    <Badge href="#" format="live-archive" size="sm">
                      {video.pronouns}
                    </Badge>
                  </div>
                )}
              </Author>
            </div>
          </Video>
        ))}
      </div>
    </>
  );
};

const HeaderWrap = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

const Video = styled.div`
  display: flex;
  margin: 1rem 0;

  &:nth-child(1) {
    img {
      border: 0.3rem solid ${VimeoBlueLightened};
    }
  }

  img {
    width: 8rem;
    align-self: center;
    margin-right: 1rem;
  }
`;

const Title = styled(Header)`
  max-width: 13rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Author = styled(Header)`
  display: flex;
  color: ${RegentGray};
  max-width: 13rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  > * {
    align-self: end;
    margin-left: 0.5rem;
  }
`;
