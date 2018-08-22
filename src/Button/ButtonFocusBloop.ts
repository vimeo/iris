// @ts-ignore
import React from 'react';
import styled, { 
    // @ts-ignore
    Styles,
    // @ts-ignore
    StyledComponentClass
} from "styled-components";

import { ButtonProps } from './ButtonProps';
import { ButtonStyled as Button } from './ButtonStyled';
import { LinkElementStyled as ButtonFocusWrapper } from './ButtonFocusWrapper';
import { TriggerWrapperStyled } from '../MenuPanel/MenuPanelStyled';
import { FocusBloop, FocusBloopFocused} from '../FocusBloopNew/FocusBloopNew';


export const ButtonFocusBloop = styled<ButtonProps, any>('div')`
    ${props => FocusBloop({
        size: props.size,
        format: props.format
    })}

    ${Button}:focus &,
    ${TriggerWrapperStyled}:focus &,
    ${ButtonFocusWrapper} a:focus &,
    ${ButtonFocusWrapper}:focus-within & {
        ${props => FocusBloopFocused({
            format: props.format
        })}
    }
`;
