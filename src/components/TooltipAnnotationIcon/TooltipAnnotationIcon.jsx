// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './TooltipAnnotationIcon.scss';
import TooltipOverlay from '../TooltipOverlay/TooltipOverlay';
import InfoIcon from '../../globals/svg/info.svg';

const displayName = 'TooltipAnnotationIcon';

type Props = {
    className?: string,
    labelType?: 'textBlock' | 'inline',
    tooltipText: string,
    size?: 'md'| 'lg',
};

const TooltipAnnotationIcon = ({
                        className,
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

    // prevent icon clicks from triggering inline inputs
    const catchEvent = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
            <TooltipOverlay
                {...filteredProps}
                className={styles.Tooltip}
                tooltipText={tooltipText}
                onClick = {catchEvent}
            >
                <InfoIcon className={componentClass} />
            </TooltipOverlay>
    );
};

TooltipAnnotationIcon.displayName = displayName;

export default TooltipAnnotationIcon;
