// @ts-ignore
import React from 'react';
import styled, {
// @ts-ignore
    Styles,
    // @ts-ignore
    StyledComponentClass,
} from 'styled-components';
import { rem } from 'polished';

import { ButtonStyled as Button } from './ButtonStyled';
import { LinkElementStyled as ButtonFocusWrapper } from './ButtonFocusWrapper';
import { TriggerWrapperStyled } from '../MenuPanel/MenuPanelStyled';
import { FocusBloop, FocusBloopFocused } from '../FocusBloopNew/FocusBloopNew';

export const ButtonFocusBloop = styled<any, 'div'>('div')`
    ${FocusBloop}

    ${Button}:focus &,
    ${TriggerWrapperStyled}:focus &,
    ${ButtonFocusWrapper} a:focus &,
    ${ButtonFocusWrapper}:focus-within & {
        ${FocusBloopFocused}
    }

    ${props =>
        props.size === 'xs' &&
        `
        border-radius: ${rem(4)}`}
`;
