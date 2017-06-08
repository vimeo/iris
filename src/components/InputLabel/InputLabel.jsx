// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputLabel.scss';

const displayName = 'InputLabel';

type Props = {
    className?: string,
    children?: React$Element<*>,
    disabled?: boolean,
};


const InputLabel = (props: Props): React$Element<*> => {

    // filter out props that are not meant to be passed in as an attribute from props and store the rest as "filteredProps" to be printed into the component as attrubutes in the tag (e.g. HTML attribute pass-through, event handlers)
    const {
        className,
        disabled,
        ...filteredProps
    } = props;

    // className builder
    const componentClass = classNames(
        styles.InputLabel,
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

InputLabel.displayName = displayName;

export default InputLabel;
