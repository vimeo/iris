import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';

import { Modal } from './Modal';
import { Props } from './Modal.types';

import { Button } from '..';
import { Paragraph } from '../../typography';

export default {
  title: 'components/Modal',
  component: Modal,
  argTypes: {
    content: { control: { disable: true } },
    onOpen: { control: { disable: true } },
    onClose: { control: { disable: true } },
    dismissLabel: { control: { disable: true } },
    active: {
      control: { type: 'radio', options: [true, false, undefined] },
    },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Modal content={ModalContent} {...args}>
      <Button>Open Modal</Button>
    </Modal>
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'Modal';

const ModalStyled = styled.div`
  padding: 2rem;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.content.background};
`;

const ModalContent = (
  <ModalStyled>
    <Modal.Header>hey, listen!</Modal.Header>
    <Paragraph size="2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Consectetur ipsam tenetur illum eius expedita cum ipsa
      distinctio harum ut alias, praesentium suscipit vel soluta natus
      repudiandae omnis reiciendis! Eos, beatae.
    </Paragraph>
    <Modal.Footer>
      <Modal.SecondaryAction>Cancel</Modal.SecondaryAction>
      <Modal.PrimaryAction>Submit</Modal.PrimaryAction>
    </Modal.Footer>
  </ModalStyled>
);
