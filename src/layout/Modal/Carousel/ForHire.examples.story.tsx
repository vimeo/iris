import React, { useState } from 'react';
import styled from 'styled-components';
import { rgba, rem } from 'polished';

import { ModalCarousel } from './ModalCarousel';
import { Modal } from '../Modal';

import { Avatar } from '../../../components';
import { Paragraph, Header } from '../../../typography';
import { Grid } from '../..';

export default { title: 'layout/ModalCarousel/Examples' };

export function ForHirePage() {
  const [active, setActive] = useState(false);
  const [activeModal, setActiveModal] = useState(0);
  const total = ModalContents.length;

  const onPrev = () => {
    if (activeModal > 0) {
      setActiveModal(activeModal - 1);
    }
  };

  const onNext = () => {
    if (activeModal < total - 1) {
      setActiveModal(activeModal + 1);
    }
  };

  return (
    <Page>
      <Header size="3">Latest jobs</Header>
      <Grid columns={4}>
        {ModalContents.map((content, num) => (
          <Card
            onClick={() => {
              setActive(true);
              setActiveModal(num);
            }}
            key={num}
          >
            <Profile>
              <Avatar
                src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
                size="md"
              />
              <div>
                <Header size="5">Person {num + 1}</Header>
                <Header
                  size="6"
                  style={{ textTransform: 'uppercase', opacity: 0.5 }}
                >
                  7 days ago
                </Header>
              </div>
            </Profile>

            <Header size="2" style={{ fontWeight: 100 }}>
              {content}
            </Header>
          </Card>
        ))}
      </Grid>
      <ModalCarousel
        size="lg"
        active={active}
        activeModal={activeModal}
        total={total}
        content={
          <ModalStyled>
            <Profile>
              <Avatar
                src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
                size="md"
              />
              <div>
                <Header size="5">Person {activeModal + 1}</Header>
                <Header
                  size="6"
                  style={{ textTransform: 'uppercase', opacity: 0.5 }}
                >
                  7 days ago
                </Header>
              </div>
            </Profile>
            <Modal.Header>{ModalContents[activeModal]}</Modal.Header>
            <Paragraph
              size="2"
              style={{ paddingBottom: '5rem', display: 'block' }}
            >
              Part {activeModal + 1}. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Consectetur ipsam tenetur
              illum eius expedita cum ipsa distinctio harum ut alias,
              praesentium suscipit vel soluta natus repudiandae omnis
              reiciendis! Eos, beatae.
            </Paragraph>
            <Modal.Footer>
              <Modal.SecondaryAction onClick={() => setActive(false)}>
                Close
              </Modal.SecondaryAction>
              <Modal.PrimaryAction onClick={() => setActive(false)}>
                Message
              </Modal.PrimaryAction>
            </Modal.Footer>
          </ModalStyled>
        }
        onOpen={() => console.log('open')}
        onClose={() => console.log('close')}
        onNext={onNext}
        onPrev={onPrev}
      ></ModalCarousel>
    </Page>
  );
}

const Page = styled.div`
  padding: 1rem 2rem;
`;

const ModalStyled = styled.div`
  padding: 2rem;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.content.background};
`;

const Card = styled.div`
  padding: 1rem;
  cursor: pointer;
  height: 20rem;
  box-shadow: 0 ${rem(3)} ${rem(6)} 0 ${rgba('black', 0.15)};
`;

const Profile = styled.div`
  display: flex;
  margin-bottom: 2rem;

  h5 {
    margin: 0;
    padding-left: 0.7rem;
  }

  h6 {
    padding-left: 0.7rem;
  }
`;

const ModalContents = [
  'Sound designers.',
  'Directors wanted.',
  'Home office',
  'Top 15 animations',
  'Inspirational videos',
  'Matte colors',
  'Work remotely',
  'Upcoming book',
  'Movie screen',
  'Actors wanted',
  'Looking for translators',
  'Help needed',
];
