import React, { useState } from 'react';
import { Story } from '@storybook/react';

import { ColorSelect2 } from './ColorSelect2';
import { Props } from './Presets';

import { Layout } from '../../../storybook';

export default {
  title: 'components/ColorSelect2/Props',
  component: ColorSelect2,
  argTypes: {
    attach: { table: { disable: true } }, // not relevant
  },
};

const Template: Story<Props> = (args) => {
  const [accentColor, setAccentColor] = useState('#00adef');

  const { palette, label, onEdit } = args;

  return (
    <Layout.StoryVertical>
      <ColorSelect2
        presets={{
          palette,
          label: label as string,
          onEdit,
        }}
        width={300}
        height={150}
        onChange={(color) => setAccentColor(color)}
        value={accentColor}
      />
    </Layout.StoryVertical>
  );
};

export const PresetControls = Template.bind({});
PresetControls.storyName = 'Presets';
PresetControls.args = {
  palette: ['#909CDC', '#7BD8DB', '#78DD89'],
  label: 'Presets',
  onEdit: () => alert('Editing presets'),
};
