import React from 'react';
import { css } from 'styled-components';
import { readableColor } from 'polished';

import { statuses } from './status';

import { core } from '../../core';
import { tx } from '../../util';
import { Canvas, Card } from '../../storybook';

import { Text } from '../../../typography';

export function Tokens() {
  return (
    <Canvas>
      {statuses.map((status, key) => (
        <Card key={key} status={status} styles={styles}>
          <Text>color-status-{status}</Text>
        </Card>
      ))}
    </Canvas>
  );
}

Tokens.storyName = 'status';

function styles({ theme, status }) {
  const background = tx(theme, core.color.status[status]);
  const color = readableColor(background);

  return css`
    background: ${background};

    > span {
      color: ${color};
    }
  `;
}
