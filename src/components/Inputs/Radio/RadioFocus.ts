import styled from 'styled-components';
import { RadioStyled, RadioOverlayStyled } from './RadioStyled';
import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../../FocusOutline/FocusOutline';

export const RadioFocusOutline = styled.div<FocusOutlineProps>`
    ${FocusOutline}

    ${RadioStyled}:focus ~ ${RadioOverlayStyled} & {
        ${FocusOutlineFocused}
    }

    border-radius: 50%;
`;
