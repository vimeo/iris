import styled, { css } from 'styled-components';

import { Paragraph } from '../../../typography';
import { red, yellow } from '../../../color';

export const Counter = styled(Paragraph as any).attrs({
  size: 3,
  format: 'alternative',
})<{ warning: any; error: any }>`
  margin-top: 0.25rem;
  ${p =>
    p.warning &&
    css`
      font-weight: 800;
      color: ${yellow(600)};
    `};
  ${p =>
    p.error &&
    css`
      font-weight: 600;
      color: ${red(500)};
    `};
`;
