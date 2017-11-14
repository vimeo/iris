// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './LoaderCircular.scss';

const displayName = 'LoaderCircular';

type Props = {
    className?: string,
    format?: 'dark' | 'light' | 'adaptive';
    size?: 'xs' | 'sm' | 'md' | 'lg',
};

const LoaderCircular = ({
                        className,
                        format = 'dark',
                        size = 'md',
                        ...filteredProps
                    }: Props): React$Element<*> => {

    const componentClass = classNames(
        styles.LoaderCircular,
        styles[format],
        styles[size],
        className,
    );

    return (
        <div className={componentClass} {...filteredProps} />
    );
};

LoaderCircular.displayName = displayName;

export default LoaderCircular;
