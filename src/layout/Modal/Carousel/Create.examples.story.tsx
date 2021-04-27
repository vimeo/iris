import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { rem } from 'polished';

import { ModalCarousel } from './ModalCarousel';

import { Grid } from '../../Grid/Grid';
import { Button } from '../../../components';
import { Paragraph, Header, Text } from '../../../typography';
import { slate, blue } from '../../../color';
import { DismissX, Play } from '../../../icons';
import { vimeos, useFakeQuery } from '../../../storybook';

export function CreatePage() {
  const [active, setActive] = useState(false);
  const [activeModal, setActiveModal] = useState(0);
  const total = 12;
  const { items } = useFakeVideos({
    total,
    pageSize: 12,
  });

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

  const iframeCSS = css`
    cursor: pointer;
    display: block;
    position: absolute;
    width: 120%;
    height: 120%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  `;

  return (
    <Page>
      <Header size="3">Browse</Header>
      <Grid columns={4} masonry style={{ gridGap: '30px' }}>
        {items.map((id, i) => (
          <Item
            style={{ borderRadius: '0.5rem' }}
            key={id}
            onClick={() => {
              setActiveModal(i);
              setActive(true);
            }}
          >
            <div
              style={{
                width: '100%',
                background: 'black',
                borderRadius: rem(8),
              }}
            >
              <div
                style={{
                  height: i % 5 === 0 ? '12rem' : '17rem',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: rem(8),
                }}
              >
                <iframe
                  css={iframeCSS}
                  src={`https://player.vimeo.com/video/${id}?controls=false&autoplay=false`}
                />
              </div>
            </div>
            Example {i + 1}
          </Item>
        ))}
      </Grid>
      <ModalCarousel
        size={{ width: 858 }}
        active={active}
        activeModal={activeModal}
        total={total}
        content={
          <ModalStyled>
            <Left>
              <div
                style={{
                  height:
                    items[activeModal] % 5 === 0 ? '12rem' : '17rem',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: rem(8),
                  width: '100%',
                }}
              >
                <iframe
                  css={iframeCSS}
                  src={`https://player.vimeo.com/video/${items[activeModal]}?controls=false&autoplay=false`}
                />
              </div>
            </Left>
            <Right>
              <Header size="1">Example {activeModal + 1}</Header>
              {activeModal % 2 === 0 ? (
                <>
                  <Paragraph size="2">
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Consectetur ipsam tenetur illum
                    eius expedita cum ipsa distinctio harum ut alias.
                  </Paragraph>
                  <Description>
                    <Icon>
                      <Play />
                      <Text format="primary">Landscape</Text>
                    </Icon>
                    <Text style={{ fontWeight: 600 }}>
                      Current ratio
                    </Text>
                  </Description>
                  <Button size="lg" onClick={() => setActive(false)}>
                    Customize
                  </Button>
                </>
              ) : (
                <>
                  <Description>
                    <Icon>
                      <Play />
                      <Text format="primary">Landscape</Text>
                    </Icon>
                    <Text style={{ fontWeight: 600 }}>
                      Current ratio
                    </Text>
                  </Description>
                  <Button size="lg" onClick={() => setActive(false)}>
                    Customize
                  </Button>
                </>
              )}
            </Right>
            <Dismiss
              icon={<DismissX />}
              variant="minimalTransparent"
              format="basic"
              onClick={() => setActive(false)}
            />
          </ModalStyled>
        }
        onOpen={() => console.log('open')}
        onClose={() => console.log('close')}
        onNext={onNext}
        onPrev={onPrev}
      />
    </Page>
  );
}

function useFakeVideos({ total, pageSize }) {
  const { items, page, goto } = useFakeQuery({ total, pageSize });
  const videos = items.map((_, i) => vimeos[i + page * pageSize]);

  return { items: videos, page, goto };
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Page = styled.div`
  padding: 1rem 2rem;
`;

const ModalStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: ${({ theme }) => theme.content.background};
  border-radius: ${rem(8)};
  height: ${rem(468)};
  overflow: hidden;
  position: relative;
`;

const Dismiss = styled(Button)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`;

const Left = styled.div`
  background: ${slate(50)};
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  padding: 4rem 2rem;

  * {
    animation: ${fadeIn} 200ms ease-in-out;
  }
`;

const Description = styled.div`
  display: flex;
  margin: 2rem 0;
  align-items: center;
`;

const Icon = styled.div`
  aspect-ratio: 1 / 1;
  background: ${blue(50)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
  border-radius: ${rem(4)};
  margin-right: 1rem;

  span {
    font-size: ${rem(12)};
  }

  svg {
    width: 1.5rem;
    margin-bottom: 0.2rem;
  }
`;
