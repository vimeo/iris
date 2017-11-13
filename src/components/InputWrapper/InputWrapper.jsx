// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputWrapper.scss';
import InputLabel from '../InputLabel/InputLabel';
import InputMessageArea from '../InputMessageArea/InputMessageArea';
import SuccessIcon from '../../globals/svg/checkmark.svg';
import AlertIcon from '../../globals/svg/circle-warning.svg';

const displayName = 'InputWrapper';

type Props = {
    className?: string,
    children: React$Element<*>,
    disabled?: boolean,
    errorMsg?: string | React$Element<*>,
    format?: 'negative' | 'positive' | 'neutral',
    helperMsg?: string | React$Element<*>,
    isInline?: boolean,
    label?: string | React$Element<*>,
    labelForId?: string,
    preMessage?: React$Element<*>,
    showLabel: boolean,
    size?: 'md' | 'lg',
    theme?: 'default' | 'dark',
};

const InputWrapper = ({
                        className,
                        children,
                        disabled,
                        format = 'neutral',
                        labelForId,
                        errorMsg,
                        helperMsg,
                        isInline,
                        label,
                        preMessage,
                        showLabel = true,
                        size = 'md',
                        theme = 'default',
                        ...filteredProps
                    }: Props): React$Element<*> => {

    let fieldIcon;

    switch (format) {
        case 'negative':
            fieldIcon = <AlertIcon />;
            break;
        case 'positive' :
            fieldIcon = <SuccessIcon />;
            break;
        default:
            fieldIcon = null;
    }

    // className builder
    const componentClass = classNames(
        styles.InputWrapper,
        (isInline ? styles.isInline : null),
        styles[theme + 'Theme'],
        className
    );

    const iconClass = classNames(
            styles.Icon,
            styles['Icon-' + format],
            (fieldIcon ? styles['Icon-isShowing'] : null),
            styles['Icon-' + size],
            styles[theme + 'Theme'],
    );

    const labelElement = (
        <InputLabel
            disabled={disabled}
            htmlFor={labelForId}
            theme={theme}
        >
            {label}
        </InputLabel>
    );

    const inputIcon = fieldIcon && (
            <div className={iconClass}>
                {fieldIcon}
            </div>
    );


    return (
        <div
            className={componentClass}
            {...filteredProps}
        >

            {showLabel ? labelElement : null}
            <div className={styles.PositioningWrapper}>
                <div className={styles.InputFieldWrapper}>
                    {children}
                    {inputIcon}
                </div>
                {preMessage}
                <InputMessageArea
                    errorMsg={errorMsg}
                    helperMsg={helperMsg}
                    theme={theme}
                />
            </div>
        </div>
    );
};

InputWrapper.displayName = displayName;

export default InputWrapper;
