import React from 'react';
import { readableColor } from 'polished';
import { storiesOf } from '@storybook/react';

import { ColorSelect } from './ColorSelect';

import { Story } from '../../../storybook';

storiesOf(`Components|inputs`, module).add('Color Select', () => (
  <Story title="Color Select" subTitle="Playground">
    <ColorSelect
      width={320}
      height={160}
      onChange={HEX =>
        console.log(
          `onChange: %c ${HEX}`,
          `background: ${HEX}; color: ${readableColor(HEX)}`,
        )
      }
      resetLabel="reset"
      initialColor="#FF0"
      resetColor="#0FF"
    />
    <ColorSelect
      label="XL ColorSelect"
      width={320}
      height={160}
      onChange={HEX =>
        console.log(
          `onChange: %c ${HEX}`,
          `background: ${HEX}; color: ${readableColor(HEX)}`,
        )
      }
      resetLabel="reset"
      initialColor="#F00"
      resetColor="#00F"
      size="xl"
    />
  </Story>
));
