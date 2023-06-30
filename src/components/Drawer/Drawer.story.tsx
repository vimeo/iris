import React from 'react';
import { Drawer } from './Drawer';
import { Story } from '@storybook/react';
import { DrawerProps } from './Drawer.types';

export default {
  title: 'components/Drawer',
  component: Drawer,
  argTypes: {
    isOpen: { control: 'boolean', defaultValue: false },
    placement: { control: 'string', defaultValue: 'left' },
    size: { control: 'string', defaultValue: 'md' },
  },
};

const Template: Story<DrawerProps> = ({ isOpen, placement }) => {
  return (
    <Drawer isOpen={isOpen} placement={placement} size="md">
      <div>Hi! I'm Drawer Content!</div>
    </Drawer>
  );
};

export const DrawerTemplate = Template.bind({});
DrawerTemplate.storyName = 'Drawer';
