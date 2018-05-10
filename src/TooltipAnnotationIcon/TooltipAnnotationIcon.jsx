// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './TooltipAnnotationIcon.scss';
// $FlowFixMe
import TooltipOverlay from '../TooltipOverlay/TooltipOverlay';
import InfoIcon from '../icons/circle-info.svg';

const displayName = 'TooltipAnnotationIcon';

type Props = {
    className?: string,
    children: React$Element<*>,
    labelType?: 'textBlock' | 'inline' | 'noPosition',
    tooltipText: string,
    size?: 'md' | 'lg',
    tooltipProps?: Object,
};

const TooltipAnnotationIcon = ({
    className,
    children,
    labelType = 'inline',
    size = 'md',
    tooltipText,
    tooltipProps,
    ...filteredProps
}: Props): React$Element<*> => {
    // className builder
    const componentClass = classNames(
        styles.TooltipAnnotationIcon,
        styles[size],
        styles[labelType],
        className
    );

    const iconWrapperClass = classNames(
        styles.IconWrapper,
        styles[size],
        styles[labelType],
        className
    );

    // prevent icon clicks from triggering inline inputs
    const catchEvent = e => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <div {...filteredProps} className={styles.Wrapper}>
            {children}
            <div className={iconWrapperClass}>
                <TooltipOverlay
                    {...tooltipProps}
                    className={styles.Tooltip}
                    tooltipText={tooltipText}
                    onClick={catchEvent}
                >
                    <InfoIcon className={componentClass} />
                </TooltipOverlay>
            </div>
        </div>
    );
};

TooltipAnnotationIcon.displayName = displayName;

export default TooltipAnnotationIcon;
