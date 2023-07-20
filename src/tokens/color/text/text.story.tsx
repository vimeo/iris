import { readableColor } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';

import { Text } from '../../../typography';

import { core } from '../../core';
import { Card, Canvas } from '../../storybook';
import { tx } from '../../util';

export default {
  title: 'Tokens/color',
};

export function Tokens() {
  return (
    <>
      <Canvas>
        <Card grade={0} styles={styles}>
          <span>
            <Text>color-text-primary</Text>
            <br />
            <Text>color-text-0</Text>
          </span>
          <Example grade={0}>color-text-primary</Example>
        </Card>
        <Card grade={600} styles={styles}>
          <span>
            <Text>color-text-secondary</Text>
            <br />
            <Text>color-text-600</Text>
          </span>
          <Example grade={600}>color-text-secondary</Example>
        </Card>
      </Canvas>

      <br />
      <hr />

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
    </>
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

      > span {
        color: ${color};
      }
    }
  `;
}

const Example = styled(Text)<{ grade: number }>`
  position: absolute;
  bottom: -2rem;
  font-weight: 500;
  color: ${(p) => core.color.text(p.grade)};
`;
