import React, { useState, useContext } from 'react';
import styled, {
  ThemeProvider,
  css,
  ThemeContext,
} from 'styled-components';
import { rem } from 'polished';

import { Button, Input } from '../../components';
import { Header as H, Paragraph } from '../../typography';

export default { title: 'Labs/Player' };

export function Player() {
  const [src, srcSet] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/0/04/Vincent-van-gogh-cafe-terrace-on-the-place-du-forum-arles-at-night-the.jpg'
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div>
        <Input value={src} onChange={(e) => srcSet(e.target.value)} />
        <Paragraph
          size="4"
          onClick={() =>
            srcSet(
              'https://upload.wikimedia.org/wikipedia/commons/0/04/Vincent-van-gogh-cafe-terrace-on-the-place-du-forum-arles-at-night-the.jpg'
            )
          }
        >
          https://upload.wikimedia.org/wikipedia/commons/0/04/Vincent-van-gogh-cafe-terrace-on-the-place-du-forum-arles-at-night-the.jpg
        </Paragraph>
        <Paragraph
          size="4"
          onClick={() =>
            srcSet(
              'https://cultfollowingmedia.files.wordpress.com/2020/07/cube-review.jpg'
            )
          }
        >
          https://cultfollowingmedia.files.wordpress.com/2020/07/cube-review.jpg
        </Paragraph>
        <Paragraph
          size="4"
          onClick={() =>
            srcSet(
              'https://assets.teenvogue.com/photos/61b0e803607feee33a634342/master/pass/meangirls.jpeg'
            )
          }
        >
          https://assets.teenvogue.com/photos/61b0e803607feee33a634342/master/pass/meangirls.jpeg
        </Paragraph>
        <Paragraph
          size="4"
          onClick={() =>
            srcSet(
              'https://sm.askmen.com/askmen_in/topten/b/best-star-/best-star-wars-scenes_1w5r.jpg'
            )
          }
        >
          https://sm.askmen.com/askmen_in/topten/b/best-star-/best-star-wars-scenes_1w5r.jpg
        </Paragraph>
        <Paragraph
          size="4"
          onClick={() =>
            srcSet(
              'https://images.squarespace-cdn.com/content/v1/5aca32bf5b409b3ac7b1e7d8/1525875794444-TGIQD3R0KQM08UK74LL0/the+breakfast+club.jpg'
            )
          }
        >
          https://images.squarespace-cdn.com/content/v1/5aca32bf5b409b3ac7b1e7d8/1525875794444-TGIQD3R0KQM08UK74LL0/the+breakfast+club.jpg
        </Paragraph>
        <Paragraph
          size="4"
          onClick={() =>
            srcSet(
              'https://www.crushpixel.com/big-static15/preview4/colorful-umbrellas-background-2159063.jpg'
            )
          }
        >
          https://www.crushpixel.com/big-static15/preview4/colorful-umbrellas-background-2159063.jpg
        </Paragraph>
      </div>
      <Header>90</Header>
      <PlayerFaux>
        <SurfaceMenu opacity={90} />
        <SurfacePlayerBar opacity={90} />
        <img src={src} style={{ objectFit: 'fill', width: '100%' }} />
      </PlayerFaux>
      <Header>80</Header>
      <PlayerFaux>
        <SurfaceMenu opacity={80} />
        <SurfacePlayerBar opacity={80} />
        <img src={src} style={{ objectFit: 'fill', width: '100%' }} />
      </PlayerFaux>
      <Header>70</Header>
      <PlayerFaux>
        <SurfaceMenu opacity={70} />
        <SurfacePlayerBar opacity={70} />
        <img src={src} style={{ objectFit: 'fill', width: '100%' }} />
      </PlayerFaux>
      <Header>60</Header>
      <PlayerFaux>
        <SurfaceMenu opacity={60} />
        <SurfacePlayerBar opacity={60} />
        <img src={src} style={{ objectFit: 'fill', width: '100%' }} />
      </PlayerFaux>
      <Header>50</Header>
      <PlayerFaux>
        <SurfaceMenu opacity={50} />
        <SurfacePlayerBar opacity={50} />
        <img src={src} style={{ objectFit: 'fill', width: '100%' }} />
      </PlayerFaux>
    </div>
  );
}

const PlayerFaux = styled.div`
  width: 100%;
  position: relative;
  aspect-ratio: 16/9;
  display: block;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const SurfaceMenu = styled.div`
  background: rgba(0, 0, 0, ${(p) => p.opacity / 100});
  backdrop-filter: blur(4px);
  width: calc(4rem + 10%);
  height: calc(100% - 5rem);
  top: 1rem;
  right: 1rem;
  position: absolute;
  border-radius: 0.334rem;
`;

const SurfacePlayerBar = styled.div`
  background: rgba(0, 0, 0, ${(p) => p.opacity / 100});
  backdrop-filter: blur(4px);
  width: calc(100% - 2rem);
  height: calc(2rem);
  bottom: 1rem;
  left: 1rem;
  position: absolute;
  border-radius: 0.334rem;
`;

const Header = styled(H)`
  margin-top: 3rem;
  margin-bottom: 0.5rem;
`;
