import React from 'react';
import classNames from 'classnames';
import styles from './InputText.scss';
import InputLabel from '../InputLabel/InputLabel';
import InputField from '../InputField/InputField';
import InputMessageArea from '../InputMessageArea/InputMessageArea';

const displayName = 'InputText';

const inputSizes = [
    'md',
    'lg',
];

const inputFormats = [
    'negative',
    'positive',
    'neutral',
];

const inputTypes = [
    'email',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'url',
];


const propTypes = {
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    errorMsg: React.PropTypes.node,
    format: React.PropTypes.oneOf(inputFormats),
    isInline: React.PropTypes.bool,
    helperMsg: React.PropTypes.node,
    label: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    showLabel: React.PropTypes.bool,
    size: React.PropTypes.oneOf(inputSizes),
    type: React.PropTypes.oneOf(inputTypes),
};

const defaultProps = {
    format: 'neutral',
    showLabel: true,
    size: 'md',
    type: 'text',
};

const InputText = (props) => {

    // filter out props that are not meant to be passed in as an attribute from props and store the rest as "filteredProps" to be printed into the component as attrubutes in the tag (e.g. HTML attribute pass-through, event handlers)
    const {
        className,
        disabled,
        id,
        errorMsg,
        helperMsg,
        isInline,
        label,
        showLabel,
        ...filteredProps
    } = props;

    // className builder
    const componentClass = classNames(
        styles.InputText,
        className
    );

    const wrapperClass = classNames(
        styles.InputWrapper,
        (isInline ? styles.isInline : null),
    );


    const labelElement = (
        <InputLabel disabled={disabled} htmlFor={id}>{label}</InputLabel>
    );

    let ariaLabel;

    if (!showLabel) {
        ariaLabel = label;
    }


    return (
        <div>
            {showLabel ? labelElement : null}
            <div className={wrapperClass}>
                <InputField
                    ariaLabel={ariaLabel}
                    disabled={disabled}
                    {...filteredProps}
                    className={componentClass}
                />
                <InputMessageArea
                    errorMsg={errorMsg}
                    helperMsg={helperMsg}
                />
            </div>
        </div>
    );
};

InputText.displayName = displayName;

InputText.propTypes = propTypes;

InputText.defaultProps = defaultProps;


export default InputText;
