import React, { cloneElement } from 'react';
import styled from 'styled-components';

import { core } from '../tokens';

export function StoryControlBar({ children }) {
  children = [children]
    .flatMap((c) => c)
    .map((child, key) =>
      cloneElement(child, {
        format: 'soft',
        variant: 'outline',
        size: 'sm',
        key,
      })
    );

  return <StoryControlBarStyled>{children}</StoryControlBarStyled>;
}

const StoryControlBarStyled = styled.div`
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: 2px solid ${core.color.background(200)};
  display: flex;
  gap: 0.75rem;
`;
