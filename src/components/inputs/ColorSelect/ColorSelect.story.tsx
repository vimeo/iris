import React, { useState } from 'react';
import { readableColor } from 'polished';
import { storiesOf } from '@storybook/react';

import { ColorSelect } from './ColorSelect';

import { Story } from '../../../storybook';

const ColorSelectWithPresetColors = () => {
  const [accentColor, setAccentColor] = useState('#00adef');

  return (
    <ColorSelect
      label={
        <ColorSelect.Presets
          palette={['#909CDC', '#7BD8DB', '#78DD89', '#CCE190']}
          label="Accent Color"
          onColorClick={color => {
            setAccentColor(color);
          }}
        />
      }
      width={237}
      height={172}
      onChange={color => {
        setAccentColor(color);
      }}
      initialColor="#00adef"
      resetLabel="reset"
      resetColor="#00adef"
      value={accentColor}
    />
  );
};

storiesOf(`Components|inputs/Color Select`, module)
  .add('Color Select', () => (
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
  ))
  .add('Color Select with Presets', () => (
    <Story title="Color Select with Presets" subTitle="Playground">
      <ColorSelectWithPresetColors />
    </Story>
  ));
