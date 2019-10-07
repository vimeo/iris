import styled from 'styled-components';
import { ButtonStyled, Wrapper } from './ButtonInlineInputTextStyled';

import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../../../utils';

export const BIITFocusOutline = styled.div<FocusOutlineProps>`
  ${FocusOutline};

  ${Wrapper}:focus &,
  ${ButtonStyled}:focus & {
    ${FocusOutlineFocused};
  }
`;
