import styled, { css } from 'styled-components';

import { Props } from './Paragraph.types';

import { Text } from '../Text/Text';
import { IrisTheme } from '../../themes';

interface StyleProps {
  format: Props['format'] | Props['status'];
  size: Props['size'];
  theme: IrisTheme;
}

function sizeStyles({ size }) {
  return css`
    font-size: ${fontSize[size]};
    line-height: ${lineHeight[size]};
    margin-bottom: ${marginBottom[size]};
  `;
}

export const Paragraph = styled(Text)<StyleProps>`
  font-weight: 400;
  letter-spacing: 0.01rem;
  ${sizeStyles};
`;

const fontSize = {
  4: '0.625rem',
  3: '0.75rem',
  2: '0.875rem',
  1: '1.0rem',
};

const lineHeight = {
  4: '0.75rem',
  3: '1rem',
  2: '1.25rem',
  1: '1.25rem',
};

const marginBottom = {
  4: '0.75rem',
  3: '1rem',
  2: '1.25rem',
  1: '1.5rem',
};
