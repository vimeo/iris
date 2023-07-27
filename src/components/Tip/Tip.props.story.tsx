import React, { Fragment, useState } from 'react';

import { Tip } from './Tip';

import { Button, Toggle } from '../../components';
import { Header, Paragraph } from '../../typography';
import { Layout } from '../../storybook';
import { ANCHOR_POINTS } from '../../utils';

export default { title: 'components/Tip/props', component: Tip };

export function Active({ args }) {
  const [active, setActive] = useState(false);

  return (
    <Layout.StoryVertical center>
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Tip
          content="I am Tip"
          attach="top"
          active={active}
          {...args}
        >
          <Button fluid>Button with tooltip</Button>
        </Tip>
        <Toggle
          label={`Use the toggle to ${
            active ? 'deactivate' : 'activate'
          } tooltip`}
          onChange={() => setActive((active) => !active)}
        />
      </div>
    </Layout.StoryVertical>
  );
}
Active.storyName = 'active';

export function Disabled({ args }) {
  const [disabled, setDisabled] = useState(false);

  return (
    <Layout.StoryVertical center>
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Tip
          content="I am a tip"
          attach="top"
          disabled={disabled}
          {...args}
        >
          <Button fluid>Button with tooltip</Button>
        </Tip>
        <Toggle
          label={`Use the toggle to ${
            disabled ? 'enable' : 'disable'
          } tooltip`}
          onChange={() => setDisabled((disabled) => !disabled)}
        />
      </div>
    </Layout.StoryVertical>
  );
}
Disabled.storyName = 'disabled';

export function Attach({ args }) {
  return (
    <Layout.StoryVertical center>
      {ANCHOR_POINTS.map((attach, i) => (
        <Fragment key={i}>
          <Tip content="I am Tip" attach={attach} {...args}>
            <Button>Tip {attach}</Button>
          </Tip>
          <br />
        </Fragment>
      ))}
    </Layout.StoryVertical>
  );
}
Attach.storyName = 'attach';

export function Trigger({ args }) {
  return (
    <Layout.StoryVertical center>
      <div>
        <Tip
          content="I am Tip"
          attach="top"
          trigger="hover"
          {...args}
        >
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

export function Variant({ args }) {
  const text =
    'Embed your videos anywhere on the web. You can also embed GIFs of your videos in your emails to increase engagement.';

  return (
    <Layout.StoryVertical center>
      <Tip
        {...args}
        attach="top"
        variant="simple"
        trigger="click"
        content={text}
      >
        <Button style={{ marginTop: '10rem' }}>Simple Top</Button>
      </Tip>
      {(['top', 'right', 'bottom', 'left'] as const).map(
        (attach, key) => (
          <Tip
            key={key}
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
        )
      )}
    </Layout.StoryVertical>
  );
}
Variant.storyName = 'variant';

export function Pill({ args }) {
  return (
    <Layout.StoryVertical center>
      {ANCHOR_POINTS.map((attach, i) => (
        <Fragment key={i}>
          <Tip content="I am Tip" attach={attach} pill {...args}>
            <Button>Tip {attach}</Button>
          </Tip>
          <br />
        </Fragment>
      ))}
    </Layout.StoryVertical>
  );
}
Pill.storyName = 'pill';
