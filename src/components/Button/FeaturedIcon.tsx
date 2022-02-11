import styled from 'styled-components';
import { rem, rgba } from 'polished';

import { borderRadii } from './Button.config';

export const FeaturedIcon = styled.div<any>`
  position: absolute;
  top: -1px;
  left: -1px;
  height: calc(100% + 2px);
  background: ${({ theme }) => rgba(theme.content.color, 0.2)};
  border-right: ${({ theme }) => rgba(theme.content.color, 0.5)};
  border-radius: ${(p) =>
    `${rem(borderRadii[p.size])} 0 0 ${rem(borderRadii[p.size])}`};
`;
