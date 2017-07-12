// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputLabelInline.scss';
import InputLabelStateIcon from '../InputLabelStateIcon/InputLabelStateIcon';

const displayName = 'InputLabelInline';

type Props = {
    className?: string,
    children: React$Element<*>,
    disabled?: boolean,
    format?: 'negative' | 'positive' | 'neutral',
    fieldLevelErrors?: boolean;
};

const InputLabelInline = ({
                            className,
                            children,
                            format = 'neutral',
                            fieldLevelErrors,
                            disabled,
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.InputLabelInline,
        styles.md,
        styles[format],
        (disabled ? styles.disabled : null),
        className
    );

    const Icon = (
            <InputLabelStateIcon
                format = {format}
            />
    );

    return (
            <label
                {...filteredProps}
                className={componentClass}
            >
            <span>
            {children}
            { format !== 'neutral' && fieldLevelErrors ? Icon : null}
            </span>
            </label>
    );
};

InputLabelInline.displayName = displayName;

export default InputLabelInline;
