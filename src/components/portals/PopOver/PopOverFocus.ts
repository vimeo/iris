import styled from 'styled-components';
import { TriggerWrapperStyled } from './PopOverStyled';

import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../../FocusOutline/FocusOutline';

export const PopOverFocusOutline = styled.div<FocusOutlineProps>`
  ${FocusOutline};

  ${TriggerWrapperStyled}:focus & {
    ${FocusOutlineFocused};
  }
`;
