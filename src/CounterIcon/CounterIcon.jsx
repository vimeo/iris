// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './CounterIcon.scss';
// $FlowFixMe
import { ParagraphLg } from '../Type';
// $FlowFixMe
import TooltipOverlay from '../TooltipOverlay/TooltipOverlay';

const displayName = 'CounterIcon';

type Props = {
    autoMargins?: boolean,
    className?: string,
    children: string,
    counterTitle: string,
    icon: React$Element<*>,
    onClick?: any,
    href?: string,
};

const CounterIcon = ({
    autoMargins = true,
    className,
    children,
    href,
    icon,
    counterTitle,
    onClick,
    ...filteredProps
}: Props): React$Element<*> => {
    // className builder
    const componentClass = classNames(styles.CounterIcon, className);

    const CountNumberClass = classNames(styles.CountNumber);

    const IconClass = classNames(styles.Icon);

    const WrapperClass = classNames(
        styles.Wrapper,
        autoMargins ? styles.autoMargins : null
    );

    const CounterIconContent = (
        <span {...filteredProps} className={componentClass}>
            <span className={IconClass}>{icon}</span>
            <ParagraphLg className={CountNumberClass} element="span">
                {children}
            </ParagraphLg>
        </span>
    );

    const maybeLinkContent = href ? (
        <a href={href} onClick={onClick}>
            {CounterIconContent}
        </a>
    ) : CounterIconContent;

    return (
        <div className={WrapperClass}>
            <TooltipOverlay
                href={href}
                tooltipText={counterTitle}
                onClick={!href && onClick}
            >
                {maybeLinkContent}
            </TooltipOverlay>
        </div>
    );
};

CounterIcon.displayName = displayName;

export default CounterIcon;
