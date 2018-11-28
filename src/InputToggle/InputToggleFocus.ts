import styled from 'styled-components';
import {
    FocusBloop,
    FocusBloopFocused,
    FocusBloopProps,
} from '../FocusBloopNew/FocusBloopNew';
import {
    ToggleWrapper,
    ToggleLabel,
    Input,
    ToggleOverlay,
} from './InputToggleStyled';
import { rem } from 'polished';

export const InputToggleFocusOutline = styled<FocusBloopProps, 'div'>('div')`
    ${FocusBloop}
    border-radius: ${rem(13)};

    ${Input}:focus &,
    ${ToggleLabel}:focus &,
    ${ToggleOverlay}:focus &,
    ${ToggleWrapper}:focus-within & {
        ${FocusBloopFocused}
        border-radius: ${rem(13)};
    }
`;
