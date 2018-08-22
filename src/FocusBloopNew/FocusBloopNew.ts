// @ts-ignore
import React from 'react';
import { 
    css,
    // @ts-ignore
    StyledComponentClass,
    // @ts-ignore
    Styles,
    // @ts-ignore
    InterpolationFunction,
    // @ts-ignore
    ThemeProps
 } from 'styled-components';
import { rgba, rem } from 'polished';
import COLORS from '../globals/js/constants/COLORS';
import { FocusBloopNewProps } from './FocusBloopNewTypes';


export const FocusBloop = ({
    size = 'xs',
    format = null,
    // @ts-ignore
    ...rest
}: FocusBloopNewProps) => css`
    z-index: 1;
    top: ${rem(-4)};
    left: ${rem(-4)};
    position: absolute;
    width: calc(100% + ${rem(8)});
    height: calc(100% + ${rem(8)});
    border-radius: ${size === 'xs'
        ? rem(4)
        : rem(6)};

    transition: 
        border 150ms,
        transform 150ms;
    pointer-events: none;
    transform: scale(0.94);
    border: ${rem(1)} solid ${borderColor(format, 0)};
`;

export const FocusBloopFocused = ({
    format = null,
    // @ts-ignore
    ...rest
}: FocusBloopNewProps) => css`
    transform: scale(1);
    border: ${rem(2)} solid ${borderColor(format, 0.5)};
`;

const conflictColors = [
    'primary',
    'primaryDark',
    'secondaryDark'
];

const isDark = format => 
    conflictColors.indexOf(format) !== -1;

const borderColor =
    (format, opacity) =>
        isDark(format)
            ? rgba(COLORS.VimeoBlueLightened, (opacity * 1.334))
            : rgba(COLORS.VimeoBlue, opacity);
