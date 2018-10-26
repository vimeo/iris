import React, { SFC } from 'react';

import { ButtonProps } from './ButtonProps';
import { ButtonStyled, ButtonLabelStyled } from './ButtonStyled';
import { ButtonFocusBloop } from './ButtonFocusBloop';
import ButtonIconElement from './ButtonIconElement';

const Button: SFC<ButtonProps> = ({
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
    const iconElement = (
        <ButtonIconElement size={size} iconLocation={iconLocation}>
            {icon}
        </ButtonIconElement>
    );

    const hasIcon = position =>
        icon && iconLocation === position ? iconElement : null;

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
            {...filteredProps}
        >
            {hasIcon('featuredLeft')}

            <ButtonLabelStyled>
                {hasIcon('beforeLabel')}
                {children}
                {hasIcon('afterLabel')}
            </ButtonLabelStyled>

            <ButtonFocusBloop theme={convertTheme(format)} size={size} />
        </ButtonStyled>
    );
};

const darkThemeFormats = ['primary', 'primaryDark', 'secondaryDark'];

const convertTheme = format =>
    darkThemeFormats.indexOf(format) !== -1 ? 'default' : 'dark';

export default Button;
