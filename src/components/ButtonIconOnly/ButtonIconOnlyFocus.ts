import styled from 'styled-components';
import { ButtonStyled, SpanStyled } from './ButtonIconOnlyStyled';
import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../../utils';

export const ButtonIconOnlyFocus = styled.div<FocusOutlineProps>`
    ${FocusOutline}

    ${SpanStyled}:focus &,
    ${ButtonStyled}:focus & {
        ${FocusOutlineFocused}
    }
`;
