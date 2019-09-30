import styled from 'styled-components';
import { LabelStyled } from './ButtonFileUploadStyled';
import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../FocusOutline/FocusOutline';
import { Wrapper } from '../ButtonFileUploadWrapper/ButtonFileUploadWrapper';

export const ButtonFileUploadFocusOutline = styled.div<
  FocusOutlineProps
>`
  ${FocusOutline};

  ${Wrapper}:focus-within &,
  ${LabelStyled}:focus & {
    ${FocusOutlineFocused}
  }
`;
