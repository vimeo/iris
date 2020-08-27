import React, { useState } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Modal } from './Modal';

import { Button, Input, TextArea } from '../../components';
import { DismissX } from '../../icons';
import { Layout } from '../../storybook';
import { Paragraph, Header } from '../../typography';

export default { title: 'layout|Modal/' };

export function Common() {
  return (
    <Layout.StoryVertical>
      <Modal
        content={ModalContent}
        onOpen={() => console.log('open')}
        onClose={() => console.log('close')}
      >
        <Button>Open Modal</Button>
      </Modal>
    </Layout.StoryVertical>
  );
}

export function Featured() {
  return (
    <Layout.StoryVertical>
      <Modal content={FeatureModalContent} feature>
        <Button>Open Feature Update Modal</Button>
      </Modal>
    </Layout.StoryVertical>
  );
}

export function ExternalState() {
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

export const WithInputContent = () => <WithInputContentStory />;
function WithInputContentStory() {
  const [value, valueSet] = useState('');

  const props = {
    value,
    onChange: e => valueSet(e.currentTarget.value),
    style: { marginBottom: '1rem' },
  };

  return (
    <Layout.StoryVertical>
      <Modal
        content={
          <ModalStyled>
            <Modal.Header>Type something!</Modal.Header>
            <Input {...props} />
            <TextArea {...props} />
            <Input {...props} />
            <Modal.Footer>
              <Modal.SecondaryAction>Cancel</Modal.SecondaryAction>
              <Modal.PrimaryAction>Submit</Modal.PrimaryAction>
            </Modal.Footer>
          </ModalStyled>
        }
        onOpen={() => console.log('open')}
        onClose={() => console.log('close')}
      >
        <Button>Open Modal</Button>
      </Modal>
      <Input
        value="I will not be focused while the modal is open."
        style={{ width: '100%' }}
        readOnly
      />
    </Layout.StoryVertical>
  );
}

export const ControlledWithDynamicContent = () => (
  <ControlledWithDynamicContentStory />
);
function ControlledWithDynamicContentStory() {
  const [toggled, toggledSet] = useState(false);
  const [value, valueSet] = useState('');

  const props = {
    value,
    onChange: e => valueSet(e.currentTarget.value),
    style: { marginBottom: '1rem' },
  };

  const contentA = (
    <ModalStyled>
      <Modal.Header>Type something!</Modal.Header>
      <Input {...props} />
      <TextArea {...props} />
      <Input {...props} />
      <Button
        status="positive"
        onClick={() => toggledSet(s => !s)}
        fluid
      >
        Toggle Content
      </Button>
      <Modal.Footer>
        <Modal.SecondaryAction>Cancel</Modal.SecondaryAction>
        <Modal.PrimaryAction>Submit</Modal.PrimaryAction>
      </Modal.Footer>
    </ModalStyled>
  );

  const contentB = (
    <ModalStyled>
      <Modal.Header>Type something!</Modal.Header>
      <Input {...props} />
      <img
        src="http://placekitten.com/480/230"
        alt=""
        style={{ width: '100%' }}
      />
      <Button
        status="positive"
        onClick={() => toggledSet(s => !s)}
        fluid
      >
        Toggle Content
      </Button>
      <Modal.Footer>
        <Modal.SecondaryAction>Cancel</Modal.SecondaryAction>
        <Modal.PrimaryAction>Submit</Modal.PrimaryAction>
      </Modal.Footer>
    </ModalStyled>
  );

  return (
    <Layout.StoryVertical>
      <Modal
        active={true}
        content={toggled ? contentB : contentA}
        onOpen={() => console.log('open')}
        onClose={() => console.log('close')}
      >
        <Button>Open Modal</Button>
      </Modal>
      <Input
        value="I will not be focused while the modal is open."
        style={{ width: '100%' }}
        readOnly
      />
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

export const Custom = () => <CustomStory />;
function CustomStory() {
  const [active, activeSet] = useState(false);

  return (
    <Layout.StoryVertical>
      <Button onClick={() => activeSet(active => !active)}>
        Open Custom Modal
      </Button>
      <Modal
        active={active}
        style={{ maxWidth: '35rem' }}
        content={
          <CustomModalStyled>
            <Dismiss onClick={() => activeSet(false)} />
            <div style={{ padding: '1.5rem' }}>
              <Header size="5" style={{ marginBottom: '2rem' }}>
                Send a Message
              </Header>
              <Paragraph size="2">
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Consectetur ipsam tenetur illum eius expedita
                cum ipsa distinctio harum ut alias, praesentium
                suscipit vel soluta natus repudiandae omnis
                reiciendis! Eos, beatae.
              </Paragraph>
            </div>
            <CustomModalFooter>
              <Button
                format="secondary"
                style={{ marginRight: '0.5rem' }}
                onClick={() => activeSet(false)}
              >
                Cancel
              </Button>
              <Button onClick={() => activeSet(false)}>Send</Button>
            </CustomModalFooter>
          </CustomModalStyled>
        }
      />
    </Layout.StoryVertical>
  );
}

const CustomModalStyled = styled.div`
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.content.background};
`;

const Dismiss = styled(Button).attrs({
  size: 'sm',
  format: 'basic',
  variant: 'minimalTransparent',
  icon: <DismissX />,
})`
  top: 1rem;
  right: 1rem;
  position: absolute;
`;

const CustomModalFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid ${p => rgba(p.theme.content.color, 0.1)};
`;
