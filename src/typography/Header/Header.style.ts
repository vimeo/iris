import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { Props } from './Header.types';
import { antialias } from '../typography';
import { Text } from '../Text/Text';
import { scale } from '../scale';

export const Header = styled(Text)<Props>`
  ${variantStyles};
  ${antialias};
`;

function variantStyles({
  variant = 'normal',
  size = '1',
  theme,
  format,
}: Props) {
  const color = theme.formats[format];
  const sizeVariant = size === 'plusUltra' ? size : variant;

  switch (sizeVariant) {
    case 'thin':
      return css`
        display: block;
        color: ${color};
        ${sizes};
        font-weight: 400;
        letter-spacing: 0.03125rem;
      `;
    case 'plusUltra':
      return css`
        display: block;
        color: ${color};
        font-size: calc(2.25rem + 3.5vw);
        line-height: calc(2.0625rem + 3.5125vw);
        letter-spacing: calc(-0.125rem - 0.0025vw);
        font-weight: 800;
        max-width: calc(96vw - 2rem);
        margin-bottom: calc(1.5rem + 0.875vw);
      `;
    default:
      return css`
        display: block;
        color: ${color};
        ${sizes};
      `;
  }
}

function sizes({ size }) {
  const sizeInt = parseInt(size);

  const grade = 800 - 100 * sizeInt;
  const fontSize = rem(scale(grade));

  const lineHeight =
    Math.round((((sizeInt - 1) / 2.5) * 0.1 + 1.06) * 100) / 100;
  const letterSpacing = Math.min(
    Math.round((-1.2 - (sizeInt - 1) * -0.2) * 100) / 100,
    0
  );
  const marginBottom = Math.max(
    0.5,
    Math.round((1.45 - (sizeInt - 1) / 5) * 100) / 100
  );

  return css`
    font-size: ${fontSize};
    font-weight: 700;
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing}px;
    margin-bottom: ${marginBottom}rem;
  `;
}
