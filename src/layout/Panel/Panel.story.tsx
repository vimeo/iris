import React, { useState } from 'react';
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
  const [active, activeSet] = useState(true);

  const toggle = () => activeSet((active) => !active);

  return (
    <>
      <Button onClick={toggle}>Open Panel</Button>
      <Panel {...args} active={active} content={PanelContent} />
    </>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'Panel';

const PanelContent = <div />;
