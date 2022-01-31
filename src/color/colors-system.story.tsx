import React from 'react';

import { Story } from '../storybook';
import { Header } from '../typography';

import { ColorPalette, ColorStory } from './storyComponents';

import {
  red,
  red2,
  yellow,
  green,
  green2,
  blue,
  slate,
  grayscale,
  white,
  black,
} from './colors';

export default { title: 'Color/system' };

export function All() {
  return (
    <Story title="Colors" width="100%" flex>
      <Header size="3">red</Header>
      <ColorPalette color={red} />

      <Header size="3">yellow</Header>
      <ColorPalette color={yellow} />

      <Header size="3">green</Header>
      <ColorPalette color={green} />

      <Header size="3">blue</Header>
      <ColorPalette color={blue} />

      <Header size="3">slate</Header>
      <ColorPalette color={slate} />

      <Header size="3">grayscale</Header>
      <ColorPalette color={grayscale} />
    </Story>
  );
}
All.storyName = 'all';

export function Red() {
  return (
    <>
      {ColorStory('red', red)}
      {ColorStory('red2', red2)}
    </>
  );
}
Red.storyName = 'red';

export function Yellow() {
  return ColorStory('yellow', yellow);
}
Yellow.storyName = 'yellow';

export function Green() {
  return (
    <>
      {ColorStory('green', green)}
      {ColorStory('green2', green2)}
    </>
  );
}
Green.storyName = 'green';

export function Blue() {
  return ColorStory('blue', blue);
}
Blue.storyName = 'blue';

export function Slate() {
  return ColorStory('slate', slate);
}
Slate.storyName = 'slate';

export function Grayscale() {
  return ColorStory('grayscale', grayscale);
}
Grayscale.storyName = 'grayscale';
