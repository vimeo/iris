// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './ProgressBar.scss';

const displayName = 'ProgressBar';

type Props = {
    className?: string,
    currentValue: number,
    format?: 'neutral' | 'warning' | 'empty' | 'disabled',
    animated?: boolean,
    size?: 'md' | 'lg' | 'xl',

};

const ProgressBar = ({
    className,
    currentValue,
    format = 'neutral',
    animated,
    size = 'md',
    ...filteredProps
}: Props): React$Element<*> => {

    // className builder
    const progressClass = classNames(
        styles.ProgressBar,
        styles[format],
        styles[size],
        (animated ? styles.isActive : null),
    );

    const containerClass = classNames(
        styles.Container,
        styles[format],
        styles[size],
        className
    );

    let progressValue;

    if (currentValue >= 0 && currentValue < 101) {
        progressValue = currentValue;
    }
    else {
        progressValue = 0;
        if (window && window.console) {
            console.warn('Warning: you have passed an invalid number to the "currentValue" prop of this Progressbar. The number must be between 0-100, inclusive.');
        }
    }

    // empty mode gets full width when animated
    const progressWidth = format === 'empty' && animated ? 100 : progressValue;

    return (
            <div
                {...filteredProps}
                className={containerClass}
            >
                <div
                    className={progressClass}
                    role="progressbar"
                    aria-valuenow={progressValue}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${progressWidth}%` }}
                />
            </div>
    );
};

ProgressBar.displayName = displayName;

export default ProgressBar;
