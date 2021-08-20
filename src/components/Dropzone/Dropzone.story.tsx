import React from 'react';
import { Story } from '@storybook/react';

import { Dropzone } from './Dropzone';
import { DropChangeEvent, Props } from './Dropzone.types';

import { Header } from '../../typography';

export default {
  title: 'Components/Inputs/Dropzone',
  component: Dropzone,
  argTypes: {
    label: { table: { disable: true } },
    status: { table: { disable: true } },
    messages: { table: { disable: true } },
    src: { table: { disable: true } },
    children: { control: { disable: true } },
  },
};

const onChange = (event: DropChangeEvent) => {
  console.log(
    'File uploaded',
    event.target.files || event.dataTransfer.files,
    event
  );
};

const Template: Story<Props> = (args) => {
  return (
    <Dropzone
      style={{ maxWidth: '40rem' }}
      onChange={onChange}
      {...args}
    >
      <Header size="3">Drag files here</Header>
    </Dropzone>
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'Dropzone';
