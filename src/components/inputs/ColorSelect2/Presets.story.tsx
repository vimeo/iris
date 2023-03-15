import React, { useState } from 'react';
import { Story } from '@storybook/react';

import { ColorSelect2 } from './ColorSelect2';
import { Props } from './Presets';

import { Layout } from '../../../storybook';

export default {
  title: 'components/ColorSelect2/minors',
  component: ColorSelect2.Presets,
  argTypes: {
    attach: { table: { disable: true } }, // not relevant
  },
};

const Template: Story<Props> = (args) => {
  const [accentColor, setAccentColor] = useState('#00adef');

  return (
    <Layout.StoryVertical>
      <ColorSelect2
        label={
          <div>
            <ColorSelect2.Presets
              {...args}
              onColorClick={(color) => {
                setAccentColor(color);
              }}
            />
          </div>
        }
        width={300}
        height={150}
        onChange={(color) => {
          setAccentColor(color);
        }}
        value={accentColor}
      />
    </Layout.StoryVertical>
  );
};

export const PresetControls = Template.bind({});
PresetControls.storyName = 'ColorSelect2.Presets';
PresetControls.args = {
  palette: ['#909CDC', '#7BD8DB', '#78DD89', '#CCE190'],
  label: 'Presets',
};
