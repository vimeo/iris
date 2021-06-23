import React from 'react';
import styled from 'styled-components';

import { Text as T } from './Text';

import { Layout } from '../../storybook';

export default { title: 'typography/Text/examples', component: T };

const Text = styled(T)`
  display: block;
`;

const TextHeavy = styled(Text)`
  font-size: 0.5rem;
  font-weight: 800;
  line-height: 1rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

const TextThin = styled(Text)`
  font-size: 2rem;
  font-weight: 100;
  line-height: 2.5rem;
  letter-spacing: 0.075rem;
`;

const TextMeta = styled(Text)`
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.5rem;
  letter-spacing: -0.075rem;
`;

export function HeavyText() {
  return (
    <Layout.StoryVertical>
      <TextHeavy format="basic">Text Primitive Component</TextHeavy>
      <TextHeavy format="soft">Text Primitive Component</TextHeavy>
      <TextHeavy format="alternative">
        Text Primitive Component
      </TextHeavy>
      <TextHeavy format="secondary">
        Text Primitive Component
      </TextHeavy>
      <TextHeavy format="primary">Text Primitive Component</TextHeavy>
      <TextHeavy status="positive">
        Text Primitive Component
      </TextHeavy>
      <TextHeavy status="negative">
        Text Primitive Component
      </TextHeavy>
    </Layout.StoryVertical>
  );
}
HeavyText.storyName = 'custom (heavy)';

export function ThinText() {
  return (
    <Layout.StoryVertical>
      <TextThin format="basic">Text Primitive Component</TextThin>
      <TextThin format="soft">Text Primitive Component</TextThin>
      <TextThin format="alternative">
        Text Primitive Component
      </TextThin>
      <TextThin format="secondary">Text Primitive Component</TextThin>
      <TextThin format="primary">Text Primitive Component</TextThin>
      <TextThin status="positive">Text Primitive Component</TextThin>
      <TextThin status="negative">Text Primitive Component</TextThin>
    </Layout.StoryVertical>
  );
}
ThinText.storyName = 'custom (thin)';

export function MetaText() {
  return (
    <Layout.StoryVertical>
      <TextMeta format="basic">Text Primitive Component</TextMeta>
      <TextMeta format="soft">Text Primitive Component</TextMeta>
      <TextMeta format="alternative">
        Text Primitive Component
      </TextMeta>
      <TextMeta format="secondary">Text Primitive Component</TextMeta>
      <TextMeta format="primary">Text Primitive Component</TextMeta>
      <TextMeta status="positive">Text Primitive Component</TextMeta>
      <TextMeta status="negative">Text Primitive Component</TextMeta>
    </Layout.StoryVertical>
  );
}
MetaText.storyName = 'custom (meta)';
