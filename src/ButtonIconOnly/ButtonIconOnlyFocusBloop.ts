import styled from 'styled-components';
import { ButtonStyled, SpanStyled } from './ButtonIconOnlyStyled';
import {
    FocusBloop,
    FocusBloopFocused,
    FocusBloopProps,
} from '../FocusBloopNew/FocusBloopNew';

export const ButtonIconOnlyFocusBloop = styled<FocusBloopProps, 'div'>('div')`
    ${FocusBloop}

    ${SpanStyled}:focus &,
    ${ButtonStyled}:focus & {
        ${FocusBloopFocused}
    }
`;
