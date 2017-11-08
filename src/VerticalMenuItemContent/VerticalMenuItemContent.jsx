// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './VerticalMenuItemContent.scss';
import { ParagraphMd } from '../Type';

const displayName = 'VerticalMenuItemContent';

type Props = {
    className?: string,
    isActive?: boolean,
    label: React$Element<*> | string,
    labelIcon?: React$Element<*>,
    labelIconActive?: React$Element<*>,
    labelIconTheme?: 'default' | 'subtle';
    linkActionIcon?: React$Element<*>,
    nestedInteraction?: React$Element<*>,
    id?: string,
    label: React$Element<*> | string,
    onClick?: Function,
    truncateLabel?: boolean,
};

const VerticalMenuItemContent = ({
    className,
    label,
    labelIcon,
    linkActionIcon,
    labelIconActive,
    labelIconTheme,
    id,
    isActive,
    nestedInteraction,
    truncateLabel,
    ...filteredProps
}: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.VerticalMenuItemContent,
        styles.textOverrides,
        className
    );

    const iconWrapperClass = classNames(
        styles.LabelIconWrapper,
        styles[labelIconTheme],
        (isActive && labelIconTheme !== 'subtle' ? styles.isActive : null),
    );

    const labelWrapperClass = classNames(
        styles.LabelWrapper,
        (labelIcon ? styles.hasIcon : null),
        (truncateLabel ? styles.isTruncated : null),
    );

    return (

        <ParagraphMd
            element="span"
            className={componentClass}
            id={id}
        >
            {labelIcon && (
                <span className={iconWrapperClass}>
                    {isActive && labelIconActive ? labelIconActive : labelIcon}
                </span>
            )}
            <span className={labelWrapperClass}>
                {label}
            </span>
            {linkActionIcon && (
                <span className={styles.linkActionWrapper}>
                    {linkActionIcon}
                </span>
            )}

        </ParagraphMd>
    );
};

VerticalMenuItemContent.displayName = displayName;

export default VerticalMenuItemContent;
