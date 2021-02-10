import React, { Fragment } from 'react';

import { Tip } from './Tip';

import { Button } from '../../../components';
import { Header, Paragraph } from '../../../typography';
import { Layout } from '../../../storybook';
import { ANCHOR_POINTS } from '../../../utils';

export default { title: 'Components/Info/Tip' };

export function Common() {
  return (
    <Layout.StoryVertical center>
      {ANCHOR_POINTS.map((attach, i) => (
        <Fragment key={i}>
          <Tip content="I am Tip" attach={attach}>
            <Button>Tip {attach}</Button>
          </Tip>
          <br />
        </Fragment>
      ))}
    </Layout.StoryVertical>
  );
}

export function Wrap() {
  return (
    <Layout.StoryVertical center>
      <Tip
        content="Tips with long strings passed to the `content` prop will automatically wrap."
        attach="top"
      >
        <Button>Tip top</Button>
      </Tip>
    </Layout.StoryVertical>
  );
}

export function Variant() {
  const text =
    'Embed your videos anywhere on the web. You can also embed GIFs of your videos in your emails to increase engagement.';

  return (
    <Layout.StoryVertical center>
      <Tip
        attach="top"
        variant="simple"
        trigger="click"
        content={text}
      >
        <Button style={{ marginTop: '10rem' }}>Simple Top</Button>
      </Tip>
      {(['top', 'right', 'bottom', 'left'] as const).map((attach) => (
        <Tip
          attach={attach}
          variant="speech-bubble"
          trigger="click"
          content={
            <>
              <Header size="6">
                Where can you embed your videos?
              </Header>
              <Paragraph size="2" style={{ margin: 0 }}>
                {text}
              </Paragraph>
            </>
          }
        >
          <Button style={{ marginTop: '5rem' }}>
            Speech Bubble {attach}
          </Button>
        </Tip>
      ))}
    </Layout.StoryVertical>
  );
}

export function Pill() {
  return (
    <Layout.StoryVertical center>
      {ANCHOR_POINTS.map((attach, i) => (
        <Fragment key={i}>
          <Tip content="I am Tip" attach={attach} pill>
            <Button>Tip {attach}</Button>
          </Tip>
          <br />
        </Fragment>
      ))}
    </Layout.StoryVertical>
  );
}

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
