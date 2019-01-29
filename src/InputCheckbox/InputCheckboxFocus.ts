import styled from 'styled-components';
import {
  InputCheckboxStyled,
  OverlayStyled,
} from './InputCheckboxStyled';
import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../FocusOutline/FocusOutline';

export const CheckboxFocusOutline = styled<FocusOutlineProps, 'div'>(
  'div',
)`
    ${FocusOutline}

    ${InputCheckboxStyled}:focus ~ ${OverlayStyled} & {
        ${FocusOutlineFocused}
    }
`;
