import React from 'react';

import {
  Canvas,
  Component,
  Description,
  DocsContext,
  Heading,
  SourceState,
  Story,
  StoryProps,
} from '@storybook/addon-docs';
import { components } from '@storybook/components';

function DocsPage(): React.ReactElement {
  const { id, title, storyById, componentStories } =
    React.useContext(DocsContext);
  const stories = componentStories();
  const currentStory = storyById(id);
  const { component } = currentStory;
  const componentDisplayName = (component as Component)?.__docgenInfo
    ?.displayName;

  return (
    <>
      <Heading>{componentDisplayName || title}</Heading>
      <Description of={components} />
      {stories.map((story, index) => (
        <Canvas withSource={SourceState.OPEN} key={index}>
          <Story {...(story as StoryProps)} />
        </Canvas>
      ))}
    </>
  );
}

export default DocsPage;
