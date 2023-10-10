import styled from 'styled-components';

import { red, yellow } from '../../../color';
import { Paragraph } from '../../../typography';

interface MessageType {
  warning: boolean;
  error: boolean;
}

interface Attrs {
  theme: { name: string };
}

function attrs({ theme }: Attrs) {
  return {
    size: 3,
    format: theme.name === 'dark' ? 'soft' : 'alternative',
  };
}

export const Counter = styled(Paragraph).attrs(attrs)<MessageType>`
  margin-top: 0.25rem;
  margin-bottom: 0;

  ${(p) => p.warning && { fontWeight: 800, color: yellow(600) }};
  ${(p) => p.error && { fontWeight: 600, color: red(500) }};
`;
