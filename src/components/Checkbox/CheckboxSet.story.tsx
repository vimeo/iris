import React from 'react';
import { Story } from '@storybook/react';

import { Checkbox, Props } from './Checkbox';
import { CheckboxSet } from './CheckboxSet';

import { Header } from '../../../typography';
import { Layout } from '../../../storybook';

export default {
  title: 'Components/Inputs/CheckboxSet',
  component: CheckboxSet,
  argTypes: {
    status: { table: { disable: true } }, // not relevant
    messages: { table: { disable: true } }, // not relevant
    src: { table: { disable: true } }, // not relevant
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Layout.StoryVertical>
      <Header size="5">
        The default {'<CheckboxSet />'} will set children deselect
        children, but it will not select them.
      </Header>
      <CheckboxSet label="default" {...args}>
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
      </CheckboxSet>
    </Layout.StoryVertical>
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'CheckboxSet';
Controls.args = {
  label: 'Select / Deselect',
  value: 'set1',
};
