import styled from 'styled-components';
import { Wrapper } from './InputTextFloatingLabelStyled';
import { InputFieldWrapperStyled } from '../InputWrapper/InputWrapperStyled';
import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../FocusOutline/FocusOutline';

export const ITFLFocusOutline = styled.div<FocusOutlineProps>`
  ${FocusOutline};
  transform: scale(0.98, 0.86);

  ${InputFieldWrapperStyled} > ${Wrapper}:focus-within & {
    ${FocusOutlineFocused};
  }
`;
