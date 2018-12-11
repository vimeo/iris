import styled from 'styled-components';
import { ButtonStyled, SpanStyled } from './ButtonIconOnlyStyled';
import {
    FocusOutline,
    FocusOutlineFocused,
    FocusOutlineProps,
} from '../FocusOutline/FocusOutline';

export const ButtonIconOnlyFocus = styled.div<FocusOutlineProps>`
    ${FocusOutline}

    ${SpanStyled}:focus &,
    ${ButtonStyled}:focus & {
        ${FocusOutlineFocused}
    }
`;
