import React, { useRef } from 'react';

import { Checkbox } from './Checkbox';
import { CheckboxSet } from './CheckboxSet';

import { Layout } from '../../../storybook';
import { Header } from '../../../typography';

export default {
  title: 'components/CheckboxSet/props',
  lostpixel: {
    disable: true,
  },
};

export function Coupled({ args }) {
  return (
    <Layout.StoryVertical>
      <Header size="5">
        The `coupled` prop will override the children when the parent
        value changes.
      </Header>
      <CheckboxSet label="coupled" coupled {...args}>
        <Checkbox label="coupled" />
        <Checkbox label="coupled" />
      </CheckboxSet>
    </Layout.StoryVertical>
  );
}
Coupled.storyName = 'coupled';

export function Toggled({ args }) {
  const checkboxRef = useRef(null);

  return (
    <Layout.StoryVertical>
      <Header size="5">
        The `toggled` prop will hide the children unless the parent is
        selected.
      </Header>
      <CheckboxSet
        {...args}
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
Toggled.storyName = 'toggled';

export function DefaultChecked({ args }) {
  return (
    <Layout.StoryVertical>
      <Header size="3">Toggled</Header>
      <Header
        size="5"
        style={{
          paddingLeft: '1.5rem',
          display: 'block',
          borderLeft: '2px solid rgba(150,150,150,0.334)',
        }}
      >
        `toggled` variant CheckboxSets will show/hide the children
        when the parent Checkbox is toggled.
        <br />
        <br />
        The value of the parent does not impact the value of the
        children.
        <br />
        <br />
        The value of children determines if the parent is `checked` or
        `indeterminate`.
      </Header>

      <CheckboxSet
        label="defaultChecked"
        toggled
        defaultChecked
        {...args}
      >
        <Checkbox label="." />
        <Checkbox label="." />
        <Checkbox
          label="defaultChecked disabled"
          defaultChecked
          disabled
        />
      </CheckboxSet>

      <CheckboxSet label="defaultChecked" toggled defaultChecked>
        <Checkbox label="defaultChecked" defaultChecked />
        <Checkbox label="." />
        <Checkbox label="disabled" disabled />
      </CheckboxSet>

      <CheckboxSet label="defaultChecked" toggled defaultChecked>
        <Checkbox label="defaultChecked" defaultChecked />
        <Checkbox label="defaultChecked" defaultChecked />
        <Checkbox label="disabled" disabled />
      </CheckboxSet>

      <CheckboxSet label="." toggled>
        <Checkbox label="defaultChecked" defaultChecked />
        <Checkbox label="defaultChecked" defaultChecked />
        <Checkbox
          label="defaultChecked disabled"
          defaultChecked
          disabled
        />
      </CheckboxSet>

      <br />
      <br />
      <br />

      <Header size="3">Coupled</Header>
      <Header
        size="5"
        style={{
          paddingLeft: '1.5rem',
          display: 'block',
          borderLeft: '2px solid rgba(150,150,150,0.334)',
        }}
      >
        `coupled` variant CheckboxSets will toggle the value of the
        children when the parent Checkbox is toggled.
        <br />
        <br />
        The value of the parent always impacts the value of the
        children.
        <br />
        <br />
        The value of children determines if the parent is `unchecked`,
        `checked`, or `indeterminate`.
      </Header>

      <CheckboxSet label="defaultChecked" coupled defaultChecked>
        <Checkbox label="." />
        <Checkbox label="." />
        <Checkbox label="disabled" disabled />
      </CheckboxSet>

      <CheckboxSet label="." coupled>
        <Checkbox label="defaultChecked" defaultChecked />
        <Checkbox label="." />
        <Checkbox label="disabled" disabled />
      </CheckboxSet>

      <CheckboxSet label="." coupled>
        <Checkbox label="defaultChecked" defaultChecked />
        <Checkbox label="defaultChecked" defaultChecked />
        <Checkbox
          label="defaultChecked disabled"
          defaultChecked
          disabled
        />
      </CheckboxSet>

      <CheckboxSet label="." coupled>
        <Checkbox label="." />
        <Checkbox label="." />
        <Checkbox label="disabled" disabled />
      </CheckboxSet>
    </Layout.StoryVertical>
  );
}
DefaultChecked.storyName = 'defaultChecked';

export function Disabled({ args }) {
  return (
    <CheckboxSet label="disabled" disabled {...args}>
      <Checkbox label="disabled" />
      <Checkbox label="disabled" />
    </CheckboxSet>
  );
}
Disabled.storyName = 'disabled';
