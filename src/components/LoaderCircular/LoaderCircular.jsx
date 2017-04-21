import React from 'react';
import classNames from 'classnames';
import styles from './LoaderCircular.css';

const displayName = 'LoaderCircular';

const sizes = [
    'sm',
    'md',
    'lg',
];

const formats = [
    'primary',
];

const propTypes = {
    className: React.PropTypes.string,
    size: React.PropTypes.oneOf(sizes),
    format: React.PropTypes.oneOf(formats),
};

const defaultProps = {
    size: 'md',
    format: 'primary',
};

const LoaderCircular = (props) => {
    const {
        size,
        format,
        className,
        ...filteredProps
    } = props;

    const componentClass = classNames(
        styles.LoaderCircular,
        styles[format],
        styles[size],
        className,
    );

    return (
        <div className={componentClass} {...filteredProps} />
    );
};

LoaderCircular.displayName = displayName;
LoaderCircular.propTypes = propTypes;
LoaderCircular.defaultProps = defaultProps;

export default LoaderCircular;
