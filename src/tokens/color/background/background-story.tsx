import React from 'react';
import { css } from 'styled-components';
import { readableColor } from 'polished';

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
          <Card key={key} grade={grade} styles={styles}>
            <Text>color-background-{grade}</Text>
          </Card>
        );
      })}
    </Canvas>
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
