import React from 'react';
import { storiesOf } from '@storybook/react';

import { Radio } from './Radio';

import { Story } from '../../../storybook';

storiesOf(`Components|inputs/Marks/`, module).add('Radio', () => (
  <Story title="Radio">
    <Radio label="Sample Radio 1" name="r" id="r1" value="r1" />
    <Radio label="Sample Radio 2" name="r" id="r2" value="r2" />
    <Radio
      label="Sample Radio 3"
      name="r"
      id="r3"
      value="r3"
      status="positive"
      messages={demoMessages}
    />
    <Radio
      label="Sample Radio 4"
      name="r"
      id="r4"
      value="r4"
      status="negative"
      messages={demoMessages}
    />
  </Story>
));

const demoMessages = {
  error: 'Something is wrong!',
  help: 'Hey! Listen!',
};
