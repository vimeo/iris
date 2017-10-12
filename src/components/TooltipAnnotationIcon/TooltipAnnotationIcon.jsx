// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './TooltipAnnotationIcon.scss';
import TooltipOverlay from '../TooltipOverlay/TooltipOverlay';
import InfoIcon from '../icons/circle-info.svg';

const displayName = 'TooltipAnnotationIcon';

type Props = {
    className?: string,
    children: React$Element<*>,
    labelType?: 'textBlock' | 'inline',
    tooltipText: string,
    size?: 'md'| 'lg',
};

const TooltipAnnotationIcon = ({
                        className,
                        children,
                        labelType = 'inline',
                        size = 'md',
                        tooltipText,
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
        className
    );

    // prevent icon clicks from triggering inline inputs
    const catchEvent = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <div className={styles.Wrapper}>
            {children}
            <div className={iconWrapperClass}>
                <TooltipOverlay
                    {...filteredProps}
                    className={styles.Tooltip}
                    tooltipText={tooltipText}
                    onClick = {catchEvent}
                    tooltipOptions = {{
                        offset: '20px 0',
                    }}
                >
                    <InfoIcon className={componentClass} />
                </TooltipOverlay>
            </div>
        </div>
    );
};

TooltipAnnotationIcon.displayName = displayName;

export default TooltipAnnotationIcon;
