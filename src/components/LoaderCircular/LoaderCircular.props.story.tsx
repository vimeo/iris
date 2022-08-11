import React from 'react';
import styled from 'styled-components';

import { LoaderCircular as LC } from './LoaderCircular';

import { Layout } from '../../storybook';
import { red } from '../../color';

export default {
  title: 'components/LoaderCircular/props',
  component: LC,
};

const LoaderCircular = styled(LC)`
  margin: 1rem;
`;

export function Size({ args }) {
  return (
    <Layout.StoryVertical {...args}>
      <LoaderCircular size="xs" />
      <LoaderCircular size="sm" />
      <LoaderCircular size="md" />
      <LoaderCircular size="lg" />
      <LoaderCircular size="xl" />
    </Layout.StoryVertical>
  );
}

export function Format({ args }) {
  return (
    <Layout.StoryVertical
      {...args}
      css={`
        color: ${red(500)};
      `}
    >
      <LoaderCircular format="primary" />
      <LoaderCircular format="basic" />
      <LoaderCircular format="adaptive" />
    </Layout.StoryVertical>
  );
}
