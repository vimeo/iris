import React, { useRef } from 'react';

import { Checkbox } from './Checkbox';
import { CheckboxSet } from './CheckboxSet';

import { Layout } from '../../../storybook';
import { Header } from '../../../typography';

export default {
  title: 'components/CheckboxSet/props',
};

export function Coupled() {
  return (
    <Layout.StoryVertical>
      <Header size="5">
        The `coupled` prop will override the children when the parent
        value changes.
      </Header>
      <CheckboxSet label="coupled" coupled>
        <Checkbox label="coupled" />
        <Checkbox label="coupled" />
      </CheckboxSet>
    </Layout.StoryVertical>
  );
}

export function Toggled() {
  const checkboxRef = useRef(null);

  return (
    <Layout.StoryVertical>
      <Header size="5">
        The `toggled` prop will hide the children unless the parent is
        selected.
      </Header>
      <CheckboxSet
        ref={checkboxRef}
        label="toggled"
        toggled
        onChange={(e) => {
          console.log(
            'Toggled parent',
            e.target.checked,
            checkboxRef
          );
        }}
      >
        <Checkbox
          label="toggled"
          onChange={() => {
            console.log('Toggled child');
          }}
        />
        <Checkbox
          label="toggled"
          onChange={() => {
            console.log('Toggled child');
          }}
        />
      </CheckboxSet>
    </Layout.StoryVertical>
  );
}

export function Disabled() {
  return (
    <CheckboxSet label="disabled" disabled>
      <Checkbox label="disabled" />
      <Checkbox label="disabled" />
    </CheckboxSet>
  );
}
