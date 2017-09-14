// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './CircularButton.scss';


const displayName = 'CircularButton';

type Props = {
    autoMarginsHorizontal?: boolean,
    className?: string,
    element?: 'a'| 'button'| 'span',
    format?: 'primary' | 'primaryOutline' | 'primaryDashed' | 'secondary' | 'secondaryOutline' | 'secondaryDashed' | 'alternative' | 'alternativeOutline' | 'alternativeDashed' | 'whitePrimary' | 'whiteSecondary' | 'negative' | 'negativeDashed' | 'negativeOutline',
    icon: React$Element<*>,
    size?: 'sm' | 'md' | 'lg',
};

const CircularButton = ({
                        autoMarginsHorizontal = true,
                        className,
                        element = 'button',
                        format = 'primary',
                        icon,
                        size = 'md',
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.CircularButton,
        styles[format],
        styles[size],
        (autoMarginsHorizontal ? styles.autoMarginsHorizontal : null),
        className
    );
    const CircularButtonElement = element;

    return (
            <CircularButtonElement
                {...filteredProps}
                className={componentClass}
            >
                {icon}
            </CircularButtonElement>
    );
};

CircularButton.displayName = displayName;

export default CircularButton;
