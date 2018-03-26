import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';
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

    font-family: ${VimeoStyleSettings.type.fontFacePrimary};
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

    ${getDefaultCSSByFormat} ${getSizeCSS}

&:hover {
        ${getHoverCSSByFormat} cursor: pointer;
    }

    &:active {
        outline: 0;
        transform: scale(0.98);
        ${getActiveCSSByFormat};
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
