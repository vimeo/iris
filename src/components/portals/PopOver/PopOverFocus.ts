import styled from 'styled-components';
import { TriggerWrapperStyled } from './PopOverStyled';

import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../../../utils';

export const PopOverFocusOutline = styled.div<FocusOutlineProps>`
  ${FocusOutline};

  ${TriggerWrapperStyled}:focus & {
    ${FocusOutlineFocused};
  }
`;
