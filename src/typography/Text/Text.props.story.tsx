import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Text } from './Text';

import { Layout } from '../../storybook';
import { core } from '../../tokens';

export default {
  title: 'typography/Text/props',
  component: Text,
};

export function Size({ args }) {
  return (
    <Layout.StoryVertical>
      {[...new Array(11)].map((_, i) => {
        const grade = 1000 - i * 100;
        const unitPx = core.typography.size(grade) as number;
        const unitRem = rem(unitPx);

        return (
          <Row key={i}>
            <Text size={grade} {...args}>
              size-{grade} • {unitPx}px • {unitRem}
            </Text>
          </Row>
        );
      })}
    </Layout.StoryVertical>
  );
}
Size.storyName = 'size';

export function Editable({ args }) {
  return (
    <Layout.StoryVertical>
      <Row {...args}>
        <Text placeholder="Edit me!" contentEditable>
          Text Primitive Component
        </Text>
      </Row>
    </Layout.StoryVertical>
  );
}
Editable.storyName = 'contentEditable';

const Row = styled.div`
  display: block;
  width: 100%;
  padding: 0.5rem 0;
  white-space: nowrap;
`;
