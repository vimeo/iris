import React from 'react';

import { Badge } from './Badge';

import { Layout } from '../../../storybook';

export default {
  title: 'Components/Chips/Badge/props',
  component: Badge,
  argTypes: {
    label: { table: { disable: true } },
    target: { control: { disable: true } },
  },
};

export function Href() {
  return (
    <Layout.StoryVertical defaultWidth>
      <Badge format="upgrade" href="#" />
    </Layout.StoryVertical>
  );
}
Href.storyName = 'href';

export function Format() {
  return (
    <Layout.StoryVertical defaultWidth>
      <Badge size="xl" format="mature" />
      <Badge size="xl" format="not-yet-rated" />
    </Layout.StoryVertical>
  );
}
Format.storyName = 'format';

export function Format_OLD() {
  return (
    <Layout.StoryVertical defaultWidth>
      <Badge>default</Badge>
      <Badge format="alum" />
      <Badge format="beta" />
      <Badge format="business" />
      <Badge format="curation" />
      <Badge format="featured" />
      <Badge format="hd" />
      <Badge format="info" />
      <Badge format="live" />
      <Badge format="live-archive">live</Badge>
      <Badge format="new" />
      <Badge format="partner" />
      <Badge format="plus" />
      <Badge format="producer" />
      <Badge format="pro" />
      <Badge format="sponsor" />
      <Badge format="staff" />
      <Badge format="support" />
      <Badge format="upgrade" />
      <Badge format="vod" />
    </Layout.StoryVertical>
  );
}
Format_OLD.storyName = 'format (old)';

export function Size() {
  return (
    <Layout.StoryVertical defaultWidth>
      <Badge format="mature" size="sm" />
      <Badge format="mature" size="lg" />
      <Badge format="mature" size="xl" />
    </Layout.StoryVertical>
  );
}
Size.storyName = 'size';
