import React, { useState } from 'react';

import { Tip } from './Tip';

import { Button } from '../../../components';
import { Header } from '../../../typography';
import { Layout } from '../../../storybook';
import { Eye, EyeOff, Gear } from '../../../icons';
import { Pop, PopOver } from '../../../layout';

export default {
  title: 'components/Tip/examples',
  component: Tip,
};

export function TipPopOverCombo() {
  const [active, activeSet] = useState(false);

  return (
    <Layout.StoryVertical center>
      <div style={{ textAlign: 'center' }}>
        <Tip content="I am Tip" attach="top">
          <span style={{ display: 'inline-block' }}>
            <PopOver content={PopList} active={active}>
              <Button
                onClick={() => activeSet((active) => !active)}
                icon={active ? <EyeOff /> : <Eye />}
              />
            </PopOver>
          </span>
        </Tip>
      </div>
    </Layout.StoryVertical>
  );
}
TipPopOverCombo.storyName = 'Tip-PopOver combo';

const PopList = (
  <>
    <Pop.List>
      <Pop.Header>Header</Pop.Header>
      <Pop.Item href="#">Item 1</Pop.Item>
      <Pop.Item href="#" selected>
        Item 2 (Selected)
      </Pop.Item>
    </Pop.List>
    <Pop.Divider />
    <Pop.List>
      <Pop.Item href="#">
        <Gear />
        Item 3
      </Pop.Item>
    </Pop.List>
  </>
);

export function Fancy() {
  preload('http://placekitten.com/320/120');

  const content = (
    <div style={{ width: '20rem' }}>
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

export function TextWrapping() {
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
TextWrapping.storyName = 'text wrapping';
