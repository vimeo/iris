import React from 'react';
import { rem } from 'polished';
import styled, { 
    css,
    // @ts-ignore
    StyledComponentClass
 } from 'styled-components';

import {
    ButtonCoreCSS,
    getActiveCSSByFormat,
    getAutoWidthCSS,
    getDefaultCSSByFormat,
    getDisabledCSSByFormat,
    getHoverCSSByFormat,
    getSizeCSS,
    getVerticalAutoMarginCSS,
} from './ButtonHelpers';

import { ButtonStyleSettings } from './ButtonStyleSettings';
import { ButtonProps } from './ButtonProps';


const maybeGetFeaturedIconCSS = props => {
    const thisButtonSize = ButtonStyleSettings.Sizes[props.size] || ButtonStyleSettings.Sizes.md;
    if(props.hasFeaturedIcon && thisButtonSize) {
        const combinedPaddingBySize = `${thisButtonSize.minHeight} + 1rem`;
        return `
            padding-right: calc(${combinedPaddingBySize});
            padding-left: calc(${combinedPaddingBySize});
        `
    } 
};

const ButtonVariableElement = ({
    //@ts-ignore
    autoMargins, // filter out prop
    //@ts-ignore
    autoWidth, // filter out prop
    //@ts-ignore
    customFormat, // filter out prop
     //@ts-ignore
    hasFeaturedIcon, // filter out prop
    isButtonElement, // filter out prop
    //@ts-ignore
    isInline, // filter out prop
    ...rest
}: ButtonProps) => isButtonElement
    ? <button {...rest} />
    : <span {...rest} />;


export const ButtonStyled = styled<ButtonProps, any>(ButtonVariableElement)`
    ${ButtonCoreCSS}
    ${getSizeCSS}
    ${maybeGetFeaturedIconCSS}
    ${getVerticalAutoMarginCSS}
    ${getAutoWidthCSS};

    border-radius: ${props => (props.size === 'xs'
        ? rem(2)
        : rem(3))};

    ${props => props.customFormat
        ? customDefault(props)
        : getDefaultCSSByFormat}

    &:hover {
        cursor: pointer;
        ${props => props.customFormat
            ? customHoverActive(props)
            : getHoverCSSByFormat}
    }

    &:active {
        outline: none;
        transform: scale(0.98);
        ${props => props.customFormat
            ? customHoverActive(props)
            :getActiveCSSByFormat};
    }

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
        cursor: not-allowed;
        outline: none;
        transform: scale(1);
        pointer-events: none;
        ${getDisabledCSSByFormat}
    }
`;

export const ButtonLabelStyled = styled.span`
    display: inline-flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const customDefault = (props) => css`
    background: ${props.customFormat.defaultBackgroundColor};
    border-color: ${props.customFormat.defaultBorderColor || props.customFormat.defaultBackgroundColor};
    color: ${props.customFormat.defaultTextColor};
`;

const customHoverActive = (props) => css`
    background: ${props.customFormat.hoverBackgroundColor};
    border-color: ${props.customFormat.hoverBorderColor || props.customFormat.hoverBackgroundColor};
    color: ${props.customFormat.hoverTextColor || props.customFormat.defaultTextColor};
`;