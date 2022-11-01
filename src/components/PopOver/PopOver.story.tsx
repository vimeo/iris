import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';

import { PopOver } from './PopOver';
import { Props } from './PopOver.types';
import { Pop } from './PopOver.minors';

import { Button as B, Badge } from '../../components';
import { ANCHOR_POINTS } from '../../utils';
import { Gear } from '../../icons';

import { Modal } from '../Modal/Modal';
import { Paragraph } from '../../typography';
import { useOutsideClick } from '../../utils';

export default {
  title: 'components/PopOver',
  component: PopOver,
  argTypes: {
    content: { control: { disable: true } },
    active: { control: { disable: true } },
    attach: { control: { type: 'select', options: ANCHOR_POINTS } },
  },
};

const Template: Story<Props> = ({ active, ...args }) => {
  return (
    <>
      <PopOver {...args} content={PopList} style={{ zIndex: 5000 }}>
        <TriggerButton>PopOver</TriggerButton>
      </PopOver>
    </>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'PopOver';
Controls.args = {
  active: true,
};

const TriggerButton = styled(B)`
  margin: 2rem auto;
`;

const PopList = (
  <>
    <Pop.List>
      <Pop.Header>Header</Pop.Header>
      <Pop.Item href="#">Item 1</Pop.Item>
      <Pop.Item href="#" selected>
        Item 2 (Selected)
      </Pop.Item>
    </Pop.List>
    <Pop.Divider />
    <Pop.List>
      <Pop.Item href="#">
        <Gear />
        Item 3
      </Pop.Item>
      <Pop.Item href="#" selected>
        Item 4
        <Badge format="upgrade" style={{ display: 'inline-block' }}>
          Upgrade
        </Badge>
      </Pop.Item>
    </Pop.List>
  </>
);

/// EXAMPLE STORY FOR #173
const ModalStyled = styled.div`
  padding: 2rem;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.content.background};
`;

const ModalContent = (close, submit) => (
  <ModalStyled>
    <Modal.Header>
      Laborum amet id anim exercitation est enim cupidatat.
    </Modal.Header>
    <Paragraph size="2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Consectetur ipsam tenetur illum eius expedita cum ipsa
      distinctio harum ut alias, praesentium suscipit vel soluta natus
      repudiandae omnis reiciendis! Eos, beatae.
    </Paragraph>
    <Modal.Footer>
      <Modal.SecondaryAction onClick={close}>
        Cancel
      </Modal.SecondaryAction>
      <Modal.PrimaryAction onClick={submit}>
        Submit
      </Modal.PrimaryAction>
    </Modal.Footer>
  </ModalStyled>
);

const Component = ({ label }) => {
  const ref = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [popoverActive, setPopoverActive] = useState(false);

  useOutsideClick(ref, () => {
    setShowModal(false);
    setPopoverActive(false);
  });

  return (
    <>
      <PopOver
        active={popoverActive}
        content={
          <Pop.List>
            <Pop.Item
              onClick={() => {
                setPopoverActive(false);
                setShowModal(true);
              }}
            >
              button {label}
            </Pop.Item>
          </Pop.List>
        }
      >
        <button onClick={() => setPopoverActive(true)}>
          {label}
        </button>
      </PopOver>
      <Modal
        active={showModal}
        content={ModalContent(
          () => setShowModal(false),
          () => console.log('submit')
        )}
      />
    </>
  );
};

export const Example = () => {
  return (
    <ul>
      <li>
        <Component label="Popover 1" />
      </li>
      <li>
        <Component label="Popover 2" />
      </li>
      <li>
        <Component label="Popover 3" />
      </li>
    </ul>
  );
};
