import React from 'react';
import { css } from 'styled-components';
import { readableColor } from 'polished';

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
        <Card grade={400} styles={styles}>
          <span>
            <Text>color-surface-primary</Text>
            <br />
            <Text>color-surface-400</Text>
          </span>
        </Card>
        <Card grade={600} styles={styles}>
          <span>
            <Text>color-surface-secondary</Text>
            <br />
            <Text>color-surface-600</Text>
          </span>
        </Card>
        <Card grade={800} styles={styles}>
          <span>
            <Text>color-surface-secondary</Text>
            <br />
            <Text>color-surface-800</Text>
          </span>
        </Card>
      </Canvas>

      <hr />

      <Canvas>
        {[...new Array(11)].map((_, key) => {
          const grade = key * 100;

          return (
            <Card key={key} grade={grade} styles={styles}>
              <Text>color-surface-{grade}</Text>
            </Card>
          );
        })}
      </Canvas>
    </>
  );
}

Tokens.storyName = 'surface';

function styles({ theme, grade }) {
  const surface = tx(theme, core.color.surface(grade));
  const color = readableColor(surface);

  return css`
    background: ${surface};

    > span {
      color: ${color};
    }
  `;
}
