import React from 'react';
import { css } from 'styled-components';
import { readableColor } from 'polished';

import { core } from '../../core';
import { tx } from '../../util';
import { Card, Canvas } from '../../storybook';

import { Text } from '../../../typography';

export default {
  title: 'Tokens/color',
};

export function Tokens() {
  return (
    <Canvas>
      <Card styles={styles}>
        <Text>color-livestream</Text>
      </Card>
    </Canvas>
  );
}

Tokens.storyName = 'livestream';

function styles({ theme }) {
  const background = tx(theme, core.color.livestream);
  const color = readableColor(background);

  return css`
    background: ${background};

    > span {
      color: ${color};
    }
  `;
}
