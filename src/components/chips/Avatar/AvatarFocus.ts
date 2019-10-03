import styled from 'styled-components';

import {
  FocusOutline,
  FocusOutlineProps,
} from '../../FocusOutline/FocusOutline';

export const AvatarFocusOutline = styled.div<FocusOutlineProps>`
  ${FocusOutline};
  border-radius: 100%;
  height: calc(100% + 0.3rem);
`;
