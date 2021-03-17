import React from 'react';
import styled from 'styled-components';

import { LoaderCircular as LC } from './LoaderCircular';

import { Layout } from '../../storybook';
import { red } from '../../color';

export default { title: 'motion/Loaders/Props', component: LC };

const LoaderCircular = styled(LC)`
  margin: 1rem;
`;

export function Size() {
  return (
    <Layout.StoryVertical>
      <LoaderCircular size="xs" />
      <LoaderCircular size="sm" />
      <LoaderCircular size="md" />
      <LoaderCircular size="lg" />
      <LoaderCircular size="xl" />
    </Layout.StoryVertical>
  );
}

export function Format() {
  return (
    <Layout.StoryVertical
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
