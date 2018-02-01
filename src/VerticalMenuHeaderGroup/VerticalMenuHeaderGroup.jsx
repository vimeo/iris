// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './VerticalMenuHeaderGroup.scss';

import TooltipOverlay from '../TooltipOverlay/TooltipOverlay';
import HeaderAltSm from '../Type/HeaderAltSm';

const displayName = 'VerticalMenuHeaderGroup';

type Props = {
    actionButtonIcon?: React$Element<*>,
    actionButtonTooltipText?: string,
    actionButtonOnClick?: (e: Event) => void,
    children: React$Element<*>,
    headerElement?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    label: string,
    labelId: string,
    className?: string,
};

const VerticalMenuHeaderGroup = ({
    actionButtonIcon,
    actionButtonTooltipText,
    actionButtonOnClick,
    children,
    className,
    headerElement = 'h3',
    label,
    labelId,
    ...filteredProps
}: Props): React$Element<*> => {

    const hasActionButton = actionButtonIcon && actionButtonTooltipText &&
    actionButtonOnClick;

    // className builder
    const headerWrapperClass = classNames(
        styles.HeaderWrapper,
        (hasActionButton ? styles.hasActionButton : null),
        className
    );

    const ActionButton = hasActionButton ? (
        <span className={styles.ActionButtonWrapper}>
            <TooltipOverlay
                tooltipText={actionButtonTooltipText}
            >
                <span
                    className={styles.ActionButton}
                    onClick={actionButtonOnClick}
                >
                    {actionButtonIcon}
                </span>
            </TooltipOverlay>
        </span>
    ) : null;

    return (
            <div
                {...filteredProps}
                className={styles.VerticalMenuHeaderGroup}
            >
                <div className={headerWrapperClass}>
                    <HeaderAltSm
                        element={headerElement}
                        id={labelId}
                    >
                        {label}
                    </HeaderAltSm>
                    {ActionButton}
                </div>
                <div aria-labelledby={labelId}>
                    {children}
                </div>
            </div>
    );
};

VerticalMenuHeaderGroup.displayName = displayName;

export default VerticalMenuHeaderGroup;
