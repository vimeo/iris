import React from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../storybook';
import { Header4 } from '../legacy';

const componentName = 'Iris Labs 🧬';

storiesOf(`Labs|About`, module).add('What is Iris Labs?', () => (
  <Story title={componentName}>
    <Header4>
      Iris Labs is a place for people to experiment with new ideas for
      Iris. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Odio, unde?
    </Header4>
  </Story>
));
