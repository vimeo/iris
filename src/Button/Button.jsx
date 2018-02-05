// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Button.scss';

const displayName = 'Button';

type Props = {
    autoMargins?: boolean,
    autoWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'fluid',
    children: React$Element<*>,
    className?: string,
    format?: 'primary' | 'primaryOutline' | 'primaryTextOnly' | 'secondary' | 'secondaryOutline' | 'secondaryTextOnly' | 'alternative' | 'alternativeOutline' | 'success' | 'successOutline' | 'warning' | 'lightTransparent' | 'lightTextOnly',
    icon?: React$Element<*>,
    iconLocation?: 'beforeLabel' | 'afterLabel',
    isButtonElement?: boolean,
    isInline?: boolean,
    showLabel?: boolean,
    size?: 'xs' | 'sm' | 'md' | 'lg',
};

const Button = ({
    autoMargins = true,
    autoWidth = 'sm',
    className,
    children,
    format = 'primary',
    icon,
    iconLocation = 'beforeLabel',
    isButtonElement = true,
    isInline = false,
    showLabel = true,
    size = 'md',
    ...filteredProps
}: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.Button,
        styles[format],
        styles[size],
        (autoWidth !== 'fluid' ? styles['autoWidth_' + autoWidth] : null),
        (autoMargins ? styles.autoMarginsHorizontal : null),
        (isInline || !autoMargins ? null : styles.autoMarginsVertical),
        className
    );

    // icons
    const iconClass = classNames(
        styles.Icon,
        styles['Icon_' + iconLocation]
    );

    const hasIconBefore = icon && iconLocation === 'beforeLabel';
    const hasIconAfter = icon && iconLocation === 'afterLabel';


    const iconElement = (
        <span className = {iconClass}>
            {icon}
        </span>
    );

    // Check if it should be a button element or a span that is styled to be button-like
    const ButtonElement = isButtonElement ? 'button' : 'span';

    return (
            <ButtonElement
                {...filteredProps}
                className={componentClass}
            >
                <span className = {styles.buttonLabel}>
                    {hasIconBefore ? iconElement : null}
                    {children}
                    {hasIconAfter ? iconElement : null}
                </span>
            </ButtonElement>
    );
};

Button.displayName = displayName;

export default Button;
