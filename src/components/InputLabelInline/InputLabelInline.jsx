// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputLabelInline.scss';

const displayName = 'InputLabelInline';

type Props = {
    className?: string,
    disabled?: boolean,
    format?: 'negative' | 'positive' | 'neutral',
};

const InputLabelInline = ({
                            className,
                            format = 'neutral',
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

    return (
            <label
                {...filteredProps}
                className={componentClass}
            />
    );
};

InputLabelInline.displayName = displayName;

export default InputLabelInline;
