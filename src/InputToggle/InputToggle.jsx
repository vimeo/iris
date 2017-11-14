// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputToggle.scss';
import InputLabelInline from '../InputLabelInline/InputLabelInline';
import InputWrapperInline from '../InputWrapperInline/InputWrapperInline';
import FocusBloop from '../FocusBloop';

const displayName = 'InputToggle';

type Props = {
    className?: string,
    disabled?: boolean,
    errorMsg?: React$Element<*>,
    format?: 'negative' | 'positive' | 'neutral',
    helperMsg?: React$Element<*>,
    hideLabel?: boolean,
    id: string,
    label: string | React$Element<*>,
    size?: 'md' | 'lg',
    theme?: 'default' | 'dark',
};

const InputToggle = ({
                        className,
                        disabled,
                        errorMsg,
                        format = 'neutral',
                        helperMsg,
                        hideLabel,
                        id,
                        label,
                        size = 'md',
                        theme = 'default',
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.InputToggle,
        styles[format],
        styles[theme + 'Theme'],
        styles[size],
        className
    );

    // ToggleWrapper cLass
    const toggleWrapperClass = classNames(
        styles.InputToggleWrapper,
        styles['InputToggleWrapper-' + size],
        (disabled ? styles.isDisabled : null),
    );

    // Toggle cLass
    const toggleOverlayClass = classNames(
        styles.toggleOverlay,
        styles['toggleOverlay-' + format],
        styles[theme + 'Theme'],
        styles['toggleOverlay-' + size],
    );

    const labelWrapperClass = classNames(
        (hideLabel ? styles.isHiddenLabel : null)
    );


    return (
        <InputWrapperInline
            errorMsg={errorMsg}
            helperMsg={helperMsg}
            theme={theme}
        >
            <div className={toggleWrapperClass}>
                <InputLabelInline
                    htmlFor={id}
                    format={format}
                    disabled={disabled}
                    hideLabel={hideLabel}
                    theme={theme}
                    className={styles.InputToggleLabel}
                >
                    <input
                        type="checkbox"
                        id={id}
                        {...filteredProps}
                        className={componentClass}
                        disabled={disabled}
                    />
                    <div className={toggleOverlayClass} />
                    <FocusBloop className={styles['FocusBloop-' + size]} theme={theme} />
                    <span className={labelWrapperClass}>{label}</span>
                </InputLabelInline>
            </div>
        </InputWrapperInline>
    );
};

InputToggle.displayName = displayName;

export default InputToggle;
