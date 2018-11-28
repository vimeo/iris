import styled from 'styled-components';
import {
    Wrapper,
    InputStyled,
} from '../ButtonFileUploadWrapper/ButtonFileUploadWrapper';
import {
    FocusBloop,
    FocusBloopFocused,
    FocusBloopProps,
} from '../FocusBloopNew/FocusBloopNew';
import { LabelStyled } from './ButtonFileUploadIconOnlyStyled';

export const ButtonFileUploadIconOnlyFocusOutline = styled<
    FocusBloopProps,
    'div'
>('div')`
    ${FocusBloop}

    ${Wrapper}:focus-within &,
    ${LabelStyled}:focus &,
    ${InputStyled}:focus & {
        ${FocusBloopFocused}
    }
`;
