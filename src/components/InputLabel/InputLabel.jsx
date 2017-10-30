// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputLabel.scss';
import InputLabelStateIcon from '../InputLabelStateIcon/InputLabelStateIcon';
import { Header6 } from '../../utility_components/Type/Type';

const displayName = 'InputLabel';

type Props = {
    className?: string,
    children?: React$Element<*>,
    disabled?: boolean,
    element?: 'label' | 'legend',
    format?: 'negative' | 'positive' | 'neutral',
    theme?: 'default' | 'dark',
};


const InputLabel = (props: Props): React$Element<*> => {

    // filter out props that are not meant to be passed in as an attribute from props and store the rest as "filteredProps" to be printed into the component as attrubutes in the tag (e.g. HTML attribute pass-through, event handlers)
    const {
        children,
        className,
        disabled,
        element = 'label',
        format = 'neutral',
        theme = 'default',
        ...filteredProps
    } = props;

    // className builder
    const componentClass = classNames(
        styles.InputLabel,
        styles[theme + 'Theme'],
        (disabled ? styles.disabled : null),
        className
    );

    const Icon = (
        <InputLabelStateIcon
            format={format}
        />
    );

    return (
        <Header6
            {...filteredProps}
            element={element}
            className={componentClass}
        >
            {children}
            {format !== 'neutral' ? Icon : null}
        </Header6>
    );
};

InputLabel.displayName = displayName;

export default InputLabel;
