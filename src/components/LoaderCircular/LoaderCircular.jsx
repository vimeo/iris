import React from 'react';
import classNames from 'classnames';
import styles from './LoaderCircular.scss';

const displayName = 'LoaderCircular';

const formats = [
    'primary',
];

const propTypes = {
    className: React.PropTypes.string,
    format: React.PropTypes.oneOf(formats),
};

const defaultProps = {
    format: 'primary',
};

const LoaderCircular = (props) => {
    const {
        format,
        className,
        ...filteredProps
    } = props;

    const componentClass = classNames(
        styles.LoaderCircular,
        styles[format],
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
