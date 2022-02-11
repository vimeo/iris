import React from 'react';
import { css } from 'styled-components';
import { readableColor } from 'polished';

import { core } from '../../core';
import { tx } from '../../util';
import { Card, Canvas } from '../../storybook';

import { Text } from '../../../typography';

export function Tokens() {
  return (
    <Canvas>
      <Card styles={styles}>
        <Text>color-stroke</Text>
      </Card>
    </Canvas>
  );
}

Tokens.storyName = 'stroke';

function styles({ theme }) {
  const background = tx(theme, core.color.stroke);
  const color = readableColor(background);

  return css`
    background: ${background};

    > span {
      color: ${color};
    }
  `;
}
