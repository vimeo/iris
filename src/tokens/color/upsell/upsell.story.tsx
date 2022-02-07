import React from 'react';
import { css } from 'styled-components';
import { readableColor } from 'polished';

// import { stroke } from './stroke';

import { core } from '../../core';
import { tx } from '../../util';
import { Card, Canvas } from '../../storybook';

import { Text } from '../../../typography';
import { red } from '../../../color';

const sizes = ['sm', 'lg'];

export function Tokens() {
  return (
    <Canvas>
      {sizes.map((size) => {
        const token = `color-upsell-${size}`;
        const tokenCSS = 'var(--' + token + ')';
        const tokenCSSa11y = 'var(--' + token + '-a11y' + ')';

        return (
          <Card styles={styles} style={{ '--bg': tokenCSS }}>
            <Text>{token}</Text>
          </Card>
        );
      })}
    </Canvas>
  );
}

Tokens.storyName = 'upsell';

function styles({ theme, token }) {
  const background = tx(theme, core.color.upsell);
  const color = 'white'; //readableColor(background);

  return css`
    /* --direction: to right;
    --color-upsell-stops-sm: #00be4c, #00b285, #0095d5;
    --color-upsell-stops-sm-a11y: #00a441, #009c75, #006895;
    --color-upsell-stops-lg: rgb(0, 182, 85), rgb(0, 178, 133),
      rgb(0, 169, 213);

    --color-upsell-sm: linear-gradient(
      var(--direction),
      var(--color-upsell-stops-sm)
    );
    --color-upsell-sm-a11y: linear-gradient(
      var(--direction),
      var(--color-upsell-stops-sm-a11y)
    );
    --color-upsell-lg: linear-gradient(
      var(--direction),
      var(--color-upsell-stops-lg)
    );
    --color-upsell-lg-a11y: linear-gradient(
      var(--direction),
      var(--color-upsell-stops-lg)
    );

    background: var(--bg);

    > span {
      color: white;
    } */

    background: ${background};

    > span {
      color: ${color};
    }
  `;
}

// const upsell = '';
