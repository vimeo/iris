import React from 'react';
import { readableColor } from 'polished';

import { ColorSelect2 } from './ColorSelect2';

import { Button } from '../../Button/Button';

import { Layout } from '../../../storybook';

import { ColorSelect2PopoverContent } from './ColorSelect2PopoverContent';
import { colorSpaces } from '../../../color';
import { parseToHsl } from 'polished';

export default {
  title: 'components/ColorSelect2/props',
};

export function Children({ args }) {
  return (
    <Layout.StoryVertical defaultWidth>
      <ColorSelect2
        {...args}
        onChange={(HEX) =>
          console.log(
            `onChange: %c ${HEX}`,
            `background: ${HEX}; color: ${readableColor(HEX)}`
          )
        }
      >
        <Button>Hi!</Button>
      </ColorSelect2>
    </Layout.StoryVertical>
  );
}

export function Attach({ args }) {
  return (
    <Layout.StoryVertical
      center
      style={{ minHeight: '75vh', justifyContent: 'center' }}
    >
      <ColorSelect2
        {...args}
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
      <ColorSelect2
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

export function Disabled({ args }) {
  return (
    <Layout.StoryVertical defaultWidth>
      <ColorSelect2 {...args} disabled />
    </Layout.StoryVertical>
  );
}

const Template = (args) => {
  return (
    <div
      style={{
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: 'repeat(2, min-content)',
      }}
    >
      <ColorSelect2PopoverContent {...args} />
      <ColorSelect2PopoverContent
        {...args}
        presets={{
          palette: ['#909CDC', '#7BD8DB', '#78DD89'],
          label: 'Presets',
          onEdit: () => null,
        }}
      />
      <ColorSelect2PopoverContent {...args} showHueSlider />
      <ColorSelect2PopoverContent
        {...args}
        showHueSlider
        presets={{
          palette: ['#909CDC', '#7BD8DB', '#78DD89'],
          label: 'Presets',
          onEdit: () => null,
        }}
      />
    </div>
  );
};

const initialColors = colorSpaces(parseToHsl('#00adef'));
const popoverContentProps = {
  width: 260,
  height: 200,
  showHueSlider: false,
  popOverRef: null,
  presets: null,
  dispatch: () => null,
  onChange: () => null,
  throttleSpeed: 40,
  colorMeta: initialColors,
  state: {
    open: true,
    editing: false,
    error: false,
    colorMeta: initialColors,
    colorSpace: 'HEX',
  },
};
export const PopoverContent = Template.bind({});
PopoverContent.args = popoverContentProps;
