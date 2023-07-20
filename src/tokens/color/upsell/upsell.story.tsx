import React from 'react';
import { css } from 'styled-components';

import { core } from '../../core';
import { tx } from '../../util';
import { Card, Canvas } from '../../storybook';

import { Text } from '../../../typography';

export default {
  title: 'Tokens/color',
};

export function Tokens() {
  const styleText = {
    background: 'rgba(0,0,0,0.2)',
    padding: '0.5rem',
    borderRadius: '0.5rem',
  };

  return (
    <Canvas>
      <Card styles={styles('sm')} style={{ width: '12rem' }}>
        <Text style={styleText}>color-upsell-sm</Text>
      </Card>
      <Card styles={styles('xl')} style={{ width: '100%' }}>
        <Text style={styleText}>color-upsell-xl</Text>
      </Card>
    </Canvas>
  );
}

Tokens.storyName = 'upsell';

function styles(size = 'xl') {
  return ({ theme }) => {
    const background = tx(theme, core.color.upsell[size]);

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
