import React, { SFC, HTMLProps } from 'react';
import DeleteIcon from '../Icons/dismiss-x.svg';
import { ButtonIconOnly } from '../ButtonIconOnly/ButtonIconOnly';
import { ButtonDialogCloseProps as Props } from './ButtonDialogCloseTypes';
import { Omit } from '../Utils/Omit';

export const ButtonDialogClose: SFC<
    Props & Omit<HTMLProps<HTMLButtonElement>, 'size'>
> = ({
    buttonTitle = 'Close',
    autoSpacingHorizontal = true,
    className,
    format = 'dark',
    isButtonElement = true,
    size = 'sm',
    ...props
}) => (
    <ButtonIconOnly
        {...props}
        className={className}
        autoSpacingHorizontal={autoSpacingHorizontal}
        format={format}
        icon={<DeleteIcon title={buttonTitle} />}
        isButtonElement={isButtonElement}
        size={size}
        type="button"
    />
);
