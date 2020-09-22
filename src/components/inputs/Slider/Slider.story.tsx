import React from 'react';

import { Slider } from './Slider';

import { Layout } from '../../../storybook';

export default { title: 'Components|Inputs/Slider' };

export function Basic() {
  return (
    <Layout.StoryPadded>
      <Slider onChange={n => console.log(n?.target?.value)} />
    </Layout.StoryPadded>
  );
}

export function Range() {
  return (
    <Layout.StoryPadded>
      <Slider
        range
        initialValues={[20, 50]}
        formatter={value => value + 'm'}
        onChange={n => console.log(n?.target?.value)}
      />
    </Layout.StoryPadded>
  );
}

export function MinMax() {
  return (
    <Layout.StoryPadded>
      <Slider
        range
        min={10}
        max={90}
        initialValues={[10, 90]}
        onChange={n => console.log(n?.target?.value)}
      />
    </Layout.StoryPadded>
  );
}

export function EditableLabel() {
  return (
    <Layout.StoryPadded>
      <Slider
        editableLabel
        range
        onChange={n => console.log(n?.target?.value)}
      />
    </Layout.StoryPadded>
  );
}
