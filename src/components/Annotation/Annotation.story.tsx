import React from 'react';
import { Story } from '@storybook/react';

import { Annotation, Props } from './Annotation';

import { Layout } from '../../storybook';
import { Header } from '../../typography';

export default {
  title: 'components/Annotation',
  component: Annotation,
  argTypes: {
    content: { control: { disable: true } },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Layout.StoryVertical center>
      <Annotation content="I am a tooltip" {...args}>
        <Header size="3">Annotation</Header>
      </Annotation>
    </Layout.StoryVertical>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'Annotation';
