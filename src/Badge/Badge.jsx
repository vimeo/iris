// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Badge.scss';

const displayName = 'Badge';

type Props = {
    children: React$Element<*>,
    className?: string,
    format?: 'alum' | 'beta' | 'business' | 'curation' | 'default' | 'explicit' | 'featured' | 'hd' | 'info' | 'live' | 'live-archive' | 'new' | 'partner' | 'plus' | 'pro' | 'spatial' | 'sponsor' | 'staff' | 'support' | 'unrated' | 'upgrade' | 'vod',
    href: string,
    label: string,
    size?: 'sm' | 'lg',
};

const Badge = ({
                        className,
                        children,
                        format = 'default',
                        href,
                        label,
                        size = 'sm',
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(styles.Badge, styles[format], styles[size], className);

    const BadgeElement = href
        ? 'a'
        : 'span';

    return (
        <BadgeElement {...filteredProps} className={componentClass} href={href}>
            {children}
        </BadgeElement>
    );
};

Badge.displayName = displayName;

export default Badge;
