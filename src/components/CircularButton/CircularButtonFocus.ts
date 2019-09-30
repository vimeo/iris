import styled from 'styled-components';

import { CircularButtonStyled } from './CircularButtonStyled';
import {
  FocusOutline,
  FocusOutlineFocused,
} from '../FocusOutline/FocusOutline';

export const CircularButtonFocusOutline = styled.div<any>`
  ${FocusOutline}

  ${CircularButtonStyled}:focus & {
    ${FocusOutlineFocused}
  }

  border-radius: 50%;
`;
