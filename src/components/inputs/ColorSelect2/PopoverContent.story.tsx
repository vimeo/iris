import React from 'react';

import { Layout } from '../../../storybook';
import { ColorSelect2PopoverContent } from './ColorSelect2PopoverContent';
import { colorSpaces } from '../../../color';
import { parseToHsl } from 'polished';
import { PopOver } from '../../PopOver/PopOver';

export default {
  title: 'components/ColorSelect2/PopoverContent',
  component: ColorSelect2PopoverContent,
  argTypes: {
    attach: { table: { disable: true } }, // not relevant
  },
};

const Template = (args) => {
  return (
    <Layout.StoryVertical>
      <PopOver
        active
        content={<ColorSelect2PopoverContent {...args} />}
      >
        <div />
      </PopOver>
    </Layout.StoryVertical>
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

export const PopoverContentBasic = Template.bind({});
PopoverContentBasic.storyName = 'Basic';
PopoverContentBasic.args = popoverContentProps;

export const PopoverContentWithHueSlider = Template.bind({});
PopoverContentWithHueSlider.storyName = 'With hue slider';
PopoverContentWithHueSlider.args = {
  ...popoverContentProps,
  showHueSlider: true,
};

export const PopoverContentWithPrests = Template.bind({});
PopoverContentWithPrests.storyName = 'With presets';
PopoverContentWithPrests.args = {
  ...popoverContentProps,
  showHueSlider: true,
  presets: {
    palette: ['#909CDC', '#7BD8DB', '#78DD89'],
    label: 'Presets',
    onEdit: () => null,
  },
};
