import React, { SFC, HTMLProps } from 'react';
import DeleteIcon from '../icons/dismiss-x.svg';
import ButtonIconOnly from '../ButtonIconOnly';
import { ButtonDialogCloseProps as Props } from './ButtonDialogCloseTypes';

const ButtonDialogClose: SFC<Props & HTMLProps<HTMLButtonElement>> = ({
    buttonTitle = 'Close',
    autoSpacingHorizontal = true,
    className,
    format = 'dark',
    isButtonElement = true,
    size = 'sm',
    ...filteredProps
}) => (
    <ButtonIconOnly
        {...filteredProps}
        className={className}
        autoSpacingHorizontal={autoSpacingHorizontal}
        format={format}
        icon={<DeleteIcon title={buttonTitle} />}
        isButtonElement={isButtonElement}
        size={size}
        type="button"
    />
);

export default ButtonDialogClose;
