import React from 'react';
import { Story } from '@storybook/react';

import { Badge } from './Badge';
import { Props } from './Badge.types';

import { Layout } from '../../../storybook';

export default {
  title: 'Components/Chips/Badge',
  component: Badge,
  argTypes: {
    label: { table: { disable: true } },
    href: { control: { disable: true } },
    target: { control: { disable: true } },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Layout.StoryVertical defaultWidth>
      <Badge {...args}>Badge</Badge>
    </Layout.StoryVertical>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'Badge';
Controls.args = {
  format: 'upgrade',
};

export function Format() {
  return (
    <Layout.StoryVertical defaultWidth>
      <Badge href="#" size="sm">
        default
      </Badge>
      <Badge href="#" format="alum" size="sm">
        alum
      </Badge>
      <Badge href="#" format="beta" size="sm">
        beta
      </Badge>
      <Badge href="#" format="business" size="sm">
        business
      </Badge>
      <Badge href="#" format="curation" size="sm">
        curation
      </Badge>
      <Badge href="#" format="featured" size="sm">
        featured
      </Badge>
      <Badge href="#" format="hd" size="sm">
        hd
      </Badge>
      <Badge href="#" format="info" size="sm">
        info
      </Badge>
      <Badge href="#" format="live" size="sm">
        live
      </Badge>
      <Badge href="#" format="live-archive" size="sm">
        live
      </Badge>
      <Badge href="#" format="new" size="sm">
        new
      </Badge>
      <Badge href="#" format="partner" size="sm">
        partner
      </Badge>
      <Badge href="#" format="plus" size="sm">
        plus
      </Badge>
      <Badge href="#" format="producer" size="sm">
        producer
      </Badge>
      <Badge href="#" format="pro" size="sm">
        pro
      </Badge>
      <Badge href="#" format="sponsor" size="sm">
        sponsor
      </Badge>
      <Badge href="#" format="staff" size="sm">
        staff
      </Badge>
      <Badge href="#" format="support" size="sm">
        support
      </Badge>
      <Badge href="#" format="upgrade" size="sm">
        upgrade
      </Badge>
      <Badge href="#" format="vod" size="sm">
        vod
      </Badge>
    </Layout.StoryVertical>
  );
}
