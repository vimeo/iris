// @flow

import React from 'react';
import classNames from 'classnames';
import styles from './ButtonIconOnly.scss';

const displayName = 'ButtonIconOnly';

type Props = {
    autoSpacingHorizontal?: boolean,
    className?: string,
    disabled?: boolean,
    format?: 'alternative' | 'dark'| 'light' | 'lightTransparent' | 'lightWarning'| 'midDark' | 'secondaryDark' | 'warning',
    icon: React$Element<*>,
    isButtonElement?: boolean,
    size?: 'sm' | 'md',
};

const ButtonIconOnly = ({
                        autoSpacingHorizontal = true,
                        className,
                        disabled,
                        format = 'dark',
                        icon,
                        isButtonElement = true,
                        size = 'sm',
                        ...filteredProps
                    }: Props): React$Element<*> => {


    // className builder
    const componentClass = classNames(
        styles.ButtonIconOnly,
        styles[size],
        (disabled ? styles.isDisabled : null),
        (autoSpacingHorizontal ? styles.autoSpacingHorizontal : null),
        styles[format],
        className
    );

    const ButtonElement = isButtonElement ? 'button' : 'span';

    return (
            <ButtonElement
                {...filteredProps}
                className={componentClass}
                disabled={disabled}
            >
                    <span className={styles.Icon}>{icon}</span>
            </ButtonElement>
    );
};

ButtonIconOnly.displayName = displayName;

export default ButtonIconOnly;
