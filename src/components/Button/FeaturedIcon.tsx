import styled from 'styled-components';
import { rem, rgba } from 'polished';

import { borderRadiusSizes } from './Button.config';

export const FeaturedIcon = styled.div<any>`
  position: absolute;
  top: -1px;
  left: -1px;
  height: calc(100% + 2px);
  background: ${({ theme }) => rgba(theme.content.color, 0.2)};
  border-right: ${({ theme }) => rgba(theme.content.color, 0.5)};
  border-radius: ${(p) =>
    `${rem(borderRadiusSizes[p.size])} 0 0 ${rem(
      borderRadiusSizes[p.size]
    )}`};
`;
