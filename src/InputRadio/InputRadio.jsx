// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputRadio.scss';
import InputLabelInline from '../InputLabelInline/InputLabelInline';
import FocusBloop from '../FocusBloop';

const displayName = 'InputRadio';

type Props = {
    className?: string,
    disabled?: boolean,
    format?: 'negative' | 'positive' | 'neutral',
    id: string,
    label: string | React$Element<*>,
};

const InputRadio = ({
                        className,
                        disabled,
                        format = 'neutral',
                        id,
                        label,
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.InputRadio,
        className
    );

    const overlayClass = classNames(
        styles.InputRadioOverlay,
        className
    );

    return (
        <div className={styles.InputRadioWrapper}>
            <InputLabelInline
                htmlFor={id}
                format={format}
                disabled={disabled}
            >
                <input
                    {...filteredProps}
                    type="radio"
                    id={id}
                    className={componentClass}
                    disabled={disabled}
                />
                <span className={overlayClass} />
                <FocusBloop className={styles.FocusBloop} />
                {label}
            </InputLabelInline>
        </div>
    );
};

InputRadio.displayName = displayName;

export default InputRadio;
