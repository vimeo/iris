import React from 'react';
import { Story } from '@storybook/react';

import { Header } from './Header';
import { Props } from './Header.types';

export default { title: 'typography/Headers', component: Header };

const Template: Story<Props> = (args) => {
  return <Header {...args}>Header</Header>;
};
export const Controls = Template.bind({});
Controls.storyName = 'Header';
