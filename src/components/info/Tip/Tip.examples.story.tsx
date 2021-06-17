import React from 'react';

import { Tip } from './Tip';

import { Button } from '../../../components';
import { Header } from '../../../typography';
import { Layout } from '../../../storybook';

export default {
  title: 'Components/Info/Tip/Examples',
  component: Tip,
};

export function Fancy() {
  preload('http://placekitten.com/320/120');

  const content = (
    <div style={{ width: '20rem', height: '14rem' }}>
      <img
        alt=""
        src="http://placekitten.com/320/160"
        style={{ width: '100%' }}
      />
      <Header size="4" style={{ margin: '1rem auto', color: '#FFF' }}>
        I am a very fancy tip!
      </Header>
    </div>
  );

  return (
    <Layout.StoryVertical center style={{ paddingTop: '6rem' }}>
      <Tip
        content={content}
        attach="bottom"
        trigger="click"
        style={{ maxWidth: '22rem' }}
      >
        <Button>Tip bottom (click)</Button>
      </Tip>
    </Layout.StoryVertical>
  );
}

function preload(src) {
  const image = new Image();
  image.src = src;
}