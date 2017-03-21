import React from 'react';
import classNames from 'classnames';
import styles from './Badge.css';

const displayName = 'Badge';

const badgeSizes = ['sm', 'lg'];

const badgeFormats = [
    'alum',
    'beta',
    'business',
    'curation',
    'default',
    'explicit',
    'featured',
    'hd',
    'info',
    'new',
    'partner',
    'plus',
    'pro',
    'spatial',
    'sponsor',
    'staff',
    'support',
    'unrated',
    'vod',
];

const propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.string.isRequired,
    href: React.PropTypes.string,
    label: React.PropTypes.string,
    format: React
        .PropTypes
        .oneOf(badgeFormats),
    size: React
        .PropTypes
        .oneOf(badgeSizes),
};

const defaultProps = {
    format: 'default',
    size: 'sm',
};

const Badge = (props) => {

    // filter out props that are not meant to be passed in as an attribute from
    // props and store the rest as "filteredProps" to be printed into the component
    // as attrubutes in the tag (e.g. HTML attribute pass-through, event handlers)

    const {
        children,
        className,
        format,
        href,
        size,
        ...filteredProps
    } = props;

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

Badge.propTypes = propTypes;

Badge.defaultProps = defaultProps;

export default Badge;
