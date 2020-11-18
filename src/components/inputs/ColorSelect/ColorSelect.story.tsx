import React, { useState } from 'react';
import { readableColor } from 'polished';
import { select } from '@storybook/addon-knobs';

import { ColorSelect } from './ColorSelect';

import { Layout } from '../../../storybook';

export default { title: 'Components/Inputs/ColorSelect' };

export function Common() {
  return (
    <Layout.StoryVertical>
      <ColorSelect
        attach={select('attach', positions, 'bottom')}
        width={360}
        height={180}
        onChange={(HEX) =>
          console.log(
            `onChange: %c ${HEX}`,
            `background: ${HEX}; color: ${readableColor(HEX)}`
          )
        }
        resetLabel="reset"
        initialColor="#FF0"
        resetColor="#0FF"
      />
    </Layout.StoryVertical>
  );
}

export const Presets = () => <PresetsStory />;
function PresetsStory() {
  const [accentColor, setAccentColor] = useState('#00adef');

  return (
    <Layout.StoryVertical>
      <ColorSelect
        label={
          <ColorSelect.Presets
            palette={['#909CDC', '#7BD8DB', '#78DD89', '#CCE190']}
            label="Accent Color"
            onColorClick={(color) => {
              setAccentColor(color);
            }}
          />
        }
        width={300}
        height={150}
        onChange={(color) => {
          setAccentColor(color);
        }}
        initialColor="#00adef"
        resetLabel="reset"
        resetColor="#00adef"
        value={accentColor}
        attach={select('attach', positions, 'bottom')}
      />
    </Layout.StoryVertical>
  );
}

const positions = {
  top: 'top',
  'top right': 'topRight',
  right: 'right',
  'bottom right': 'bottomRight',
  bottom: 'bottom',
  'bottom left': 'bottomLeft',
  left: 'left',
  'top left': 'topLeft',
} as const;
