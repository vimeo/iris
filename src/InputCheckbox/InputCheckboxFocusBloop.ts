// @ts-ignore
import React from 'react';
import styled, { 
    // @ts-ignore
    StyledComponentClass
 } from 'styled-components';
import { InputCheckboxStyled, OverlayStyled } from './InputCheckboxStyled';
import { FocusBloop, FocusBloopFocused } from '../FocusBloopNew/FocusBloopNew';


export const CheckboxFocusBloop = styled<{theme?: 'default' | 'dark'}, 'div'>('div')`
    ${props => FocusBloop({
        format: props.theme === 'dark'
            ? 'primaryDark'
            : null
    })}

    ${InputCheckboxStyled}:focus ~ ${OverlayStyled} & {
        ${props => FocusBloopFocused({
            format: props.theme === 'dark'
                ? 'primaryDark'
                : null
        })}
    }
`;