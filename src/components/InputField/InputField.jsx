import React from 'react';
import classNames from 'classnames';
import styles from './InputField.scss';
import SuccessIcon from '../../globals/svg/checkmark_iris';
import AlertIcon from '../../globals/svg/alert_iris';


const displayName = 'InputField';

const inputSizes = [
    'md',
    'lg',
];


const inputFormats = [
    'negative',
    'positive',
    'neutral',
];

const propTypes = {
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    format: React.PropTypes.oneOf(inputFormats),
    ariaLabel: React.PropTypes.string,
    size: React.PropTypes.oneOf(inputSizes),
    type: React.PropTypes.string.isRequired,
};

const defaultProps = {
    format: 'neutral',
};

const InputField = (props) => {
        // filter out props that are not meant to be passed in as an attribute from props and store the rest as "filteredProps" to be printed into the component as attrubutes in the tag (e.g. HTML attribute pass-through, event handlers)
    const {
            className,
            disabled,
            format,
            ariaLabel,
            size,
            ...filteredProps
        } = props;

        // remove format, we don't want it since we are using state.format
    filteredProps.format = null;

    let fieldIcon;
    let ariaInvalid;
    switch (format) {
        case 'negative':
            fieldIcon = <AlertIcon />;
            ariaInvalid = true;
            break;
        case 'positive' :
            fieldIcon = <SuccessIcon />;
            break;
        default:
            fieldIcon = null;
    }

        // className builder
    const componentClass = classNames(
            styles.InputField,
            (styles[format]),
            (fieldIcon ? styles.hasIcon : null),
            styles[size],
            className
        );

    const iconClass = classNames(
            styles.Icon,
            styles['Icon-' + format],
            (fieldIcon ? styles['Icon-isShowing'] : null),
            styles['Icon-' + size],
        );

    const inputIcon = fieldIcon && (
            <div className={iconClass}>
                {fieldIcon}
            </div>
        );

    return (
            <div className={styles.InputWrapper}>
                <input
                    {...filteredProps}
                    aria-label={ariaLabel}
                    aria-invalid={ariaInvalid}
                    disabled={disabled}
                    className={componentClass}
                />
                {inputIcon}
            </div>
    );
};

InputField.displayName = displayName;

InputField.propTypes = propTypes;

InputField.defaultProps = defaultProps;

export default InputField;
