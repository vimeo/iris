// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputText.scss';
import InputWrapper from '../InputWrapper/InputWrapper';

const displayName = 'InputText';

type Props = {
    className?: string,
    disabled?: boolean,
    errorMsg?: React$Element<*>,
    format?: 'negative' | 'positive' | 'neutral',
    inlineButton?: React$Element<*>,
    isInline?: boolean,
    helperMsg?: React$Element<*>,
    label: string | React$Element<*>,
    id: string,
    preMessage?: React$Element<*>,
    showLabel?: boolean,
    size?: 'md' | 'lg',
    type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' |'url',
};

const InputText = ({
                        className,
                        disabled,
                        errorMsg,
                        format = 'neutral',
                        isInline,
                        helperMsg,
                        inlineButton,
                        label,
                        id,
                        preMessage,
                        showLabel = true,
                        size = 'md',
                        type = 'text',
                        ...filteredProps
                    }: Props): React$Element<*> => {

    const isNegative = format === 'negative';
    const ariaInvalid = isNegative;
    const hasIcon = isNegative || format === 'positive';

    const componentClass = classNames(
            styles.InputText,
            (styles[format]),
            (hasIcon ? styles.hasIcon : null),
            (inlineButton ? styles.hasInlineButton : null),
            styles[size],
            className
        );

    let ariaLabel;

    if (!showLabel) {
        ariaLabel = label;
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
                preMessage={preMessage}
                size={size}
            >

                    <input
                        {...filteredProps}
                        aria-label={ariaLabel}
                        aria-invalid={ariaInvalid}
                        disabled={disabled}
                        className={componentClass}
                        id={id}
                        type={type}
                    />
                    {inlineButton}
            </InputWrapper>

    );
};

InputText.displayName = displayName;

export default InputText;
