import React from 'react';
import classNames from 'classnames';
import styles from './TextArea.scss';
import InputLabel from '../InputLabel/InputLabel';
import InputMessageArea from '../InputMessageArea/InputMessageArea';


const displayName = 'TextArea';

const textareaSizes = [
    'md',
    'lg',
];

const textareaFormats = [
    'negative',
    'positive',
    'neutral',
];


const propTypes = {
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    errorMsg: React.PropTypes.node,
    format: React.PropTypes.oneOf(textareaFormats),
    helperMsg: React.PropTypes.node,
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    showLabel: React.PropTypes.bool,
    size: React.PropTypes.oneOf(textareaSizes),
    type: React.PropTypes.string.isRequired,
};

const defaultProps = {
    format: 'neutral',
    showLabel: true,
    size: 'md',
    type: 'text',
};

const TextArea = (props) => {

    // filter out props that are not meant to be passed in as an attribute from props and store the rest as "filteredProps" to be printed into the component as attrubutes in the tag (e.g. HTML attribute pass-through, event handlers)
    const {
        className,
        disabled,
        errorMsg,
        helperMsg,
        id,
        format,
        label,
        showLabel,
        size,
        ...filteredProps
    } = props;


    // className builder
    const componentClass = classNames(
        styles.TextArea,
        styles[format],
        styles[size],
        className
    );

    const labelElement = (
        <InputLabel disabled={disabled} htmlFor={id}>{label}</InputLabel>
    );

    let ariaLabel;

    let ariaInvalid;

    if (!showLabel) {
        ariaLabel = label;
    }

    if (format === 'negative') {
        ariaInvalid = true;
    }

    return (
        <div>
            {showLabel ? labelElement : null}
            <div className={styles.TextAreaWrapper}>
                <textarea
                    aria-label={ariaLabel}
                    aria-invalid={ariaInvalid}
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

TextArea.displayName = displayName;

TextArea.propTypes = propTypes;

TextArea.defaultProps = defaultProps;


export default TextArea;
