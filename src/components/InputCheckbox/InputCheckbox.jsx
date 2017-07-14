// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputCheckbox.scss';
import InputLabelInline from '../InputLabelInline/InputLabelInline';
import InputWrapperInline from '../InputWrapperInline/InputWrapperInline';
import FocusBloop from '../../animations/FocusBloop/FocusBloop';

const displayName = 'InputCheckbox';

type Props = {
    className?: string,
    disabled?: boolean,
    errorMsg?: React$Element<*>,
    format?: 'negative' | 'positive' | 'neutral',
    helperMsg?: React$Element<*>,
    id: string,
    label: string,
};

const InputCheckbox = ({
                        className,
                        disabled,
                        errorMsg,
                        format = 'neutral',
                        helperMsg,
                        id,
                        label,
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.InputCheckbox,
        className
    );

    const overlayClass = classNames(
        styles.InputCheckboxOverlay,
        className
    );

    return (
        <InputWrapperInline
            errorMsg={errorMsg}
            helperMsg={helperMsg}
        >
            <div className={styles.InputCheckboxWrapper}>
                <InputLabelInline
                    htmlFor={id}
                    format={format}
                    disabled={disabled}
                    className={styles.InputCheckboxLabel}
                    fieldLevelErrors
                >
                    <input
                        {...filteredProps}
                        type="checkbox"
                        id={id}
                        className={componentClass}
                        disabled={disabled}
                    />
                    <span className={overlayClass} />
                    <FocusBloop className={styles.FocusBloop} />
                    {label}
                </InputLabelInline>
            </div>
        </InputWrapperInline>
    );
};

InputCheckbox.displayName = displayName;

export default InputCheckbox;
