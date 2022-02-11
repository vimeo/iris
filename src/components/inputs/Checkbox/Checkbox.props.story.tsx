import React, { useState } from 'react';

import { Checkbox } from './Checkbox';

import { Button } from '../../Button/Button';
import { Layout } from '../../../storybook';
import { Header } from '../../../typography';

export default {
  title: 'components/Checkbox/props',
};

export function Disabled() {
  return (
    <Layout.StoryVertical>
      <Checkbox
        label="Disabled unchecked Checkbox"
        name="demoCheckboxDisabled"
        id="CheckboxDisabled"
        value="disabled"
        disabled
      />
      <Checkbox
        label="Disabled checked Checkbox"
        name="demoCheckboxDisabled"
        id="CheckboxDisabled"
        value="disabled"
        checked
        disabled
      />
    </Layout.StoryVertical>
  );
}

export function Status() {
  return (
    <Layout.StoryVertical>
      <Checkbox
        label="Checkbox with status set to negative"
        name="demoCheckbox1"
        status="negative"
        id="Checkbox1"
        value="1"
        required
      />
      <Checkbox
        label="Checkbox with status set to positive"
        name="demoCheckbox2"
        status="positive"
        id="Checkbox2"
        value="2"
        required
      />
    </Layout.StoryVertical>
  );
}

export function Checked() {
  const [checked, setChecked] = useState(true);

  return (
    <Layout.StoryVertical>
      <Header size="5">Controlled Checkbox</Header>
      <Button onClick={() => setChecked(!checked)}>
        Checkbox is {checked.toString()}
      </Button>
      <Checkbox
        label="Checkbox 1 (Medium)"
        name="demoCheckbox1"
        id="Checkbox1"
        value="1"
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
    </Layout.StoryVertical>
  );
}
