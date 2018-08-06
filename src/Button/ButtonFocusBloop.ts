// @ts-ignore
import React from 'react';
import styled, { 
    // @ts-ignore
    Styles,
    // @ts-ignore
    StyledComponentClass
} from "styled-components";
import { rgba, rem } from "polished";
import COLORS from '../globals/js/constants/COLORS';
import { ButtonProps } from './ButtonProps';
import { ButtonStyled as Button } from './ButtonStyled';
import { LinkElementStyled as ButtonFocusWrapper } from './ButtonFocusWrapper';
import { TriggerWrapperStyled } from '../MenuPanel/MenuPanelStyled';


const bloopOffset = 8;
const bloopBorderWidth = 2;

export const ButtonFocusBloop = styled<ButtonProps, any>('div')`
    z-index: 1;
    top: ${rem(bloopOffset / 2 * -1)};
    left: ${rem(bloopOffset / 2 * -1)};
    position: absolute;
    width: calc(100% + ${rem(bloopOffset)});
    height: calc(100% + ${rem(bloopOffset)});
    border-radius: ${props =>
        props.size === 'xs'
            ? rem(4)
            : rem(6)};

    transition: 
        border 150ms,
        transform 150ms;
    pointer-events: none;
    transform: scale(0.94);
    border: ${rem(bloopBorderWidth / 2)} solid ${props =>
        bloopBorder(props.format, 0)};

    ${Button}:focus &,
    ${TriggerWrapperStyled}:focus &,
    ${ButtonFocusWrapper} a:focus &,
    ${ButtonFocusWrapper}:focus-within & {
        transform: scale(1);
        border: ${rem(bloopBorderWidth)} solid ${props => 
            bloopBorder(props.format, 0.5)};
    }
`;

const conflictColors = [
    'primary',
    'primaryDark',
    'secondaryDark'
];

const isDark = format => 
    conflictColors.indexOf(format) !== -1;

const bloopBorder =
    (format, opacity) =>
        isDark(format)
            ? rgba(COLORS.VimeoBlueLightened, (opacity * 1.334))
            : rgba(COLORS.VimeoBlue, opacity);
