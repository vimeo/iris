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
  return Math.round((1.225 + size * 0.075) * 100) / 100;
}

function calcMarginBottom(size) {
  return Math.round((1.5 - size * 0.25) * 100) / 100;
}
