import React from 'react';

import { ButtonProps } from './ButtonProps';
import { ButtonStyled, ButtonLabelStyled } from './ButtonStyled';
import ButtonIconElement from './ButtonIconElement';


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
            iconLocation={iconLocation}>
            {icon}
        </ButtonIconElement>
    );

    return (
        <ButtonStyled
            autoMargins={autoMargins}
            autoWidth={autoWidth}
            format={format}
            isButtonElement={isButtonElement}
            isInline={isInline}
            size={size}
            {...filteredProps}>

            {hasFeaturedIcon && iconElement}

            <ButtonLabelStyled>
                {hasIconBefore && iconElement}
                {children}
                {hasIconAfter && iconElement}
            </ButtonLabelStyled>

        </ButtonStyled>
    );
}


export default Button;