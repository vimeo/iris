import React from 'react';

import { Radio } from './Radio';
import { RadioSet } from './RadioSet';

import { Layout } from '../../../storybook';

export default { title: 'Components|Inputs/Marks/Radio' };

export function Common() {
  return (
    <Layout.StoryVertical>
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
    </Layout.StoryVertical>
  );
}

export function Set() {
  return (
    <Layout.StoryVertical>
      <RadioSet defaultValue="r2">
        <Radio label="Sample Radio 1" value="r1" />
        <Radio label="Sample Radio 2" value="r2" />
        <Radio label="Sample Radio 3" value="r3" />
      </RadioSet>
    </Layout.StoryVertical>
  );
}

const demoMessages = {
  error: 'Something is wrong!',
  help: 'Hey! Listen!',
};
