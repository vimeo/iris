import React from 'react';
import styled from 'styled-components';

import { LoaderCircular as LC } from './LoaderCircular';
import { Layout } from '../../storybook';

export default { title: 'motion|Loaders/' };

const LoaderCircular = styled(LC)`
  margin: 1rem;
`;

export function Common() {
  return (
    <Layout.StoryVertical>
      <LoaderCircular />
    </Layout.StoryVertical>
  );
}

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
    <Layout.StoryVertical>
      <LoaderCircular format="primary" />
      <LoaderCircular format="basic" />
      <LoaderCircular format="adaptive" />
    </Layout.StoryVertical>
  );
}
