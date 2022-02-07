import styled, { css } from 'styled-components';

import { core } from '../../tokens';
import { Text } from '../../typography';

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Steps = styled(Text)`
  color: ${core.color.text(600)};
  margin-right: auto;
  font-size: 0.75rem;
  letter-spacing: -0.05px;
`;

const backgroundRainbow = css`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  margin: -0.25rem;
  border-radius: 0.5rem;
  background: ${core.color.rainbow.conic.xl};
`;

export const TourPointStyled = styled.div`
  position: relative;
  padding: 1rem;
  background: ${core.color.surface(600)};
  color: ${core.color.text(0)};
  width: 320px;
  border-radius: 0.6rem;
  background-clip: padding-box;
  border: 0.25rem solid transparent;
  box-shadow: 0 0 0.75rem -0.25rem rgba(0, 0, 0, 0.1),
    0 1rem 1rem -1rem rgba(0, 0, 0, 0.25);

  &::before {
    ${backgroundRainbow}
  }

  &::after {
    ${backgroundRainbow}
    clip-path: var(--caret-clip-path);
    transform: var(--caret-translate);
  }

  > img {
    width: 100%;
    border-radius: 0.1875rem;
    margin-bottom: 1rem;
    background-color: black;
  }
`;
