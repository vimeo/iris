// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './FocusBloop.scss';

const displayName = 'FocusBloop';

type Props = {
    className?: string,
    theme?: 'dark' | 'default',
};

const FocusBloop = ({
                        className,
                        theme = 'default',
                        ...filteredProps
                    }: Props): React$Element<*> => {
    const componentClass = classNames(
        styles.FocusBloop,
        styles[theme + 'Theme'],
        className
    );

    return (
                <div {...filteredProps} className={componentClass}/>
    );
};

FocusBloop.displayName = displayName;

export default FocusBloop;
