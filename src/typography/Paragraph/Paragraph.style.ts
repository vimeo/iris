import styled, { css } from 'styled-components';

import { Props } from './Paragraph.types';

import { fontFamily } from '../typography';
import { IrisTheme } from '../../themes';

interface StyleProps {
  format: Props['format'] | Props['status'];
  size: Props['size'];
  theme: IrisTheme;
}

export const Text = styled.p<StyleProps>`
  ${formatStyles};
`;

const p = {
  font: {
    4: '0.625rem / 0.75rem',
    3: '0.75rem / 1rem',
    2: '0.875rem / 1.25rem',
    1: '1rem / 1.25rem',
  },
  marginBottom: {
    4: '0.75rem',
    3: '1rem',
    2: '1.25rem',
    1: '1.5rem',
  },
};

function formatStyles({ size = '4', ...props }: StyleProps) {
  const color = props.theme.formats[props.format];

  return css`
    color: ${color};
    font: 400 ${p.font[size]} ${fontFamily};
    letter-spacing: 0.01rem;
    margin-bottom: ${p.marginBottom[size]};
  `;
}
