import React from 'react';
import { rem } from 'polished';
import styled, { css } from 'styled-components';
import ButtonIconElement from './ButtonIconElement';
import {
    ButtonCoreCSS,
    ButtonStyleSettings,
    getActiveCSSByFormat,
    getAutoWidthCSS,
    getDefaultCSSByFormat,
    getDisabledCSSByFormat,
    getHoverCSSByFormat,
    getSizeCSS,
    getVerticalAutoMarginCSS,
} from './ButtonHelpers';
import { Omit } from '../globals/js/type-helpers';

export interface ButtonProps
    extends Omit<React.HTMLProps<HTMLElement>, 'size'> {
    /**
     * Determines if there should be margins automatically, set to false to suppress.
     */
    autoMargins?: boolean;
    /**
     * At what breakpoint should the button go to `width: auto`?
     */
    autoWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'fluid';
    children: React.ReactNode;
    className?: string;
    /**
     * For custom color themes, specify color strings (any valid css color value) for the background and text color for default and hover states.
     *  *`hoverTextColor` is optional and falls back to `defaultTextColor`
     *  *`hoverBorderColor`  and `defaultBorderColor` are optional and fall back to background color pairings
     */
    customFormat?: {
        defaultBackgroundColor: string,
        defaultBorderColor?: string,
        defaultTextColor: string,
        hoverBackgroundColor: string,
        hoverBorderColor?: string,
        hoverTextColor?: string,
    };
    /**
     * Chooses the color theme
     */
    format?:
        | 'primary'
        | 'primaryDark'
        | 'primaryOutline'
        | 'primaryTextOnly'
        | 'secondary'
        | 'secondaryOutline'
        | 'secondaryTextOnly'
        | 'alternative'
        | 'alternativeOutline'
        | 'darkSecondary'
        | 'success'
        | 'successOutline'
        | 'warning'
        | 'warningOutline'
        | 'warningTextOnly'
        | 'lightTransparent'
        | 'lightTextOnly';
    /**
     * This should be an SVG loaded through SVG loader.
     */
    icon?: React.ReactNode;
    /**
     * Choose icon location (default: beforeLabel)
     */
    iconLocation?: 'beforeLabel' | 'afterLabel' |'featuredLeft';
    /**
     * If `false` the button will be rendered as a span tag
     */
    isButtonElement?: boolean;
    /**
     * removes all margins
     */
    isInline?: boolean;
    /**
     * Choose the button size
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' |'xl';
}

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
}: ButtonProps) => {
    const ButtonElementType = isButtonElement ? 'button' : 'span';

    return <ButtonElementType {...rest} />;
};


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

const ButtonElement = styled<ButtonProps, any>(ButtonVariableElement)`
    ${ButtonCoreCSS}

    border-radius: ${props => (props.size === 'xs' ? rem(2) : rem(3))};

    ${props => props.customFormat ? css`
        background: ${props.customFormat.defaultBackgroundColor};
        border-color: ${props.customFormat.defaultBorderColor || props.customFormat.defaultBackgroundColor};
        color: ${props.customFormat.defaultTextColor};
    `
    : getDefaultCSSByFormat}
    
    ${getSizeCSS}
    ${maybeGetFeaturedIconCSS}

    &:hover {
            cursor: pointer;
        ${props => props.customFormat ? css`
            background: ${props.customFormat.hoverBackgroundColor};
            border-color: ${props.customFormat.hoverBorderColor || props.customFormat.hoverBackgroundColor};
            color: ${props.customFormat.hoverTextColor || props.customFormat.defaultTextColor};
        `
        : getHoverCSSByFormat}
    }

    &:active {
        outline: 0;
        transform: scale(0.98);
        ${props => props.customFormat ? css`
            background: ${props.customFormat.hoverBackgroundColor};
            border-color: ${props.customFormat.hoverBorderColor || props.customFormat.hoverBackgroundColor};
            color: ${props.customFormat.hoverTextColor || props.customFormat.defaultTextColor};
        `
        :getActiveCSSByFormat};
    }

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
        ${getDisabledCSSByFormat} cursor: not-allowed;
        outline: 0;
        transform: scale(1);
        pointer-events: none;
    }

    ${getVerticalAutoMarginCSS} ${getAutoWidthCSS};
`;

const ButtonLabel = styled.span`
    display: inline-flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const Button: React.SFC<ButtonProps> = ({
    autoMargins = true,
    autoWidth = 'sm',
    children,
    format = 'primary',
    icon,
    iconLocation = 'beforeLabel',
    isButtonElement = true,
    isInline = false,
    size = 'md',
    ref: _,
    ...filteredProps
}) => {
    const hasIconBefore = icon && iconLocation === 'beforeLabel';
    const hasIconAfter = icon && iconLocation === 'afterLabel';
    const hasFeaturedIcon = icon && iconLocation === 'featuredLeft';

    const iconElement = (
        <ButtonIconElement
            size={size}
            iconLocation={iconLocation}
        >
            {icon}
        </ButtonIconElement>
    );


    return (
        <ButtonElement
            autoMargins={autoMargins}
            autoWidth={autoWidth}
            format={format}
            hasFeaturedIcon={hasFeaturedIcon}
            isButtonElement={isButtonElement}
            isInline={isInline}
            size={size}
            {...filteredProps}
        >
            {hasFeaturedIcon && iconElement}
            <ButtonLabel>
                {hasIconBefore && iconElement}
                {children}
                {hasIconAfter && iconElement}
            </ButtonLabel>
        </ButtonElement>
    );
};

export default Button;
