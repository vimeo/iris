// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Type.scss';

function typeGenerator(tagname: string, defaultElement: string) {
    type Props = {
        children: React$Element<*>,
        element?: 'h1'| 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'li' | 'div' | 'span' | 'label' | 'legend',
        className?: string,
        format?: 'light' | 'dark',
    };

    const thisComponent = ({
                        children,
                        className,
                        element = defaultElement,
                        format = 'dark',
                        ...filteredProps
                    }: Props): React$Element<*> => {

        const componentClass = classNames(
            styles[tagname],
            (format === 'light' ? styles.light : null),
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

    return thisComponent;
}


export default typeGenerator;
