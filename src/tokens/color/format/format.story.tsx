import React from 'react';
import { css } from 'styled-components';
import { readableColor } from 'polished';

import { formats } from './format';

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
      {formats.map((format, key) => (
        <Card key={key} format={format} styles={styles}>
          <Text>color-format-{format}</Text>
        </Card>
      ))}
    </Canvas>
  );
}

Tokens.storyName = 'format';

function styles({ theme, format }) {
  const background = tx(theme, core.color.format[format]);
  const color = readableColor(background);

  return css`
    background: ${background};

    > span {
      color: ${color};
    }
  `;
}
