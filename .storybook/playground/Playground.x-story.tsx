import React from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../ui/Story';
import { Header4 } from '../../src/Type';

const componentName = 'playground';

storiesOf(`Playground|About`, module).add(
  'What is the playground?',
  () => (
    <Story title={componentName}>
      <Header4>
        The playground is a place for people to experiment with new
        ideas for Iris. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Odio, unde?
      </Header4>
    </Story>
  ),
);
