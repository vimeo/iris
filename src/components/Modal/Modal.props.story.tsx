import React from 'react';
import styled from 'styled-components';

import { Modal } from './Modal';

import { Button } from '../../components';
import { Layout } from '../../storybook';
import { Paragraph } from '../../typography';

export default { title: 'components/Modal/props' };

export function Feature() {
  return (
    <Layout.StoryVertical>
      <Modal content={FeatureModalContent} feature>
        <Button>Open Feature Update Modal</Button>
      </Modal>
    </Layout.StoryVertical>
  );
}

export function Active() {
  return (
    <Layout.StoryVertical>
      <Modal
        active={true}
        content={ModalContent}
        onOpen={() => console.log('open')}
        onClose={() => console.log('close')}
      />
    </Layout.StoryVertical>
  );
}

export function Screen() {
  return (
    <Layout.StoryVertical>
      <Modal
        content={ModalContent}
        onOpen={() => console.log('open')}
        onClose={() => console.log('close')}>
        <Button>Open Modal</Button>
      </Modal>
      <Modal
        screen={false}
        content={ModalContent}
        onOpen={() => console.log('open')}
        onClose={() => console.log('close')}>
        <Button>Open Modal (no screen)</Button>
      </Modal>
      <Modal
        screen={false}
        content={ModalContent}
        onOpen={() => console.log('open')}
        onClose={() => console.log('close')}
        feature>
        <Button>Open feature Modal (no screen)</Button>
      </Modal>
    </Layout.StoryVertical>
  );
}

export function Size() {
  return (
    <Layout.StoryVertical>
      <Modal content={ModalContent} size="sm">
        <Button>Open small modal</Button>
      </Modal>
      <Modal content={ModalContent} size="md">
        <Button>Open medium modal</Button>
      </Modal>
      <Modal content={ModalContent} size="lg">
        <Button>Open large modal</Button>
      </Modal>
    </Layout.StoryVertical>
  );
}

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
