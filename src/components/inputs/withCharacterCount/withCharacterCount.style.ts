import styled from 'styled-components';

import { Paragraph } from '../../../typography';
import { red, yellow } from '../../../color';

interface Props {
  warning: boolean;
  error: boolean;
}

function attrs({ theme }) {
  return {
    size: 3,
    format: theme.name === 'dark' ? 'soft' : 'alternative',
  };
}

export const Counter = styled(Paragraph as any).attrs(attrs)<Props>`
  margin-top: 0.25rem;
  margin-bottom: 0;

  ${(p) => p.warning && { fontWeight: 800, color: yellow(600) }};
  ${(p) => p.error && { fontWeight: 600, color: red(500) }};
`;
