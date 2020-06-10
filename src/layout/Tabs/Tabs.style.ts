import styled, { css } from 'styled-components';
import { rgba, rem } from 'polished';

import { blue } from '../../color';

interface NavProps {
  variant?: 'minimalTransparent' | 'inlay';
}

export const Nav = styled.ol<NavProps>`
  display: flex;
  width: 100%;
  margin: 0 0 0.25rem;
  padding: 0;
  list-style-type: none;
  border-radius: 0.25rem;

  ${variant};
`;

function variant({ variant = 'minimalTransparent' }) {
  return (
    variant === 'inlay' &&
    css`
      background: ${p => p.theme.formats.secondary};
      padding: 0.334rem 0;
    `
  );
}

interface IndicatorProps {
  width: number;
  position: number;
}

export const Indicator = styled.div<IndicatorProps>`
  width: 100%;
  background: ${p => rgba(p.theme.content.color, 0.1)};

  &:after {
    content: '';
    display: block;
    width: ${p => 100 / p.width}%;
    height: ${rem(2)};
    background-color: ${blue(500)};
    transform: translateX(${p => p.position * 100}%);
    transition: 120ms ease-in-out;
  }
`;
