// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './ButtonInlineInputText.scss';

const displayName = 'ButtonInlineInputText';

type Props = {
    className?: string,
    icon: React$Element<*>,
    format?: 'subtle' | 'neutral' | 'strong',
    size: 'md' | 'lg',
};

const ButtonInlineInputText = ({
    className,
    icon,
    format = 'neutral',
    size = 'md',
    ...filteredProps
}: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.ButtonInlineInputText,
        styles[size],
        styles[format],
        className,
    );

    return (
        <button
        {...filteredProps}
        className={componentClass}
        >
            {icon}
        </button>
    );
};

ButtonInlineInputText.displayName = displayName;

export default ButtonInlineInputText;
