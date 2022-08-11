import React, { useState } from 'react';

import { Toggle } from './Toggle';

import { Button } from '../../Button/Button';
import { Header } from '../../../typography';
import { Layout } from '../../../storybook';
import { Eye, EyeOff } from '../../../icons';

export default {
  title: 'components/Toggle/props',
};

export function Size({ args }) {
  return (
    <Layout.StoryVertical>
      {(['sm', 'md', 'lg', 'xl'] as const).map((size, i) => (
        <Toggle
          {...args}
          key={i}
          size={size}
          label="Toggle"
          name={`demoToggle${i}`}
          id={`Toggle${i}`}
          value={i}
        />
      ))}
    </Layout.StoryVertical>
  );
}

export function Label({ args }) {
  return (
    <Layout.StoryVertical>
      <Toggle
        {...args}
        label="Toggle 1"
        name="demoToggle1"
        id="Toggle1"
        value="1"
      />
      <Toggle
        label="Toggle 2 has a very long label. Sometimes we need to tell people that they must agree to terms and conditions before they submit a form."
        name="demoToggle2"
        id="Toggle2"
        value="2"
      />
      <Toggle
        label={false}
        name="noLabelToggle"
        id="noLabel"
        value="noLabel"
      />
    </Layout.StoryVertical>
  );
}

export function Error({ args }) {
  return (
    <Layout.StoryVertical>
      <Toggle
        {...args}
        label="Errored Field"
        name="errorToggle"
        status="negative"
        id="Toggle4"
        value="error"
        required
      />
    </Layout.StoryVertical>
  );
}

export function Disabled({ args }) {
  return (
    <Layout.StoryVertical>
      <Toggle
        {...args}
        label="DisabledField"
        name="demoToggleDisabled"
        id="ToggleDisabled"
        value="disabled"
        disabled
      />
    </Layout.StoryVertical>
  );
}

export function Checked({ args }) {
  const [checked, setChecked] = useState(true);
  return (
    <Layout.StoryVertical>
      <Header size="5">This toggle is controlled by a button.</Header>
      <Button onClick={() => setChecked((checked) => !checked)}>
        Toggle is {checked.toString()}
      </Button>
      <Toggle
        {...args}
        label="Toggle"
        name="demoToggle1"
        id="Toggle1"
        value="1"
        checked={checked}
      />
    </Layout.StoryVertical>
  );
}

export function Icon({ args }) {
  const [checked, setChecked] = useState(true);
  return (
    <Layout.StoryVertical>
      <Toggle
        {...args}
        onChange={() => setChecked((checked) => !checked)}
        label="Toggle with Icon"
        name="demoToggle1"
        icon={checked ? <Eye /> : <EyeOff />}
        id="Toggle1"
        value="1"
        size="xl"
        checked={checked}
      />
    </Layout.StoryVertical>
  );
}
