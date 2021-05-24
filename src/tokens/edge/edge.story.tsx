import React from 'react';
import styled, { css } from 'styled-components';

import { Text } from '../../typography';

import { core } from '../core';
import { Card, Canvas } from '../storybook';

export default { title: 'Tokens/edge' };

export function Tokens() {
  const Cards = Array.from({ length: 11 }).map((_, key) => {
    const grade = key * 100;

    return (
      <Card key={key} grade={grade} styles={styles}>
        <Text>edge-{grade}</Text>
      </Card>
    );
  });

  return (
    <>
      <Canvas>{Cards}</Canvas>
      <CanvasColor>{Cards}</CanvasColor>
    </>
  );
}

Tokens.storyName = 'edge';

function styles({ theme, grade }) {
  return css`
    ${core.edge(grade)};
  `;
}

const CanvasColor = styled(Canvas)`
  background: linear-gradient(90deg, red, cyan);
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    mask-image: linear-gradient(to bottom, transparent, black);
    background: linear-gradient(90deg, hotpink, rebeccapurple);
  }
`;
