import styled from 'styled-components';
import { InputRadioStyled, InputRadioOverlayStyled } from './InputRadioStyled';
import {
    FocusOutline,
    FocusOutlineFocused,
    FocusOutlineProps,
} from '../FocusOutline/FocusOutline';

export const RadioFocusOutline = styled<FocusOutlineProps, 'div'>('div')`
    ${FocusOutline}

    ${InputRadioStyled}:focus ~ ${InputRadioOverlayStyled} & {
        ${FocusOutlineFocused}
    }

    border-radius: 50%;
`;
