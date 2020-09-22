import React from 'react';
import { Story } from '../storybook';
import { Header } from '../typography';

export default { title: 'Labs|About/' };

const componentName = 'Iris Labs 🧬';

export function WhatIsIrisLabs() {
  return (
    <Story title={componentName}>
      <Header size="4">
        Iris Labs is a place for people to experiment with new ideas
        for Iris. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Odio, unde?
      </Header>
    </Story>
  );
}
