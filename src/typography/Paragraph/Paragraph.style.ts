import styled, { css } from 'styled-components';

import { Props } from './Paragraph.types';

import { Text } from '../Text/Text';
import { IrisTheme } from '../../themes';
import { scale } from '../scale';

interface StyleProps {
  format: Props['format'] | Props['status'];
  size: Props['size'];
  theme: IrisTheme;
}

export const Paragraph = styled(Text)<StyleProps>`
  font-weight: 400;
  letter-spacing: 0.01rem;
  ${sizes};
`;

function sizes({ size }) {
  const sizeInt = parseInt(size);
  const grade = 400 - 50 * sizeInt;

  const fontSize =
    Math.round((Math.max(10, scale(grade)) / 16) * 1000) / 1000;

  const lineHeight =
    Math.round((1.225 + sizeInt * 0.075) * 100) / 100;
  const marginBottom = Math.round((1.5 - sizeInt * 0.25) * 100) / 100;

  return css`
    font-size: ${fontSize}rem;
    font-weight: 400;
    line-height: ${lineHeight};
    margin-bottom: ${marginBottom}rem;
  `;
}
