import { readableColor } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';

import { Text } from '../../../typography';

import { core } from '../../core';
import { Card, Canvas } from '../../storybook';
import { tx } from '../../util';

export function Tokens() {
  return (
    <Canvas>
      {[...new Array(11)].map((_, key) => {
        const grade = key * 100;

        return (
          <Card
            key={key}
            grade={grade}
            styles={styles}
            style={{ marginBottom: '3rem' }}
          >
            <Text>color-text-{grade}</Text>
            <Example grade={grade}>color-text-{grade}</Example>
          </Card>
        );
      })}
    </Canvas>
  );
}

Tokens.storyName = 'text';

function styles({ theme, grade }) {
  const background = tx(theme, core.color.text(grade));
  const color = readableColor(background);

  return css`
    background: ${background};

    > span:first-of-type {
      color: ${color};
    }
  `;
}

const Example = styled(Text)<{ grade: number }>`
  position: absolute;
  bottom: -2rem;
  font-weight: 500;
  color: ${(p) => core.color.text(p.grade)};
`;
