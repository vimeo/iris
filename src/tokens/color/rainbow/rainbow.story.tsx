import React from 'react';
import { css } from 'styled-components';

import { core } from '../../core';
import { tx } from '../../util';
import { Card, Canvas } from '../../storybook';

import { Text } from '../../../typography';

export function Tokens() {
  const styleText = {
    background: 'rgba(0,0,0,0.2)',
    padding: '0.5rem',
    borderRadius: '0.5rem',
  };

  const styleCircle = (size) => ({
    borderRadius: '50%',
    width: size,
    height: size,
  });

  return (
    <Canvas>
      <Card
        styles={styles('sm', 'linear')}
        style={{ width: '12rem' }}
      >
        <Text style={styleText}>color-rainbow-sm</Text>
      </Card>
      <Card styles={styles('xl', 'linear')} style={{ width: '100%' }}>
        <Text style={styleText}>color-rainbow-xl</Text>
      </Card>
      <Card
        styles={styles('sm', 'conic')}
        style={styleCircle('12rem')}
      >
        <Text style={styleText}>color-rainbow-sm</Text>
      </Card>
      <Card
        styles={styles('xl', 'conic')}
        style={styleCircle('24rem')}
      >
        <Text style={styleText}>color-rainbow-xl</Text>
      </Card>
    </Canvas>
  );
}

Tokens.storyName = 'rainbow';

function styles(size = 'xl', type = 'linear') {
  return ({ theme }) => {
    const background = tx(theme, core.color.rainbow[type][size]);

    return css`
      background: ${background};
      min-height: 5rem;
      min-width: 5rem;

      > span {
        color: #fff;
      }
    `;
  };
}
