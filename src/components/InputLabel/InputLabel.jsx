// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputLabel.scss';
import InputLabelStateIcon from '../InputLabelStateIcon/InputLabelStateIcon';


const displayName = 'InputLabel';

type Props = {
    className?: string,
    children?: React$Element<*>,
    disabled?: boolean,
    element?: 'label' | 'legend',
    format?: 'negative' | 'positive' | 'neutral',
};


const InputLabel = (props: Props): React$Element<*> => {

    // filter out props that are not meant to be passed in as an attribute from props and store the rest as "filteredProps" to be printed into the component as attrubutes in the tag (e.g. HTML attribute pass-through, event handlers)
    const {
        children,
        className,
        disabled,
        element = 'label',
        format = 'neutral',
        ...filteredProps
    } = props;

    // className builder
    const componentClass = classNames(
        styles.InputLabel,
        (disabled ? styles.disabled : null),
        className
    );

    const Icon = (
        <InputLabelStateIcon
            format={format}
        />
    );

    const Element = element;

    return (
        <Element
            {...filteredProps}
            className={componentClass}
        >
            {children}
            {format !== 'neutral' ? Icon : null}
        </Element>
    );
};

InputLabel.displayName = displayName;

export default InputLabel;
