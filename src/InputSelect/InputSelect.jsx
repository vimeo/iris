// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputSelect.scss';
import InputWrapper from '../InputWrapper/InputWrapper';
import ChevronIris from '../icons/chevron-down.svg';

const displayName = 'InputSelect';

type Props = {
    className?: string,
    children?: React$Element<*>,
    disabled?: boolean,
    errorMsg?: React$Element<*>,
    format?: 'negative' | 'positive' | 'neutral',
    helperMsg?: React$Element<*>,
    id: string,
    isInline?: boolean,
    label: string | React$Element<*>,
    options: Array<{label: string, value: string}>,
    showLabel?: boolean,
    size?: 'md' | 'lg',
    theme?: 'default' | 'dark',
};

const InputSelect = ({
                        className,
                        children,
                        disabled,
                        errorMsg,
                        format = 'neutral',
                        helperMsg,
                        id,
                        isInline,
                        label,
                        options,
                        showLabel = true,
                        size = 'md',
                        theme = 'default',
                        ...filteredProps
                    }: Props): React$Element<*> => {

    const isNegative = format === 'negative';
    const ariaInvalid = isNegative;
    const hasIcon = isNegative || format === 'positive';

    // className builder
    const componentClass = classNames(
        styles.InputSelect,
        styles[format],
        styles[theme + 'Theme'],
        styles[size],
        (disabled ? styles.disabled : null),
        (isInline ? styles.isInline : null),
        (hasIcon ? styles.hasIcon : null),
        className
    );

    const arrowClass = classNames(
        styles.IconArrow,
        styles['IconArrow-' + format],
        styles[theme + 'Theme'],
        styles['IconArrow-' + size],
        (disabled ? styles['IconArrow-disabled'] : null)
    );

    let ariaLabel;

    if (!showLabel) {
        ariaLabel = label;
    }

    // Build options if there are options passed as an array
    const optionList = [];
    if (options) {
        options.map(function(key, i) {
            const thisOption = options[i];
            const {
                label, // eslint-disable-line no-shadow
                ...optionProps
            } = thisOption;

            optionList.push(<option {...optionProps} key={i}>{label}</option>);
        });
    }

    return (
            <InputWrapper
                showLabel= {showLabel}
                disabled= {disabled}
                errorMsg = {errorMsg}
                format = {format}
                helperMsg = {helperMsg}
                label = {label}
                labelForId = {id}
                isInline = {isInline}
                size={size}
                theme={theme}
            >
                <div className={styles.InputSelectWrapper}>
                    <select
                        {...filteredProps}
                        className={componentClass}
                        children={optionList.length ? optionList : children}
                        id={id}
                        disabled={disabled}
                        aria-label={ariaLabel}
                        aria-invalid={ariaInvalid}
                    />
                    <div className={arrowClass}>
                        <ChevronIris />
                    </div>
                </div>
            </InputWrapper>
    );
};

InputSelect.displayName = displayName;

export default InputSelect;
