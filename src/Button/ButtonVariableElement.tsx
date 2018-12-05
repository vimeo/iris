import React, { SFC } from 'react';
import { ButtonProps, ButtonStyledProps } from './ButtonProps';

export const ButtonVariableElement: SFC<ButtonProps & ButtonStyledProps> = ({
    autoMargins,
    autoWidth,
    customFormat,
    hasFeaturedIcon,
    isButtonElement,
    isInline,
    ...props
}) => (isButtonElement ? <button {...props} /> : <span {...props} />);
