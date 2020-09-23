import React from 'react';
import { useState } from '@storybook/addons';

import { Toggle } from './Toggle';
import { Button } from '../../buttons/Button/Button';

import { Layout } from '../../../storybook';
import { Eye, EyeOff } from '../../../icons';

export default { title: 'Components/Inputs/Toggle' };

export function Common() {
  return (
    <Layout.StoryVertical>
      <Toggle
        label="Toggle (Medium)"
        name="demoToggle"
        id="Toggle"
        value="1"
      />
    </Layout.StoryVertical>
  );
}

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
        label="Toggle 1 has a very long label. Sometimes we need to tell people that they must agree to terms and conditions before they submit a form."
        name="demoToggle1"
        id="Toggle1"
        value="1"
      />
      <Toggle
        label="Errored Field"
        name="errorToggle"
        status="negative"
        id="Toggle4"
        value="error"
        required
      />
      <Toggle
        label="DisabledField"
        name="demoToggleDisabled"
        id="ToggleDisabled"
        value="disabled"
        disabled
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

export function Controlled() {
  const [checked, setChecked] = useState(true);
  return (
    <Layout.StoryVertical>
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
        onClick={() => setChecked((checked) => !checked)}
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
