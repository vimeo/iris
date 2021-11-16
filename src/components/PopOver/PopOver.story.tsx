import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';

import { PopOver } from './PopOver';
import { Props } from './PopOver.types';
import { Pop } from './PopOver.minors';

import { Button as B, Badge } from '../../components';
import { ANCHOR_POINTS } from '../../utils';
import { Gear } from '../../icons';

export default {
  title: 'components/PopOver',
  component: PopOver,
  argTypes: {
    content: { control: { disable: true } },
    active: { control: { disable: true } },
    attach: { control: { type: 'select', options: ANCHOR_POINTS } },
  },
};

const Template: Story<Props> = ({ active, ...args }) => {
  return (
    <>
      <PopOver {...args} content={PopList} style={{ zIndex: 5000 }}>
        <TriggerButton>PopOver</TriggerButton>
      </PopOver>
    </>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'PopOver';
Controls.args = {
  active: true,
};

const TriggerButton = styled(B)`
  margin: 2rem auto;
`;

const PopList = (
  <>
    <Pop.List>
      <Pop.Header>Header</Pop.Header>
      <Pop.Item href="#">Item 1</Pop.Item>
      <Pop.Item href="#" selected>
        Item 2 (Selected)
      </Pop.Item>
    </Pop.List>
    <Pop.Divider />
    <Pop.List>
      <Pop.Item href="#">
        <Gear />
        Item 3
      </Pop.Item>
      <Pop.Item href="#" selected>
        Item 4
        <Badge format="upgrade" style={{ display: 'inline-block' }}>
          Upgrade
        </Badge>
      </Pop.Item>
    </Pop.List>
  </>
);
