import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';

import { Radio as R, Props } from './Radio';
import { RadioSet } from './RadioSet';

export default {
  title: 'components/Radio',
  component: R,
  argTypes: {
    status: { table: { disable: true } },
    messages: { table: { disable: true } },
    src: { table: { disable: true } },
  },
};

const Radio = styled(R)`
  margin: 1rem;
`;

const Template: Story<Props> = (args) => {
  return <Radio {...args} />;
};
export const Controls = Template.bind({});
Controls.storyName = 'Radio';
Controls.args = {
  label: 'Sample Radio',
};

export function RadioSetStory({ args }) {
  return (
    <RadioSet
      {...args}
      defaultValue="2"
      onChange={(e) => console.log(e.currentTarget)}
    >
      <Radio value="1" label="Value 1" />
      <Radio value="2" label="Value 2" />
      <Radio value="3" label="Value 3" />
    </RadioSet>
  );
}
RadioSetStory.storyName = 'RadioSet';
