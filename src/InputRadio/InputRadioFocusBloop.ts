// @ts-ignore
import React from 'react';
// @ts-ignore
import styled, { StyledComponentClass } from 'styled-components';
import { InputRadioStyled, InputRadioOverlayStyled } from './InputRadioStyled';
import {
    FocusBloop,
    FocusBloopFocused,
    FocusBloopProps,
} from '../FocusBloopNew/FocusBloopNew';

export const RadioFocusBloop = styled<FocusBloopProps, 'div'>('div')`
    ${FocusBloop}

    ${InputRadioStyled}:focus ~ ${InputRadioOverlayStyled} & {
        ${FocusBloopFocused}
    }

    border-radius: 50%;
`;
