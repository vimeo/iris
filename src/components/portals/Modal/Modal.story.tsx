import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Story } from '../../../storybook';
import { Button as B } from '../../index';
import { Modal } from './Modal';
import { Paragraph } from '../../../typography';

storiesOf(`Components|portals/Modal`, module)
  .add('child element trigger', () => (
    <Story title="Modal">
      <Modal
        content={ModalContent}
        onOpen={() => console.log('open')}
        onClose={() => console.log('close')}
      >
        <Button>Open Modal</Button>
      </Modal>
      <Modal content={FeatureModalContent} feature>
        <Button>Open Feature Update Modal</Button>
      </Modal>
    </Story>
  ))
  .add('external state trigger', () => (
    <Story title="Modal">
      <Modal
        active={true}
        content={ModalContent}
        onOpen={() => console.log('open')}
        onClose={() => console.log('close')}
      />
    </Story>
  ));

const Button = styled(B)`
  display: block;
  margin-bottom: 2rem;
`;

const ModalStyled = styled.div`
  padding: 2rem;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.content.background};
`;

const FeatureModalImg = styled.img`
  margin: -2rem -2rem 2rem;
  width: calc(100% + 4rem);
  min-height: 27.5rem;
  border-radius: 0.25rem 0.25rem 0 0;
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

const FeatureModalContent = (
  <ModalStyled>
    <FeatureModalImg src="http://placekitten.com/440/440" alt="" />
    <Paragraph size="2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Consectetur ipsam tenetur illum eius expedita cum ipsa
      distinctio harum ut alias, praesentium suscipit vel soluta natus
      repudiandae omnis reiciendis! Eos, beatae.
    </Paragraph>
  </ModalStyled>
);
