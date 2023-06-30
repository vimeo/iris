import React from 'react';
import { Drawer } from './Drawer';
import { Story } from '@storybook/react';
import { DrawerProps } from './Drawer.types';
import styled from 'styled-components';

export default {
  title: 'components/Drawer',
  component: Drawer,
  argTypes: {
    isOpen: { control: 'boolean', defaultValue: false },
    placement: { options: ['left', 'right'], defaultValue: 'left' },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
    },
  },
};

const Template: Story<DrawerProps> = ({ isOpen, placement }) => {
  console.log(placement);
  return (
    <Drawer isOpen={isOpen} placement={placement} size="md">
      <DrawerContent>Hi! I'm Drawer Content!</DrawerContent>
    </Drawer>
  );
};

const DrawerContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  color: black;
`;

export const DrawerTemplate = Template.bind({});
DrawerTemplate.storyName = 'Drawer';
