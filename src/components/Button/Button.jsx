import React from 'react';
import classNames from 'classnames';
import styles from './Button.css';

const displayName = 'Button';

const buttonSizes = [
    'xs',
    'sm',
    'md',
    'lg',
];

const buttonTypes = [
    'primary',
    'primaryOutline',
    'secondary',
    'secondaryOutline',
    'alternative',
    'success',
    'successOutline',
    'warning',
    'lightTransparent',
];

const buttonBreakpoints = [
    'xs',
    'sm',
    'md',
    'lg',
    'fluid',
];

const iconLocations = [
    'beforeLabel',
    'afterLabel',
];

const propTypes = {
    autoWidth: React.PropTypes.oneOf(buttonBreakpoints),
    isButtonElement: React.PropTypes.bool,
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    format: React.PropTypes.oneOf(buttonTypes),
    icon: React.PropTypes.element,
    iconLocation: React.PropTypes.oneOf(iconLocations),
    size: React.PropTypes.oneOf(buttonSizes),
};

const defaultProps = {
    autoWidth: 'small',
    format: 'primary',
    isButtonElement: true,
    iconLocation: 'beforeLabel',
    size: 'md',
};

const Button = (props) => {

    // filter out props that are not meant to be passed in as an attribute from props and store the rest as "filteredProps" to be printed into the component as attrubutes in the tag (e.g. HTML attribute pass-through, event handlers)
    const {
        autoWidth,
        isButtonElement,
        icon,
        iconLocation,
        size,
        format,
        className,
        ...filteredProps
    } = props;

    // className builder
    const componentClass = classNames(
        styles.Button,
        styles[format],
        styles[size],
        (autoWidth !== 'fluid' ? styles['autoWidth_' + autoWidth] : null),
        className
    );

    // icons
    const iconClass = classNames(
        styles.Icon,
        styles['Icon_' + iconLocation]
    );

    const hasIconBefore = icon && iconLocation === iconLocations[0];
    const hasIconAfter = icon && iconLocation === iconLocations[1];


    const iconElement = (
        <span className = {iconClass}>
            {icon}
        </span>
    );

    // Check if it should be a button element or a span that is styled to be button-like
    const ButtonElement = isButtonElement ? 'button' : 'span';

    return (
            <ButtonElement
                {...filteredProps}
                className={componentClass}
            >
                <span className = {styles.buttonLabel}>
                    {hasIconBefore ? iconElement : null}
                    {props.children}
                    {hasIconAfter ? iconElement : null}
                </span>
            </ButtonElement >
    );
};

Button.displayName = displayName;

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

export { buttonSizes, buttonTypes, buttonBreakpoints, iconLocations };

export default Button;
