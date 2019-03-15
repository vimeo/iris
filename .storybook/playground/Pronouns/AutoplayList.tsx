import React from 'react';
import {
  Header3,
  InputToggle,
  HeaderAltSm,
  Header4,
  Header5,
  Header6,
  Badge,
} from '../../../src';
import styled from 'styled-components';
import {
  AstroGranite,
  RegentGray,
  VimeoBlue,
  VimeoBlueLightened,
} from '../../../src/Color/Color';

export const AutoplayList = ({ videos, variation }) => {
  return (
    <>
      <Header3>More from Vimeo Staff Picks</Header3>
      <Header>
        <InputToggle id="1" label="" value="true" checked />
        <HeaderAltSm>Autoplay next video</HeaderAltSm>
      </Header>
      <div>
        {videos.map(video => (
          <Video>
            <img src={`https://i.vimeocdn.com/video/${video.src}`} />
            <div style={{ paddingTop: '0.9rem' }}>
              <Title>{video.title}</Title>
              <Author>
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

const Header = styled.div`
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

const Title = styled(Header5)`
  max-width: 13rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Author = styled(Header6)`
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
