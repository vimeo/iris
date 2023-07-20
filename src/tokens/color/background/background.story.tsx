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
        <Card grade={500} styles={styles}>
          <span>
            <Text>color-background-primary</Text>
            <br />
            <Text>color-background-500</Text>
          </span>
        </Card>
        <Card grade={1000} styles={styles}>
          <span>
            <Text>color-background-secondary</Text>
            <br />
            <Text>color-background-1000</Text>
          </span>
        </Card>
      </Canvas>

      <hr />

      <Canvas>
        {[...new Array(11)].map((_, key) => {
          const grade = key * 100;

          return (
            <Card key={key} grade={grade} styles={styles}>
              <Text>color-background-{grade}</Text>
            </Card>
          );
        })}
      </Canvas>
    </>
  );
}

Tokens.storyName = 'background';

function styles({ theme, grade }) {
  const background = tx(theme, core.color.background(grade));
  const color = readableColor(background);

  return css`
    background: ${background};

    > span {
      color: ${color};
    }
  `;
}
