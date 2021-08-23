import React from 'react';

import { Checkbox } from './Checkbox';
import { CheckboxSet } from './CheckboxSet';

import { Layout } from '../../storybook';
import { Header } from '../../typography';

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
  return (
    <Layout.StoryVertical>
      <Header size="5">
        The `toggled` prop will hide the children unless the parent is
        selected.
      </Header>
      <CheckboxSet label="toggled" toggled>
        <Checkbox label="toggled" />
        <Checkbox label="toggled" />
      </CheckboxSet>
    </Layout.StoryVertical>
  );
}
