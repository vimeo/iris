// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputWrapper.scss';
import InputLabel from '../InputLabel/InputLabel';
import InputMessageArea from '../InputMessageArea/InputMessageArea';
import SuccessIcon from '../../globals/svg/checkmark_iris.svg';
import AlertIcon from '../../globals/svg/alert_iris.svg';

const displayName = 'InputWrapper';

type Props = {
    className?: string,
    children: React$Element<*>,
    disabled?: boolean,
    errorMsg?: React$Element<*>,
    format?: 'negative' | 'positive' | 'neutral',
    helperMsg?: React$Element<*>,
    isInline?: boolean,
    label?: string,
    labelForId?: string,
    showLabel: boolean,
    size?: 'md' | 'lg',
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
                        showLabel = true,
                        size = 'md',
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
        className
    );

    const iconClass = classNames(
            styles.Icon,
            styles['Icon-' + format],
            (fieldIcon ? styles['Icon-isShowing'] : null),
            styles['Icon-' + size],
    );

    const labelElement = (
        <InputLabel disabled={disabled} htmlFor={labelForId}>{label}</InputLabel>
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
            <div>
                <div className={styles.InputFieldWrapper}>
                    {children}
                    {inputIcon}
                </div>
                <InputMessageArea
                    errorMsg={errorMsg}
                    helperMsg={helperMsg}
                />
            </div>
        </div>
    );
};

InputWrapper.displayName = displayName;

export default InputWrapper;
