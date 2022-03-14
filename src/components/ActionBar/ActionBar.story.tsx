import React, { useState } from 'react';
import { Story } from '@storybook/react';
import styled, { keyframes } from 'styled-components';

import { Button } from '../buttons/Button/Button';
import { Gear } from '../../icons/';
import { ActionBar } from './ActionBar';

export default { title: 'components/ActionBar' };

const Template: Story<any> = (args) => {
  return (
    <>
      <ActionBar {...args}>
        <ActionBar.Selections />
        <ActionBar.Item icon={<Gear />}>Add to</ActionBar.Item>
        <ActionBar.Item icon={<Gear />}>Move</ActionBar.Item>
        <ActionBar.Item icon={<Gear />}>Privacy</ActionBar.Item>
        <ActionBar.Item icon={<Gear />}>Delete</ActionBar.Item>
      </ActionBar>
      <ActionBar {...args} variant="minimal">
        <ActionBar.Selections />
        <ActionBar.Item icon={<Gear />}>Add to</ActionBar.Item>
        <ActionBar.Item icon={<Gear />}>Move</ActionBar.Item>
        <ActionBar.Item icon={<Gear />}>Privacy</ActionBar.Item>
        <ActionBar.Item icon={<Gear />}>Delete</ActionBar.Item>
      </ActionBar>
    </>
  );
};

export const ActionBarStory = Template.bind({});
ActionBarStory.storyName = 'ActionBar';
