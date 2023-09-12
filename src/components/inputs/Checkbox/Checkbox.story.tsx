import React from 'react';
import { Story } from '@storybook/react';

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

const StyledCheck = styled(Checkbox)`
  // input {
  //   &:checked ~ div[type='checkbox'] {
  //     border: 1px solid black;
  //     &::after {
  //       border-color: black;
  //       background-color: black;
  //     }
  //   }
  // }
  --checked-color: black;
`;

const Template: Story<Props> = (args) => {
  return (
    <Layout.StoryVertical>
      <Checkbox {...args} />
      <Checkbox label="default checked" value="default" checked />
      <Checkbox
        label="default checked disabled"
        value="default"
        checked
        disabled
      />
      <StyledCheck
        label="--checked-color:black checked"
        value="black"
        checked
      />
      <StyledCheck
        label="--checked-color:black disabled"
        value="black"
        checked
        disabled
      />
      <StyledCheck
        label="--checked-color:black disabled indeterminate"
        value="black"
        checked
        indeterminate
        disabled
      />
    </Layout.StoryVertical>
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'Checkbox';
Controls.args = {
  label: 'Checkbox label',
  value: 'checkbox1',
};
