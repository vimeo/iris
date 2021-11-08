import React from 'react';
import { Story } from '@storybook/react';

import { TextArea as TA } from './TextArea';
import { Props } from './TextArea.types';

import { Layout } from '../../../storybook';
import { withCharacterCount } from '../withCharacterCount/withCharacterCount';
export default {
  title: 'components/TextArea',
  component: TA,
  argTypes: {
    status: { table: { disable: true } },
    messages: { table: { disable: true } },
    src: { table: { disable: true } },
    showLabel: { table: { disable: true } },
    helperMsg: { control: { disable: true } },
    errorMsg: { control: { disable: true } },
    preMessage: { control: { disable: true } },
  },
};

const TextAreaWCC = withCharacterCount(TA);

const Template: Story<Props> = (args) => {
  return (
    <Layout.StoryVertical>
      <TA {...args} />
      <TextAreaWCC
        {...args}
        label="Text area with character count"
        defaultValue="lorem ipsum dolor"
      />
    </Layout.StoryVertical>
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'TextArea';
Controls.args = {
  label: 'Text area label',
};
