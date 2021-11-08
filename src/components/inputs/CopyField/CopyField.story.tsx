import React from 'react';
import { Story } from '@storybook/react';

import { CopyField, Props } from './CopyField';

import { Layout } from '../../../storybook';

export default {
  title: 'components/CopyField',
  component: CopyField,
  argTypes: {
    src: { table: { disable: true } }, // not relevant
    onCopy: { control: { disable: true } },
    children: { control: { disable: true } },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Layout.StoryVertical>
      <CopyField
        css={`
          max-width: 20rem;
        `}
        {...args}
      />
    </Layout.StoryVertical>
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'CopyField';
Controls.args = {
  messages: { success: 'Copied' },
  label: 'Copy field',
  value: 'http://www.vimeo.com',
};
