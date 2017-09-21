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
    hideLabel?: boolean,
};

const InputCheckbox = ({
                        className,
                        disabled,
                        errorMsg,
                        format = 'neutral',
                        helperMsg,
                        hideLabel,
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

    const labelWrapperClass = classNames(
        (hideLabel ? styles.isHiddenLabel : null)
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
                    hideLabel={hideLabel}
                >
                    <input
                        {...filteredProps}
                        aria-label={hideLabel ? label : null}
                        type="checkbox"
                        id={id}
                        className={componentClass}
                        disabled={disabled}
                    />
                    <span className={overlayClass} />
                    <FocusBloop className={styles.FocusBloop} />
                    <span className={labelWrapperClass}>{label}</span>
                </InputLabelInline>
            </div>
        </InputWrapperInline>
    );
};

InputCheckbox.displayName = displayName;

export default InputCheckbox;
