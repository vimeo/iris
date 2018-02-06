// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputTextFloatingLabel.scss';
import InputWrapper from '../InputWrapper';
import EyeIcon from '../icons/eye.svg';
import EyeOffIcon from '../icons/eye-off.svg';

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
    passwordHideText?: string,
    passwordShowText?: string,
    preMessage?: any,
    theme?: 'default' | 'dark',
    type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' |'url',
};

type State = {
    isActive?: boolean,
    isFocused?: boolean,
    passwordHidden?: boolean,
    type?: string,
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
            passwordHidden: true,
            type: props.type,
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

    componentWillUpdate(nextProps: Props, nextState: State) {
        if (nextState.passwordHidden !== this.state.passwordHidden) {
            this.setState({
                isActive: true,
            });
        }
    }

    props: Props;
    inputField: HTMLInputElement;

    _handleFieldBlur = (e: Event) => {

        // only make field inactive if the blur didn't come from clicking the toggle button.
        const clickedActionButton = e.relatedTarget instanceof HTMLElement && e.relatedTarget.hasAttribute('data-js-passwordtoggle');

        if (clickedActionButton) {
            this.inputField.focus();
        }
        else {
            const hasValue = e.target instanceof HTMLInputElement && e.target.value.length > 0;
            this.setState({
                isActive: hasValue,
                isFocused: false,
            });

            if (typeof this.props.onBlur === 'function') {
                this.props.onBlur(e);
            }
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

    _handlePasswordToggle = () => {

        let newType;

        if (this.props.type === 'password' && this.state.type === 'password') {
            newType = 'text';
        }
        else if (this.props.type === 'password' && this.state.type === 'text') {
            newType = 'password';
        }
        else {
            newType = this.props.type;
        }

        this.setState({
            passwordHidden: !this.state.passwordHidden,
            type: newType,
        });
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
            passwordHideText,
            passwordShowText,
            preMessage,
            theme = 'default',
            type,
            ...filteredProps
        } = this.props;

        const isPasswordField = type === 'password';

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
            (isPasswordField ? styles.hasActionButton : null),
            (this.state.isActive ? styles.isActive : null),
        );

        const inputClass = classNames(
            styles.Input,
            styles[theme + 'Theme'],
            (isPasswordField ? styles.hasActionButton : null),
            (this.state.isActive ? styles.isActive : null),
        );

        const PrivacyEye = this.state.passwordHidden ? EyeIcon : EyeOffIcon;
        const PrivacyEyeText = this.state.passwordHidden ? passwordShowText : passwordHideText;

        return (
            <InputWrapper
                showLabel= {false}
                className={className}
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
                        type={this.state.type}
                        ref={(input)=>{
                            this.inputField = input;
                        }}
                        onBlur={this._handleFieldBlur}
                        onFocus={this._handleFieldFocus}
                    />
                    {isPasswordField && this.state.isActive && (
                        <div
                            className={styles.ActionButtonWrapper}
                        >
                            <button
                                className={styles.ToggleButton}
                                onClick={this._handlePasswordToggle}
                                data-js-passwordtoggle
                            >
                                <PrivacyEye title={PrivacyEyeText} />
                            </button>
                        </div>
                    )}
                </div>
            </InputWrapper>
        );
    }
}

InputTextFloatingLabel.displayName = displayName;

export default InputTextFloatingLabel;
