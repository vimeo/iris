// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputLabelStateIcon.scss';
import AlertIcon from '../icons/circle-warning.svg';
import SuccessIcon from '../icons/checkmark.svg';

const displayName = 'InputLabelStateIcon';

type Props = {
    format?: 'negative' | 'positive' | 'neutral',
    className?: string,
};

const InputLabelStateIcon = ({
                            className,
                            format,
                            ...filteredProps
                        }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.InputLabelStateIcon,
        styles[format],
        className
    );

    let Icon = null;

    if (format === 'positive') {
        Icon = SuccessIcon;
    }
    else {
        Icon = AlertIcon;
    }

    return (
            <Icon
                {...filteredProps}
                className={componentClass}
            />
    );
};

InputLabelStateIcon.displayName = displayName;

export default InputLabelStateIcon;
