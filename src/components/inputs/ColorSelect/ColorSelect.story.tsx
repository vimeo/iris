import React, { useState } from 'react';
import { readableColor } from 'polished';
import { Story } from '@storybook/react';

import { ColorSelect } from './ColorSelect';
import { Props } from './ColorSelect.types';

import { Layout } from '../../../storybook';
import { ANCHOR_POINTS } from '../../../utils';
import { Modal } from '../../Modal/Modal';
import { Button } from '../../Button/Button';

export default {
  title: 'components/ColorSelect',
  component: ColorSelect,
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
      <ColorSelect
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
Controls.storyName = 'ColorSelect';
Controls.args = {
  width: 360,
  height: 180,
  initial: { color: '#FF0' },
  reset: { color: '#0FF', label: 'reset' },
  label: 'ColorSelect',
  throttleSpeed: 40,
};

export const InModal = () => {
  const [active, setActive] = useState(true);
  const ModalContent = (
    <>
      <ColorSelect
        onChange={(HEX) =>
          console.log(
            `onChange: %c ${HEX}`,
            `background: ${HEX}; color: ${readableColor(HEX)}`
          )
        }
      />
      <Modal.Footer>
        <Modal.SecondaryAction onClick={() => setActive(false)}>
          Cancel
        </Modal.SecondaryAction>
      </Modal.Footer>
    </>
  );
  return (
    <>
      <ColorSelect
        onChange={(HEX) =>
          console.log(
            `onChange: %c ${HEX}`,
            `background: ${HEX}; color: ${readableColor(HEX)}`
          )
        }
      />
      <Modal content={ModalContent} active={active}>
        <Button onClick={() => setActive(true)}>Open Modal</Button>
      </Modal>
    </>
  );
};
