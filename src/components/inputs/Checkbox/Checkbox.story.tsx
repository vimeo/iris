import React from 'react';
import { StoryFn } from '@storybook/react';

import { Checkbox, Props } from './Checkbox';

import { Layout } from '../../../storybook';

import styled from 'styled-components';

export default {
  title: 'components/Checkbox',
  component: Checkbox,
  argTypes: {
    messages: { table: { disable: true } }, // not relevant
    src: { table: { disable: true } }, // not relevant
    checked: {
      table: { disable: false },
    },
    disabled: {
      table: { disable: false },
    },
    mirror: {
      table: { disable: false },
    },
    readOnly: {
      table: { disable: false },
    },
    indeterminate: {
      table: { disable: false },
    },
    required: {
      table: { disable: false },
    },
  },
};

const Template: StoryFn<Props> = (args) => {
  return (
    <Layout.StoryVertical>
      <Checkbox {...args} />
    </Layout.StoryVertical>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'Checkbox';
Controls.args = {
  label: 'Checkbox label',
  value: 'checkbox1',
};

export const StickerSheet = () => (
  <Layout.StoryVertical>
    <Checkbox label="default" value="default" />
    <Checkbox label="default disabled" value="default" disabled />
    <Checkbox label="default checked" value="default" checked />
    <Checkbox label="default checked disabled" checked disabled />
    <Checkbox
      label="default checked disabled indeterminate"
      checked
      disabled
      indeterminate
    />
    <Checkbox
      style={{ '--checked-color': 'black' } as React.CSSProperties}
      label="--checked-color:black"
    />
    <Checkbox
      style={{ '--checked-color': 'black' } as React.CSSProperties}
      label="--checked-color:black disabled"
      disabled
    />
    <Checkbox
      style={{ '--checked-color': 'black' } as React.CSSProperties}
      label="--checked-color:black checked"
      checked
    />
    <Checkbox
      style={{ '--checked-color': 'black' } as React.CSSProperties}
      label="--checked-color:black disabled"
      checked
      disabled
    />
    <Checkbox
      style={{ '--checked-color': 'black' } as React.CSSProperties}
      label="--checked-color:black disabled indeterminate"
      checked
      indeterminate
      disabled
    />
  </Layout.StoryVertical>
);
