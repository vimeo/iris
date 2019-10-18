import styled from 'styled-components';
import { rgba } from 'polished';

export const FeaturedIcon = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  height: calc(100% + 2px);
  background: ${({ theme }) => rgba(theme.content.color, 0.2)};
  border-right: ${({ theme }) => rgba(theme.content.color, 0.5)};
  border-radius: 0.25rem 0 0 0.25rem;
`;
