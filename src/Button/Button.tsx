import React from 'react';
import { rem } from 'polished';
import styled, { css } from 'styled-components';
import ButtonIconElement from './ButtonIconElement';
import {
    getActiveCSSByFormat,
    getAutoWidthCSS,
    getDefaultCSSByFormat,
    getDisabledCSSByFormat,
    getHoverCSSByFormat,
    getSizeCSS,
    getVerticalAutoMarginCSS,
} from './ButtonHelpers';
import VimeoStyleSettings from '../globals/js/style-settings/VimeoStyleSettings';
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
    customTheme?: {
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
        | 'primaryOutline'
        | 'primaryTextOnly'
        | 'secondary'
        | 'secondaryOutline'
        | 'secondaryTextOnly'
        | 'alternative'
        | 'alternativeOutline'
        | 'success'
        | 'successOutline'
        | 'warning'
        | 'lightTransparent'
        | 'lightTextOnly';
    /**
     * This should be an SVG loaded through SVG loader.
     */
    icon?: React.ReactNode;
    /**
     * Choose icon location (default: beforeLabel)
     */
    iconLocation?: 'beforeLabel' | 'afterLabel';
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
    size?: 'xs' | 'sm' | 'md' | 'lg';
}

const ButtonVariableElement = ({
    //@ts-ignore
    autoMargins, // filter out prop
    //@ts-ignore
    autoWidth, // filter out prop
    isButtonElement, // filter out prop
    //@ts-ignore
    isInline, // filter out prop
    ...rest
}: ButtonProps) => {
    const ButtonElementType = isButtonElement ? 'button' : 'span';

    return <ButtonElementType {...rest} />;
};

const ButtonElement = styled<ButtonProps, any>(ButtonVariableElement)`
    display: inline-flex;

    position: relative;

    width: 100%;
    margin: 0;

    font-family: ${VimeoStyleSettings.type.fontFamily.regular};
    font-weight: 700;

    border-width: ${rem(1)};
    border-style: solid;
    border-radius: ${props => (props.size === 'xs' ? rem(2) : rem(3))};

    transition: all 0.1s ease-in-out;
    text-align: center;
    vertical-align: middle;
    letter-spacing: 0.1px;
    align-items: center;
    justify-content: center;
    -webkit-font-smoothing: antialiased;

    ${props=> props.customTheme ? css`
        background: ${props.customTheme.defaultBackgroundColor};
        border-color: ${props.customTheme.defaultBorderColor || props.customTheme.defaultBackgroundColor};
        color: ${props.customTheme.defaultTextColor};
    `
    : getDefaultCSSByFormat}
    
    ${getSizeCSS}

    &:hover {
            cursor: pointer;
        ${props=> props.customTheme ? css`
            background: ${props.customTheme.hoverBackgroundColor};
            border-color: ${props.customTheme.hoverBorderColor || props.customTheme.hoverBackgroundColor};
            color: ${props.customTheme.hoverTextColor || props.customTheme.defaultTextColor};
        `
        : getHoverCSSByFormat}
    }

    &:active {
        outline: 0;
        transform: scale(0.98);
        ${props=> props.customTheme ? css`
            background: ${props.customTheme.hoverBackgroundColor};
            border-color: ${props.customTheme.hoverBorderColor || props.customTheme.hoverBackgroundColor};
            color: ${props.customTheme.hoverTextColor || props.customTheme.defaultTextColor};
        `
        :getActiveCSSByFormat};
    }

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
        ${getDisabledCSSByFormat} cursor: not-allowed;
        outline: 0;
        transform: scale(1);
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

    const iconElement = (
        <ButtonIconElement size={size} iconLocation={iconLocation}>
            {icon}
        </ButtonIconElement>
    );

    return (
        <ButtonElement
            autoMargins={autoMargins}
            autoWidth={autoWidth}
            format={format}
            isButtonElement={isButtonElement}
            isInline={isInline}
            size={size}
            {...filteredProps}
        >
            <ButtonLabel>
                {hasIconBefore ? iconElement : null}
                {children}
                {hasIconAfter ? iconElement : null}
            </ButtonLabel>
        </ButtonElement>
    );
};

export default Button;
