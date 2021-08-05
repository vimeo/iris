import styled, { css } from 'styled-components';

import { Props } from './Header.types';
import { antialias } from '../typography';
import { Text } from '../Text/Text';

type PropsStyled = Omit<Props, 'size'> & { size: number };

export const Header = styled(Text)<PropsStyled>`
  display: block;
  color: ${(p) => p.theme.formats[p.format]};
  font-weight: ${(p) => (p.variant === 'thin' ? 400 : 700)};
  ${sizes};
  ${antialias};
`;

export const PlusUltra = styled(Text)<Props>`
  display: block;
  color: ${(p) => p.theme.formats[p.format]};
  font-size: calc(2.25rem + 3.5vw);
  line-height: calc(2.0625rem + 3.5125vw);
  letter-spacing: calc(-0.125rem - 0.0025vw);
  font-weight: 800;
  max-width: calc(96vw - 2rem);
  margin-bottom: calc(1.5rem + 0.875vw);
`;

function sizes({ size }) {
  const sizeInt = 8 - size / 100;

  const lineHeight = calcLineHeight(sizeInt);
  const letterSpacing = calcLetterSpacing(sizeInt);
  const marginBottom = calcMarginBottom(sizeInt);

  return css`
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing}px;
    margin-bottom: ${marginBottom}rem;
  `;
}

function calcLineHeight(size) {
  const lineHeight = Math.round((size / 50 + 1.14) * 100) / 100;
  return lineHeight;
}

function calcLetterSpacing(size) {
  return Math.min(
    Math.round((-1.2 - (size - 1) * -0.2) * 100) / 100,
    0
  );
}

function calcMarginBottom(size) {
  return Math.max(
    0.5,
    Math.round((1.45 - (size - 1) / 5) * 100) / 100
  );
}
