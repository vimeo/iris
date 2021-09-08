import React, { Fragment, useState } from 'react';

import { Tip } from './Tip';

import { Button } from '../../components';
import { Header, Paragraph } from '../../typography';
import { Layout } from '../../storybook';
import { ANCHOR_POINTS } from '../../utils';

export default { title: 'components/Tip/props', component: Tip };

export function Active() {
  const [active, activeSet] = useState(false);

  return (
    <Layout.StoryVertical center>
      <div style={{ textAlign: 'center' }}>
        <Tip content="I am Tip" attach="top" active={active}>
          <Button
            onClick={() => activeSet((active) => !active)}
            fluid
          >
            Toggle Tip
          </Button>
        </Tip>
      </div>
    </Layout.StoryVertical>
  );
}
Active.storyName = 'active';

export function Attach() {
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
Attach.storyName = 'attach';

export function Trigger() {
  return (
    <Layout.StoryVertical center>
      <div>
        <Tip content="I am Tip" attach="top" trigger="hover">
          <Button fluid style={{ marginBottom: '2rem' }}>
            Hover Tip
          </Button>
        </Tip>
        <Tip content="I am Tip" attach="top" trigger="click">
          <Button fluid>Click Tip</Button>
        </Tip>
      </div>
    </Layout.StoryVertical>
  );
}
Trigger.storyName = 'trigger';

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
Variant.storyName = 'variant';
