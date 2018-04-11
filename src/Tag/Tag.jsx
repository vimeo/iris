// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Tag.scss';
// $FlowFixMe
import Button from '../Button/Button';
import DeleteIcon from '../icons/dismiss-x.svg';

const displayName = 'Tag';

type Props = {
    autoMargins?: boolean,
    autoWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'fluid',
    children: React$Element<*>,
    className?: string,
    isButtonElement?: boolean,
    isInline?: boolean,
    onDismiss: any,
    size?: 'xs' | 'sm' | 'md' | 'lg',
};

const Tag = ({
                autoMargins,
                autoWidth = 'xs',
                children,
                className,
                isButtonElement,
                onDismiss,
                size = 'md',
                ...filteredProps
            }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.Tag,
        className
    );

    const handleDismiss = (e) => {
        e.preventDefault();
        if (typeof onDismiss === 'function') {
            onDismiss(e);
        }
    };

    let iconProps;

    if (onDismiss) {
        iconProps = {
            icon: <DeleteIcon />,
            iconLocation: 'afterLabel',
        };
    }

    return (
        <Button
            {...filteredProps}
            {...iconProps}
            autoMargins={autoMargins}
            autoWidth={autoWidth}
            isButtonElement={isButtonElement}
            className={componentClass}
            format="secondary"
            size={size}
            children={children}
            onClick={handleDismiss}
        />
    );
};

Tag.displayName = displayName;

export default Tag;
