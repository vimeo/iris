import React, { useState } from 'react';
import styled from 'styled-components';

import { ModalCarousel } from './ModalCarousel';
import { Modal } from '../Modal';

import { Button } from '../../../components';
import { Layout } from '../../../storybook';
import { Paragraph } from '../../../typography';

export default { title: 'layout/ModalCarousel' };

export function Carousel() {
  const [active, setActive] = useState(true);
  const [activeModal, setActiveModal] = useState(0);
  const total = ModalContents.length;

  return (
    <Layout.StoryVertical>
      <Button onClick={() => setActive(true)}>Open Modal</Button>
      <ModalCarousel
        active={active}
        activeModal={activeModal}
        total={total}
        content={
          <>
            <ModalStyled>
              <div>
                <Modal.Header>Part {activeModal + 1}</Modal.Header>
                <Paragraph size="2">
                  {ModalContents[activeModal]}
                </Paragraph>
              </div>
              <Modal.Footer>
                <Modal.SecondaryAction
                  onClick={() => setActive(false)}
                >
                  Cancel
                </Modal.SecondaryAction>
                <Modal.PrimaryAction onClick={() => setActive(false)}>
                  Submit
                </Modal.PrimaryAction>
              </Modal.Footer>
            </ModalStyled>
          </>
        }
        onOpen={() => console.log('open')}
        onClose={() => console.log('close')}
        onNext={() =>
          activeModal === total - 1
            ? setActiveModal(0)
            : setActiveModal(activeModal + 1)
        }
        onPrev={() =>
          activeModal === 0
            ? setActiveModal(total - 1)
            : setActiveModal(activeModal - 1)
        }
      />
    </Layout.StoryVertical>
  );
}
Carousel.storyName = 'ModalCarousel';

const ModalContents = [
  'You can use the left and right arrows to navigate!',
  'Try using your keyboard left / right arrows too.',
  'If you reach the end, the right button will be disabled. If you are at the beginning, the left button will disabled',
];

const ModalStyled = styled.div`
  padding: 2rem;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.content.background};
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
