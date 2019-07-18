import styled from 'styled-components';
import { InputOutlineWrapper } from './InputText';
import { InputFieldWrapperStyled } from '../InputWrapper/InputWrapperStyled';
import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../FocusOutline/FocusOutline';

export const InputTextFocusOutline = styled.div<FocusOutlineProps>`
  ${FocusOutline};
  transform: scale(0.98, 0.86);

  ${InputFieldWrapperStyled} > ${InputOutlineWrapper}:focus-within & {
    ${FocusOutlineFocused};
  }
`;
