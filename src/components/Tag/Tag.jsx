// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Tag.scss';
import Button from '../Button/Button';

const displayName = 'Tag';

type Props = {
    autoMargins?: boolean,
    autoWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'fluid',
    children: React$Element<*>,
    className?: string,
    isButtonElement?: boolean,
    isInline?: boolean,
    size?: 'xs' | 'sm' | 'md' | 'lg',
};

const Tag = ({
                autoMargins,
                autoWidth = 'xs',
                children,
                className,
                isButtonElement,
                size = 'md',
                ...filteredProps
            }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.Tag,
        className
    );

    return (
        <Button
            {...filteredProps}
            autoMargins={autoMargins}
            autoWidth={autoWidth}
            isButtonElement={isButtonElement}
            className={componentClass}
            format="secondary"
            size={size}
            children={children}
        />
    );
};

Tag.displayName = displayName;

export default Tag;
