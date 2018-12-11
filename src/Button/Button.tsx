import React, { SFC } from 'react';
import { ButtonProps } from './ButtonProps';
import { ButtonStyled, ButtonLabelStyled } from './ButtonStyled';
import { ButtonFocus } from './ButtonFocus';
import { ButtonIconElement } from './ButtonIconElement';

export const Button: SFC<ButtonProps> = ({
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
    ...props
}) => {
    const hasIcon = position =>
        icon &&
        iconLocation === position && (
            <ButtonIconElement size={size} iconLocation={iconLocation}>
                {icon}
            </ButtonIconElement>
        );

    return (
        <ButtonStyled
            autoMargins={autoMargins}
            autoWidth={autoWidth}
            format={format}
            title={children}
            hasFeaturedIcon={iconLocation === 'featuredLeft'}
            isButtonElement={isButtonElement}
            isInline={isInline}
            size={size}
            {...props}
        >
            {hasIcon('featuredLeft')}

            <ButtonLabelStyled>
                {hasIcon('beforeLabel')}
                {children}
                {hasIcon('afterLabel')}
            </ButtonLabelStyled>

            <ButtonFocus theme={convertTheme(format)} size={size} />
        </ButtonStyled>
    );
};

const darkThemeFormats = ['primary', 'primaryDark', 'secondaryDark'];

const convertTheme = format =>
    darkThemeFormats.indexOf(format) !== -1 ? 'default' : 'dark';
