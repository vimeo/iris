import React from 'react';
import {
    ButtonProps,
    ButtonStyledProps,
} from './ButtonProps';

export const ButtonVariableElement = ({
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
}: ButtonProps & ButtonStyledProps) => isButtonElement
    ? <button {...rest} />
    : <span {...rest} />;