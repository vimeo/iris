import styled from 'styled-components';
import { InputCheckboxStyled, OverlayStyled } from './InputCheckboxStyled';
import {
    FocusBloop,
    FocusBloopFocused,
    FocusBloopProps,
} from '../FocusBloopNew/FocusBloopNew';

export const CheckboxFocusBloop = styled<FocusBloopProps, 'div'>('div')`
    ${FocusBloop}

    ${InputCheckboxStyled}:focus ~ ${OverlayStyled} & {
        ${FocusBloopFocused}
    }
`;
