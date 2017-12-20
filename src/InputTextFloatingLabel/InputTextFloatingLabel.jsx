// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputTextFloatingLabel.scss';
import InputWrapper from '../InputWrapper';

const displayName = 'InputTextFloatingLabel';

type Props = {
    className?: string,
    defaultValue?: string,
    disabled?: boolean,
    errorMsg?: string | React$Element<*>,
    format?: 'negative' | 'positive' | 'neutral',
    helperMsg?: string | React$Element<*>,
    isInline?: boolean,
    label: string | React$Element<*>,
    id: string,
    onBlur?: (e: Event) => void,
    onFocus?: (e: Event) => void,
    preMessage?: any,
    theme?: 'default' | 'dark',
    type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' |'url',
};

type State = {
    isActive?: boolean,
    isFocused?: boolean,
}

class InputTextFloatingLabel extends React.Component {
    static defaultProps = {
        format: 'neutral',
        theme: 'default',
        type: 'text',
    };

    constructor(props: Props) {
        super(props);

        this.state = {
            isActive: props.defaultValue ? true : false,
        };
    }

    state: State;

    componentWillReceiveProps(nextProps: Props) {
        if (nextProps.defaultValue !== this.props.defaultValue) {
            this.setState({
                isActive: nextProps.defaultValue ? true : false,
            });
        }
    }

    props: Props;
    inputField: HTMLInputElement;

    _handleFieldBlur = (e: Event) => {
        const hasValue = e.target instanceof HTMLInputElement && e.target.value.length > 0;
        this.setState({
            isActive: hasValue,
            isFocused: false,
        });

        if (typeof this.props.onBlur === 'function') {
            this.props.onBlur(e);
        }
    }

    _handleFieldFocus = (e: Event) => {
        this.setState({
            isActive: true,
            isFocused: true,
        });

        if (typeof this.props.onFocus === 'function') {
            this.props.onFocus(e);
        }
    }

    _handleWrapperClick = () => {
        this.inputField.focus();
    }

    render() {
        const {
            className,
            disabled,
            errorMsg,
            format,
            helperMsg,
            label,
            id,
            isInline,
            preMessage,
            theme = 'default',
            type,
            ...filteredProps
        } = this.props;

        const wrapperClass = classNames(
            styles.InputWrapper,
            styles[format],
            styles[theme + 'Theme'],
            (format === 'negative' || format === 'positive' ? styles.hasIcon : null),
            (this.state.isFocused ? styles.isFocused : null),
            (disabled ? styles.isDisabled : null),
        );

        const labelClass = classNames(
            styles.InputLabel,
            (this.state.isActive ? styles.isActive : null),
        );

        const inputClass = classNames(
            styles.Input,
            styles[theme + 'Theme'],
            (this.state.isActive ? styles.isActive : null),
            className,
        );

        return (
            <InputWrapper
                showLabel= {false}
                disabled= {disabled}
                errorMsg = {errorMsg}
                format = {format}
                helperMsg = {helperMsg}
                label = {label}
                labelForId = {id}
                isInline = {isInline}
                preMessage={preMessage}
                size="xl"
                theme={theme}
            >
                <div
                    className={wrapperClass}
                    onClick={this._handleWrapperClick}
                >
                    <label
                        className={labelClass}
                        htmlFor={id}
                    >
                        {label}
                    </label>
                    <input
                        {...filteredProps}
                        className={inputClass}
                        disabled={disabled}
                        id={id}
                        type={type}
                        ref={(input)=>{
                            this.inputField = input;
                        }}
                        onBlur={this._handleFieldBlur}
                        onFocus={this._handleFieldFocus}
                    />
                </div>
            </InputWrapper>
        );
    }
}

InputTextFloatingLabel.displayName = displayName;

export default InputTextFloatingLabel;
