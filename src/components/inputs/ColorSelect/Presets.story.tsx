import React, { useState } from 'react';
import { Story } from '@storybook/react';

import { ColorSelect } from './ColorSelect';
import { Props } from './Presets';

import { Layout } from '../../../storybook';

export default {
  title: 'Components/Inputs/ColorSelect',
  component: ColorSelect.Presets,
  argTypes: {
    attach: { table: { disable: true } }, // not relevant
  },
};

const Template: Story<Props> = (args) => {
  const [accentColor, setAccentColor] = useState('#00adef');

  return (
    <Layout.StoryVertical>
      <ColorSelect
        label={
          <div>
            <ColorSelect.Presets
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
PresetControls.storyName = 'Presets';
PresetControls.args = {
  palette: ['#909CDC', '#7BD8DB', '#78DD89', '#CCE190'],
  label: 'Presets',
};
