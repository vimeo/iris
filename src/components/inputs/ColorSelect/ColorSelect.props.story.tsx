import React, { useState } from 'react';
import { readableColor } from 'polished';

import { ColorSelect } from './ColorSelect';

import { Button } from '../../buttons/Button/Button';

import { Layout } from '../../../storybook';

export default {
  title: 'components/ColorSelect/props',
};

export function Children() {
  return (
    <Layout.StoryVertical defaultWidth>
      <ColorSelect
        onChange={(HEX) =>
          console.log(
            `onChange: %c ${HEX}`,
            `background: ${HEX}; color: ${readableColor(HEX)}`
          )
        }
      >
        <Button>Hi!</Button>
      </ColorSelect>
    </Layout.StoryVertical>
  );
}
Children.storyName = 'children';

export function Attach() {
  return (
    <Layout.StoryVertical
      center
      style={{ minHeight: '75vh', justifyContent: 'center' }}
    >
      <ColorSelect
        width={320}
        height={200}
        attach="top"
        onChange={(HEX) =>
          console.log(
            `onChange: %c ${HEX}`,
            `background: ${HEX}; color: ${readableColor(HEX)}`
          )
        }
      />
      <br />
      <ColorSelect
        width={320}
        height={200}
        attach="bottom"
        onChange={(HEX) =>
          console.log(
            `onChange: %c ${HEX}`,
            `background: ${HEX}; color: ${readableColor(HEX)}`
          )
        }
      />
    </Layout.StoryVertical>
  );
}
Attach.storyName = 'attach';
