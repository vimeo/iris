// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './LinkText.scss';

const displayName = 'LinkText';

type Props = {
    children: React$Element<*>,
    className?: string,
    element?: 'a' | 'span',
    format?: 'primary' | 'warning' | 'light',
    decoration?: 'loud' | 'inherit' | 'silent',
};

const LinkText = ({
                    children,
                    className,
                    element = 'a',
                    format = 'primary',
                    decoration,
                    ...filteredProps
                }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.LinkText,
        styles[format],
        styles[decoration],
        className
    );

    const Element = element;
    return (
            <Element
                {...filteredProps}
                className={componentClass}
            >
                    {children}
            </Element>
    );
};

LinkText.displayName = displayName;

export default LinkText;
