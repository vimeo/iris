import React from 'react';
import { StoryFn } from '@storybook/react';

import { Toggle, Props } from './Toggle';

import { Layout } from '../../../storybook';
import { Eye } from '../../../icons';

export default {
  title: 'components/Toggle',
  component: Toggle,
  argTypes: {
    messages: { table: { disable: true } },
    src: { table: { disable: true } },
    label: { control: { type: null } },
    icon: {
      control: { type: null },
    },
    onKeyPress: { control: { type: null } },
  },
};

const Template: StoryFn<Props> = (args) => {
  return (
    <Layout.StoryVertical>
      <Toggle {...args} label="Toggle" name="demoToggle" />
      <Toggle
        {...args}
        label="Toggle with icon"
        name="demoToggle2"
        icon={<Eye />}
      />
    </Layout.StoryVertical>
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'Toggle';

const statuses = ['default', 'positive', 'negative'];
const disabled = [true, false];
const stickers = [true, false].flatMap((checked) =>
  disabled.flatMap((disable) =>
    statuses.flatMap((status) => ({
      disabled: disable,
      checked,
      status,
    }))
  )
);
export const StickerSheet = () => {
  return (
    <>
      {stickers.map((sticker, i) => (
        <Toggle
          key={i}
          {...sticker}
          label={`${
            sticker.disabled ? 'disabled' : 'not disabled'
          } | ${
            sticker.checked ? 'checked' : 'not checked'
          } | status: ${sticker.status}`}
        />
      ))}
    </>
  );
};
