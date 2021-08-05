import styled, { css } from 'styled-components';

import { Props } from './Paragraph.types';

import { Text } from '../Text/Text';
import { IrisTheme } from '../../themes';

interface StyleProps {
  format: Props['format'] | Props['status'];
  size: number;
  theme: IrisTheme;
}

export const Paragraph = styled(Text)<StyleProps>`
  font-weight: 400;
  letter-spacing: 0.01rem;
  ${sizes};
`;

function sizes({ size }) {
  const sizeInt = 4 - size / 100;

  const lineHeight = calcLineHeight(sizeInt);
  const marginBottom = calcMarginBottom(sizeInt);

  return css`
    font-weight: 400;
    line-height: ${lineHeight};
    margin-bottom: ${marginBottom}rem;
  `;
}

function calcLineHeight(size) {
  const lineHeight = Math.round((size / 25 + 1.46) * 100) / 100;
  return lineHeight;
}

function calcMarginBottom(size) {
  return Math.round((1.5 - size * 0.25) * 100) / 100;
}
