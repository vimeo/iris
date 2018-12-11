import React, { SFC, HTMLProps } from 'react';
import { ButtonIconOnlyProps } from './ButtonIconOnlyTypes';
import {
    ButtonStyled,
    IconWrapperStyled,
    SpanStyled,
    DEFAULT_BUTTON_FORMAT as DARK,
} from './ButtonIconOnlyStyled';
import { Omit } from '../globals/js/type-helpers';
import { ButtonIconOnlyFocus } from './ButtonIconOnlyFocus';

export const ButtonIconOnly: SFC<
    ButtonIconOnlyProps & Omit<HTMLProps<HTMLElement>, 'size'>
> = ({
    autoSpacingHorizontal = true,
    format = DARK,
    icon,
    isButtonElement = true,
    size = 'sm',
    ref: _,
    ...props
}) => {
    const ButtonElement = isButtonElement ? ButtonStyled : SpanStyled;

    return (
        <ButtonElement
            {...props}
            autoSpacingHorizontal={autoSpacingHorizontal}
            format={format}
            size={size}
        >
            <IconWrapperStyled>{icon}</IconWrapperStyled>
            <ButtonIconOnlyFocus />
        </ButtonElement>
    );
};
