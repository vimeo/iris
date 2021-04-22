import React from 'react';
import { Story } from '@storybook/react';

import { Menu, Props } from './Menu';

import { Folder, Grid } from '../../icons';

export default { title: 'layout/Menu', component: Menu };

const Template: Story<Props> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Section title="Section">
        <Menu.Item icon={<Folder />}>Item 1</Menu.Item>
        <Menu.Item icon={<Grid />}>Item 2</Menu.Item>
      </Menu.Section>
    </Menu>
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'Menu';
