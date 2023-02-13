import React, { useState } from 'react';

import { Slider } from './Slider';

import { Layout } from '../../../storybook';
import { PopOver } from '../../PopOver/PopOver';
import { Button } from '../../Button/Button';

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

export function InPopover({ ...args }) {
  const [active, setActive] = useState(false);
  return (
    <Layout.StoryPadded>
      <Slider editableLabel />
      <Slider {...args} editableLabel range />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PopOver
          active={active}
          attach="bottom"
          content={PopOverContent}
        >
          <Button onClick={() => setActive(!active)}>
            Open PopOver
          </Button>
        </PopOver>
      </div>
    </Layout.StoryPadded>
  );
}

const PopOverContent = (
  <div
    style={{
      width: '500px',
      height: '400px',
      padding: '3rem',
    }}
  >
    <Slider editableLabel range />
  </div>
);
