import React from 'react';
import classNames from 'classnames';
import styles from './ButtonIconOnly.css';

const displayName = 'ButtonIconOnly';


const sizes = [
    'sm',
    'md',
];

const buttonTypes = [
    'dark',
    'alternative',
    'light',
    'warning',
];

const propTypes = {
    autoSpacingHorizontal: React.PropTypes.bool,
    className: React.PropTypes.string,
    format: React.PropTypes.oneOf(buttonTypes),
    icon: React.PropTypes.element.isRequired,
    isButtonElement: React.PropTypes.bool,
    size: React.PropTypes.oneOf(sizes),
};

const defaultProps = {
    autoSpacingHorizontal: true,
    format: 'dark',
    isButtonElement: true,
    size: 'sm',
};
const ButtonIconOnly = (props) => {

    // filter out props that are not meant to be passed in as an attribute from props and store the rest as "filteredProps" to be printed into the component as attrubutes in the tag (e.g. HTML attribute pass-through, event handlers)
    const {
        autoSpacingHorizontal,
        className,
        icon,
        isButtonElement,
        format,
        size,
        ...filteredProps
    } = props;

    // className builder
    const componentClass = classNames(
        styles.ButtonIconOnly,
        styles[size],
        (autoSpacingHorizontal ? styles.autoSpacingHorizontal : null),
        styles[format],
        className
    );

    const ButtonElement = isButtonElement ? 'button' : 'span';

    return (
            <ButtonElement
                {...filteredProps}
                className={componentClass}
            >
                    <span className={styles.Icon}>{icon}</span>
            </ButtonElement>
    );
};

ButtonIconOnly.displayName = displayName;

ButtonIconOnly.propTypes = propTypes;

ButtonIconOnly.defaultProps = defaultProps;


export default ButtonIconOnly;
