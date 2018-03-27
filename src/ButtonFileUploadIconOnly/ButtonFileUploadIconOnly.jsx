// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './ButtonFileUploadIconOnly.scss';
import UploadIcon from '../icons/upload-cloud.svg';
import ButtonFileUploadWrapper from '../ButtonFileUploadWrapper/ButtonFileUploadWrapper';

const displayName = 'ButtonFileUploadIconOnly';

type Props = {
    autoSpacingHorizontal?: boolean,
    className?: string,
    format?: 'dark'| 'alternative' | 'light',
    icon: React$Element<*>,
    id: string,
    name?: string,
    label: string,
    size?: 'sm' | 'md',
};

const ButtonFileUploadIconOnly = ({
        autoSpacingHorizontal = true,
        className,
        format = 'dark',
        icon,
        id,
        name,
        label,
        size = 'sm',
        ...filteredProps
    }: Props): React$Element<*> => {

    // className builder
    const ButtonClass = classNames(
        styles.ButtonIconOnly,
        styles[size],
        (autoSpacingHorizontal ? styles.autoSpacingHorizontal : null),
        styles[format],
        (filteredProps.disabled ? styles.isDisabled : null),
        className
    );

    // icons
    const iconClass = classNames(
        styles.Icon
    );

    return (
        <ButtonFileUploadWrapper
            id={id}
            name={name}
            inputElementProps={filteredProps}
        >
                <label
                    className={ButtonClass}
                    htmlFor={id}
                >
                    <span className = {iconClass}>
                        <UploadIcon title={label}/>
                    </span>
                </label>
        </ButtonFileUploadWrapper>
    );
};

ButtonFileUploadIconOnly.displayName = displayName;

export default ButtonFileUploadIconOnly;
