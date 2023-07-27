import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';

import { Panel } from './Panel';
import { Props } from './Panel.types';

import { Button } from '../../components';
import { Layout } from '../../storybook';

export default {
  title: 'components/Panel',
  component: Panel,
  parameters: {
    lostpixel: {
      disable: true,
    },
  },
};

const Template: StoryFn<Props> = ({ content = <div />, ...args }) => {
  const [active, activeSet] = useState(true);
  const toggle = () => activeSet((active) => !active);

  return (
    <>
      <Button onClick={toggle}>Open Panel</Button>
      <Panel {...args} active={active} content={content} />
    </>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'Panel';
