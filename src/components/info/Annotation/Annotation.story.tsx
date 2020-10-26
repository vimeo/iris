import React from 'react';

import { Annotation } from './Annotation';

import { Layout } from '../../../storybook';
import { Header } from '../../../typography';

export default { title: 'Components/Info/Annotation' };

export function Common() {
  return (
    <Layout.StoryVertical>
      <Annotation content="I am a tooltip">
        <Header size="3">Tooltip</Header>
      </Annotation>
    </Layout.StoryVertical>
  );
}
