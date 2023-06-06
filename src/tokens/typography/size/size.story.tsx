import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Text } from '../../../typography';

import { core } from '../../core';
import { Canvas } from '../../storybook';

export default { title: 'Tokens/typography' };

export function Tokens() {
  return (
    <Canvas>
      {[...new Array(11)].map((_, key) => {
        const grade = 1000 - key * 100;
        const unitPx = core.typography.size(grade) as number;
        const unitRem = rem(unitPx);

        return (
          <Row key={key}>
            <Text style={style(grade)}>
              typography-size-{grade} • {unitPx}px • {unitRem}
            </Text>
          </Row>
        );
      })}
    </Canvas>
  );
}

Tokens.storyName = 'size';

function style(grade) {
  const fontSize = core.typography.size(grade) as number;

  return { display: 'block', fontSize, lineHeight: 1.3 };
}

const Row = styled.div`
  display: block;
  width: 100%;
  padding: 0.5rem 0;
  white-space: nowrap;
`;
