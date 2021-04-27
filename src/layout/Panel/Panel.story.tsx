import React from 'react';
import { Story } from '@storybook/react';

import { Panel } from './Panel';
import { Props } from './Panel.types';

import { Button } from '../../components';

export default {
  title: 'layout/Panel',
  component: Panel,
  argTypes: {
    content: { control: { disable: true } },
    onClose: { control: { disable: true } },
    onOpen: { control: { disable: true } },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Panel content={PanelContent} {...args}>
      <Button>Open Panel</Button>
    </Panel>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'Panel';

const PanelContent = <div />;
