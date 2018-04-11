// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './ButtonFileUpload.scss';
import UploadIcon from '../icons/upload-cloud.svg';
import ButtonFileUploadWrapper from '../ButtonFileUploadWrapper/ButtonFileUploadWrapper';
const displayName = 'ButtonFileUpload';

type Props = {
    autoMargins?: boolean,
    autoWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'fluid',
    className?: string,
    disabled?: boolean,
    format?: 'primary' | 'primaryOutline' | 'primaryTextOnly' | 'secondary' | 'secondaryOutline' | 'secondaryTextOnly' | 'alternative' | 'alternativeOutline' | 'success' | 'successOutline' | 'warning' | 'lightTransparent' | 'lightTextOnly',
    id: string,
    isInline?: boolean,
    name?: string,
    label: string,
    showIcon?: boolean,
    size?: 'xs' | 'sm' | 'md' | 'lg',
};

const ButtonFileUpload = ({
                        autoMargins = true,
                        autoWidth = 'sm',
                        className,
                        format = 'primary',
                        id,
                        isInline,
                        label,
                        name,
                        showIcon = true,
                        size = 'md',
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const ButtonClass = classNames(
        styles.Button,
        styles.FauxButton,
        styles[format],
        styles[size],
        (autoWidth !== 'fluid' ? styles['autoWidth_' + autoWidth] : null),
        (autoMargins ? styles.autoMarginsHorizontal : null),
        (isInline || !autoMargins ? null : styles.autoMarginsVertical),
        (filteredProps.disabled ? styles.isDisabled : null),
        className
    );

    // icons
    const iconClass = classNames(
        styles.Icon,
        styles.Icon_beforeLabel
    );

    const iconElement = (
        <span className = {iconClass}>
            <UploadIcon />
        </span>
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
                    <span className = {styles.buttonLabel}>
                        {showIcon ? iconElement : null}
                        {label}
                    </span>
                </label>
        </ButtonFileUploadWrapper>
    );
};

ButtonFileUpload.displayName = displayName;

export default ButtonFileUpload;
