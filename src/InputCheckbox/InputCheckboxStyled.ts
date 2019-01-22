import styled from 'styled-components';
import { rem } from 'polished';
import { InputLabelInline } from '../InputLabelInline/InputLabelInline';
import * as COLORS from '../Color/Color';
import {
    InputCheckboxProps,
    InputCheckboxOverlayStyledProps,
    InputCheckboxHiddenLabelStyledProps,
} from './InputCheckboxTypes';
import {
    sharedInlineInputWrapperStyles,
    sharedInlineInputStyles,
    sharedInlineInputFillStyles,
    sharedInlineInputActivatedFillStyles,
    sharedInlineInputElementReplaceStyles,
} from './InputCheckboxHelpers';

export const InputCheckboxWrapperStyled = styled.div`
    ${sharedInlineInputWrapperStyles}
    padding-left: ${rem(32)};
 `;

export const OverlayStyled = styled.span<InputCheckboxOverlayStyledProps>`
    ${sharedInlineInputElementReplaceStyles};
    border-radius: ${rem(2)};

    ${props =>
        props.theme === 'dark' &&
        `
        border-color: ${COLORS.RegentGray};
        background-color: transparent;

        &:hover {
            border-color: ${COLORS.White};
        }
    `} &:after {
        ${sharedInlineInputFillStyles} top: 0.16rem;
        left: 0.155rem;
        width: 1rem;
        height: 1rem;

        background-repeat: no-repeat;
        background-position: 2% 2%;
        background-size: 98%;

        ${props =>
            props.checkedStyle === 'default' &&
            `
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath fill='%23ffffff' d='M6.667 14.39L1.306 9.22l1.388-1.44 3.973 3.83 8.639-8.33 1.388 1.44z'/%3E%3C/svg%3E");
        `} ${props =>
            props.checkedStyle === 'indeterminate' &&
            `
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23ffffff' d='M4 9h12a1 1 0 0 1 1 1 1 1 0 0 1-1 1H4a1 1 0 0 1-1-1 1 1 0 0 1 1-1z'/%3E%3C/svg%3E");
        `};
    }
`;

export const InputCheckboxStyled = styled<any, 'input'>('input')`
    ${sharedInlineInputStyles}

    &:focus + ${OverlayStyled} {
        ${props =>
            props.theme === 'default' &&
            `
            border-color: ${COLORS.VimeoBlueDarkened};
        `}

        ${props =>
            props.theme === 'dark' &&
            `
            border-color: ${COLORS.White};
        `}
    }

    &:checked {
        &:after {
            ${sharedInlineInputActivatedFillStyles}
        }

        &:before,
        &:focus:before {
            border: 0;
            background-color: ${COLORS.VimeoBlue};
            box-shadow: none;
        }

        + ${OverlayStyled} {
            border: 0;
            background: ${COLORS.VimeoBlue};

            ${props =>
                props.theme === 'dark' &&
                `
                background-color: ${COLORS.VimeoBlueDarkened};
            `}

            &:after {
                ${sharedInlineInputActivatedFillStyles}
            }
        }
    }
`;

export const InputCheckboxLabelStyled = styled<InputCheckboxProps, any>(
    InputLabelInline,
)`
    min-height: 1.125rem;

    &:hover {
        ${InputCheckboxStyled}:checked + ${OverlayStyled} {
            ${props =>
                props.theme === 'dark'
                    ? `background-color: ${COLORS.VimeoBlue};`
                    : `background-color: ${COLORS.VimeoBlueDarkened};`};
        }

        ${props =>
            props.theme === 'default' &&
            `
            ${InputCheckboxStyled}:focus + ${OverlayStyled} {
                border-color: ${COLORS.VimeoBlueDarkened};
            }
        `};
    }
`;

export const HiddenLabelStyled = styled<
    InputCheckboxHiddenLabelStyledProps,
    'span'
>('span')`
    ${props => props.hideLabel && 'display: none;'};
`;
