// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './ButtonLoadingState.scss';
import Button from '../Button/Button';
import LoaderCircular from '../LoaderCircular/LoaderCircular';

const displayName = 'ButtonLoadingState';

type Props = {
    className?: string,
    children: React$Element<*>,
    icon?: React$Element<*>,
    isLoading?: boolean,
    onClick?: Function,
    size?: 'xs' | 'sm' | 'md' | 'lg',
};

const ButtonLoadingState = ({
    className,
    children,
    icon,
    isLoading,
    onClick,
    size = 'md',
    ...buttonProps
}: Props): React$Element<*> => {

    // className builder

    const componentClass = classNames(
        (isLoading ? styles.isLoading : null),
        className
    );
    const buttonContent = isLoading ? (
            <LoaderCircular size={size} format="adaptive" />
        ) : children;

    const maybeIcon = isLoading ? undefined : icon;

    const handleClick = (e: Event) => {
        if (isLoading) {
            e.preventDefault();
            return false;
        }

        if (typeof onClick === 'function') {
            onClick();
        }

        return true;
    };

    return (
            <Button
                {...buttonProps}
                size={size}
                className={componentClass}
                onClick={handleClick}
                icon={maybeIcon}
            >
                {buttonContent}
            </Button>
    );
};

ButtonLoadingState.displayName = displayName;

export default ButtonLoadingState;
