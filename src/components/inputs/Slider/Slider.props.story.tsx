import React from 'react';

import { Slider } from './Slider';

import { Layout } from '../../../storybook';

export default {
  title: 'components/Slider/props',
  component: Slider,
};

export function Range({ args }) {
  return (
    <Layout.StoryPadded>
      <Slider
        {...args}
        range
        stickyLabel
        initialValues={[20, 50]}
        formatter={(value) => value + 'm'}
        onChange={(n) => console.log(n?.target?.value)}
        css={`
          width: 50%;
        `}
      />
    </Layout.StoryPadded>
  );
}

export function MinMax({ args }) {
  return (
    <Layout.StoryPadded>
      <Slider
        {...args}
        range
        stickyLabel
        min={10}
        max={90}
        initialValues={[10, 90]}
        onChange={(n) => console.log(n?.target?.value)}
        css={`
          width: 50%;
        `}
      />
    </Layout.StoryPadded>
  );
}

export function EditableLabel({ args }) {
  return (
    <Layout.StoryPadded>
      <Slider
        {...args}
        editableLabel
        onChange={(n) => console.log(n?.target?.value)}
        unitSignType="%"
        css={`
          width: 50%;
        `}
      />
      <Slider
        {...args}
        editableLabel
        stickyLabel
        range
        onChange={(n) => console.log(n?.target?.value)}
        css={`
          width: 50%;
        `}
      />
    </Layout.StoryPadded>
  );
}
EditableLabel.storyName = 'EditableLabel';

export function StickyLabel({ args }) {
  return (
    <Layout.StoryPadded>
      <Slider
        {...args}
        stickyLabel
        range
        onChange={(n) => console.log(n?.target?.value)}
        css={`
          width: 50%;
        `}
      />
    </Layout.StoryPadded>
  );
}
StickyLabel.storyName = 'StickyLabel';
