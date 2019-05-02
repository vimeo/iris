import styled from 'styled-components';
import { InputCheckboxStyled, Overlay } from './InputCheckboxStyled';
import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../FocusOutline/FocusOutline';

export const CheckboxFocusOutline = styled.div<FocusOutlineProps>`
    ${FocusOutline}

    ${InputCheckboxStyled}:focus ~ ${Overlay} & {
        ${FocusOutlineFocused}
    }
`;
