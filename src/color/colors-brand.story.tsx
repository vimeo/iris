import React from 'react';

import { Story } from '../storybook';
import { Header } from '../typography';

import { ColorPalette, ColorStory } from './storyComponents';

import { purple } from './colors';

export default { title: 'Color/accent' };

export function All() {
  return (
    <Story title="Colors" width="100%" flex>
      <Header size="3">purple</Header>
      <ColorPalette color={purple} />
    </Story>
  );
}
All.storyName = 'all';

export function Purple() {
  return ColorStory('purple', purple);
}
Purple.storyName = 'purple';
