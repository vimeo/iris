import React, { cloneElement } from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { Grid } from '../Grid/Grid';
import { Header } from '../../typography';

export function VideoList() {
  const children = repeat(12, (key) => (
    <div>
      <VideoWrapper>
        <IFrame
          src="https://player.vimeo.com/video/32876686?byline=0&portrait=0"
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: '0',
            bottom: '0',
            right: '0',
            left: '0',
          }}
        />
      </VideoWrapper>
      <VideoDescription>
        <Header size="4">Video {key + 1}</Header>
        <Header size="6">Description of video</Header>
      </VideoDescription>
    </div>
  ));

  return <Grid columns={{ minWidth: 250 }}>{children}</Grid>;
}

function repeat(length, element) {
  return Array.from({ length }).map((_, key) =>
    cloneElement(element(key), { key })
  );
}

const VideoWrapper = styled.div`
  width: 100%;
  position: relative;

  &::after {
    content: ' ';
    padding-bottom: 56.25%;
    display: block;
  }
`;

const VideoDescription = styled.div`
  padding: 10px;
`;

const IFrame = styled.iframe`
  @media screen and (max-width: ${em(768)}) {
    transform: scale(1);
  }
`;
