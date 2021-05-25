import styled, { css } from 'styled-components';

const FullBleed = styled.div`
  display: flex;
  position: relative;
  margin: -1rem;
  padding: 0;
  height: 100vh;
`;

const StoryPadded = styled.div<{ center?: boolean }>`
  margin: 0 2rem;
  padding: 0.5rem 0;
`;

const StoryVertical = styled.div<{
  center?: boolean;
  defaultWidth?: boolean;
}>`
  ${flexVertical};

  padding: 1rem 0.5rem;
  padding: ${(p) => (p.center ? '4rem' : '1rem 0.5rem')};

  > * {
    margin: 0.5rem 1rem;
    min-width: ${(p) => (p.defaultWidth ? 'unset' : '20rem')};
  }
`;

export const Layout = {
  FullBleed,
  StoryPadded,
  StoryVertical,
};

function flexVertical({ center = false }) {
  return css`
    display: flex;
    flex-direction: column;
    align-items: ${center ? 'center' : 'flex-start'};
  `;
}
