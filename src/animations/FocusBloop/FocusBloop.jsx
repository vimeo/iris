// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './FocusBloop.scss';

const displayName = 'FocusBloop';

type Props = {
    className?: string,
};

const FocusBloop = (props: Props): React$Element<*> => {

    const componentClass = classNames(
        styles.FocusBloop,
        props.className
    );

    return (
                <div className={componentClass} />
    );
};

FocusBloop.displayName = displayName;

export default FocusBloop;
