// @flow
import React from 'react';
import DeleteIcon from '../icons/dismiss-x.svg';
// $FlowFixMe
import ButtonIconOnly from '../ButtonIconOnly';

const displayName = 'ButtonDialogClose';

type Props = {
    buttonTitle?: string,
    className?: string,
    autoSpacingHorizontal?: boolean,
    className?: string,
    format?: 'dark'| 'alternative' | 'light' | 'warning' | 'lightWarning' | 'lightTransparent',
    isButtonElement?: boolean,
    size?: 'sm' | 'md',
};

const ButtonDialogClose = ({
                        buttonTitle = 'Close',
                        autoSpacingHorizontal = true,
                        className,
                        format = 'dark',
                        isButtonElement = true,
                        size = 'sm',
                        ...filteredProps
                    }: Props): React$Element<*> => {

    return (
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
};

ButtonDialogClose.displayName = displayName;

export default ButtonDialogClose;
