import React from 'react';
import { useState } from '@storybook/addons';

import { Toggle } from './Toggle';

import { Button } from '../../buttons/Button/Button';
import { Header } from '../../../typography';
import { Layout } from '../../../storybook';
import { Eye, EyeOff } from '../../../icons';

export default {
  title: 'Components/Inputs/Toggle/Props',
};

export function Size() {
  return (
    <Layout.StoryVertical>
      {['sm', 'md', 'lg', 'xl'].map((size, i) => (
        <Toggle
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

export function Label() {
  return (
    <Layout.StoryVertical>
      <Toggle
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

export function Error() {
  return (
    <Layout.StoryVertical>
      <Toggle
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

export function Disabled() {
  return (
    <Layout.StoryVertical>
      <Toggle
        label="DisabledField"
        name="demoToggleDisabled"
        id="ToggleDisabled"
        value="disabled"
        disabled
      />
    </Layout.StoryVertical>
  );
}

export function Checked() {
  const [checked, setChecked] = useState(true);
  return (
    <Layout.StoryVertical>
      <Header size="5">This toggle is controlled by a button.</Header>
      <Button onClick={() => setChecked((checked) => !checked)}>
        Toggle is {checked.toString()}
      </Button>
      <Toggle
        label="Toggle"
        name="demoToggle1"
        id="Toggle1"
        value="1"
        checked={checked}
      />
    </Layout.StoryVertical>
  );
}

export function Icon() {
  const [checked, setChecked] = useState(true);
  return (
    <Layout.StoryVertical>
      <Toggle
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
