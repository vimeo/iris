import styled from 'styled-components';
import { WrapperStyled } from './SelectWrapper';
import { InputFieldWrapperStyled } from '../InputWrapper/InputWrapperStyled';
import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../FocusOutline/FocusOutline';

export const SelectWrapperFocusOutline = styled.div<
  FocusOutlineProps
>`
  ${FocusOutline};
  transform: scale(0.98, 0.86);

  ${InputFieldWrapperStyled} > ${WrapperStyled}:focus-within & {
    ${FocusOutlineFocused};
  }
`;
