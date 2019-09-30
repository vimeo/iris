import styled from 'styled-components';
import {
  InputRadioStyled,
  InputRadioOverlayStyled,
} from './InputRadioStyled';
import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../FocusOutline/FocusOutline';

export const RadioFocusOutline = styled.div<FocusOutlineProps>`
    ${FocusOutline}

    ${InputRadioStyled}:focus ~ ${InputRadioOverlayStyled} & {
        ${FocusOutlineFocused}
    }

    border-radius: 50%;
`;
