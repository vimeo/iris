import React from 'react';
import classNames from 'classnames';
import styles from './CircularButton.scss';


const displayName = 'CircularButton';


const circularButtonSizes = [
    'sm',
    'md',
    'lg',
];

const circularButtonTypes = [
    'primary',
    'primaryOutline',
    'primaryDashed',
    'secondary',
    'secondaryOutline',
    'secondaryDashed',
    'alternative',
    'alternativeOutline',
    'alternativeDashed',
    'whitePrimary',
    'whiteSecondary',
];

const propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    format: React.PropTypes.oneOf(circularButtonTypes),
    size: React.PropTypes.oneOf(circularButtonSizes),
    icon: React.PropTypes.object.isRequired,
    element: React.PropTypes.oneOf(['a', 'button', 'span']),
    autoMarginsHorizontal: React.PropTypes.bool,
};

const defaultProps = {
    autoMarginsHorizontal: true,
    size: 'md',
    format: 'primary',
    element: 'button',
};

const CircularButton = (props) => {

    const {
        autoMarginsHorizontal,
        className,
        element,
        format,
        icon,
        size,
        ...filteredProps
    } = props;

    // className builder
    const componentClass = classNames(
        styles.CircularButton,
        styles[format],
        styles[size],
        (autoMarginsHorizontal ? styles.autoMarginsHorizontal : null),
        className
    );
    const CircularButtonElement = element;

    return (
            <CircularButtonElement
                {...filteredProps}
                className={componentClass}
             >
                {icon}
             </CircularButtonElement>
    );
};

CircularButton.displayName = displayName;

CircularButton.propTypes = propTypes;

CircularButton.defaultProps = defaultProps;

export default CircularButton;
