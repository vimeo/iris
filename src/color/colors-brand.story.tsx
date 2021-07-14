import React from 'react';

import { Story } from '../storybook';
import { Header } from '../typography';

import { ColorPalette, ColorStory } from './storyComponents';

import { amethyst } from './colors';

export default { title: 'Color/accent' };

export function All() {
  return (
    <Story title="Colors" width="100%" flex>
      <Header size="3">amethyst</Header>
      <ColorPalette color={amethyst} />
    </Story>
  );
}
All.storyName = 'all';

export function Amethyst() {
  return ColorStory('amethyst', amethyst);
}
Amethyst.storyName = 'amethyst';
