// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './LoaderCircular.scss';

const displayName = 'LoaderCircular';

type Props = {
    className?: string,
};

const LoaderCircular = ({
                        className,
                        ...filteredProps
                    }: Props): React$Element<*> => {

    const componentClass = classNames(
        styles.LoaderCircular,
        styles.primary,
        className,
    );

    return (
        <div className={componentClass} {...filteredProps} />
    );
};

LoaderCircular.displayName = displayName;

export default LoaderCircular;
