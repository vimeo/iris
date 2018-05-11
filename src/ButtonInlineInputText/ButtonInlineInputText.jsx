// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './ButtonInlineInputText.scss';
import TooltipOverlay from '../TooltipOverlay';

const displayName = 'ButtonInlineInputText';

type Props = {
    className?: string,
    icon: React$Element<*>,
    format?: 'subtle' | 'neutral' | 'strong',
    size: 'md' | 'lg',
    tooltipText: string,
    tooltipPosition: 'top' | 'right' | 'bottom' | 'left',
    tooltipProps?: Object,
};

const ButtonInlineInputText = ({
    className,
    icon,
    format = 'neutral',
    size = 'md',
    tooltipText,
    tooltipPosition = 'top',
    tooltipProps,
    ...filteredProps
}: Props): React$Element<*> => {
    // className builder
    const componentClass = classNames(
        styles.ButtonInlineInputText,
        styles[size],
        styles[format],
        className
    );

    const ButtonComponent = (
        <button {...filteredProps} className={componentClass}>
            {icon}
        </button>
    );

    const TooltipWrappedButton = (
        <TooltipOverlay
            tooltipText={tooltipText}
            attachment={tooltipPosition}
            {...tooltipProps}
        >
            {ButtonComponent}
        </TooltipOverlay>
    );

    return (
        <div className={styles.Wrapper}>
            {tooltipText ? TooltipWrappedButton : ButtonComponent}
        </div>
    );
};

ButtonInlineInputText.displayName = displayName;

export default ButtonInlineInputText;
