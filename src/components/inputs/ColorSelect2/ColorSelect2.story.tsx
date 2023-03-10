import React from 'react';
import { readableColor } from 'polished';
import { Story } from '@storybook/react';

import { ColorSelect2 } from './ColorSelect2';
import { Props } from '../ColorSelect/ColorSelect.types';

import { Layout } from '../../../storybook';
import { ANCHOR_POINTS } from '../../../utils';

export default {
  title: 'components/ColorSelect2',
  component: ColorSelect2,
  argTypes: {
    status: { table: { disable: true } }, // not relevant
    messages: { table: { disable: true } }, // not relevant
    src: { table: { disable: true } }, // not relevant
    value: { table: { disable: true } }, // not relevant
    initialColor: { table: { disable: true } }, // deprecated
    resetLabel: { table: { disable: true } }, // deprecated
    resetColor: { table: { disable: true } }, // deprecated
    onChange: { control: { disable: true } },
    attach: {
      control: {
        type: 'select',
        options: ANCHOR_POINTS,
      },
    },
  },
};

const Template: Story<Props> = (args) => {
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
      />
    </Layout.StoryVertical>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'ColorSelect2';
Controls.args = {
  width: 360,
  height: 180,
  initial: { color: '#FFFF00' },
  reset: { color: '#00FFFF', label: 'reset' },
  label: 'ColorSelect',
  throttleSpeed: 40,
};
