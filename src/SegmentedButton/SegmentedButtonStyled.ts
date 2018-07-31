import React from 'react';
import styled , {
    //@ts-ignore this resolves a "Cannot be named" TS error
    StyledComponentClass,
} from 'styled-components';
import {rem} from 'polished';
import { SegmentedButton_ButtonComponentProps } from './SegmentedButtonTypes';
import {
    ButtonCoreCSS,
    getDefaultCSSByFormat,
    getDisabledCSSByFormat,
    getHoverCSSByFormat,
    getSizeCSS,

} from '../Button/ButtonHelpers';
import COLORS from '../globals/js/constants/COLORS';

const OuterBorderRadius = rem(3);

export const LabelStyled = styled<React.HTMLProps<HTMLLabelElement>, 'label'>('label')`
    flex-grow: 1;
`;

export const OptionStyled = styled<SegmentedButton_ButtonComponentProps, 'span'>('span')`
    ${ButtonCoreCSS}
    ${getSizeCSS}
    ${getDefaultCSSByFormat({format: 'primaryOutline'})} 

    display: flex;
    position: relative;
    flex-grow: 1;
    justify-content: center;
    align-items: center;

    &:hover {
        ${getHoverCSSByFormat({format: 'primaryOutline'})};
        cursor: pointer;
    }

    input:checked + & {
        ${props => getDefaultCSSByFormat({format: props.format === 'light' ? 'primary' : 'primaryDark'})};

        &:hover {
            ${props => getHoverCSSByFormat({format: props.format === 'light' ? 'primary' : 'primaryDark'})};
        }
    }

    input:focus + & {
        box-shadow:
            0 0 0 ${rem(1)} ${COLORS.White},
            0 0 0 ${rem(3)} ${COLORS.VimeoBlue};
        z-index: 9;
    }

    ${LabelStyled}:first-child & {
        border-radius: ${OuterBorderRadius} 0 0 ${OuterBorderRadius};
    }

     ${LabelStyled}:last-child & {
        border-radius:  0 ${OuterBorderRadius} ${OuterBorderRadius} 0;
    }

    ${LabelStyled}:not(:first-child) & {
        // prevent double border on buttons.
        border-left-width: 0;
    }

    ${props => props.disabled && `

        ${getDisabledCSSByFormat({format: 'primaryOutline'})}
        &:hover {
            ${getDisabledCSSByFormat({format: 'primaryOutline'})}
            cursor: not-allowed;
        }`
    }
`;

export const InputStyled = styled<React.HTMLProps<HTMLInputElement>, 'input'>('input')`
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    margin: 0;
    appearance: none;
    align-items: center;
    justify-content: center;

    &:focus {
        outline: none;
    }
`;