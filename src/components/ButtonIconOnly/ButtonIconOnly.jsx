// @flow

import React from 'react';
import classNames from 'classnames';
import styles from './ButtonIconOnly.scss';

const displayName = 'ButtonIconOnly';

type Props = {
    autoSpacingHorizontal?: boolean,
    className?: string,
    format?: 'dark'| 'alternative' | 'light' | 'warning',
    icon: React$Element<*>,
    isButtonElement?: boolean,
    size?: 'sm' | 'md',
};

const ButtonIconOnly = ({
                        autoSpacingHorizontal = true,
                        className,
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
        (autoSpacingHorizontal ? styles.autoSpacingHorizontal : null),
        styles[format],
        className
    );

    const ButtonElement = isButtonElement ? 'button' : 'span';

    return (
            <ButtonElement
                {...filteredProps}
                className={componentClass}
            >
                    <span className={styles.Icon}>{icon}</span>
            </ButtonElement>
    );
};

ButtonIconOnly.displayName = displayName;

export default ButtonIconOnly;
