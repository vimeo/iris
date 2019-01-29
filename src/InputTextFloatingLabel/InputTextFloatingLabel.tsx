import React, { Component } from 'react';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import { Eye, EyeOff } from '../Icons';
import { TooltipOverlay } from '../TooltipOverlay/TooltipOverlay';
import {
  InputTextFloatingLabelProps as Props,
  InputTextFloatingLabelState as State,
} from './InputTextFloatingLabelTypes';
import {
  ActionButton,
  ToggleButton,
  Wrapper,
  Label,
  InputStyled,
} from './InputTextFloatingLabelStyled';

export class InputTextFloatingLabel extends Component<Props, State> {
  inputField: HTMLInputElement;

  static defaultProps = {
    format: 'neutral',
    theme: 'light',
    type: 'text',
    onPasswordToggleClick: () => null,
    onBlur: () => null,
    onFocus: () => null,
  };

  readonly state: Readonly<State> = {
    isActive:
      this.props.defaultValue || this.props.value ? true : false,
    passwordHidden: true,
    type: this.props.type,
  };

  componentWillReceiveProps = (nextP: Props) =>
    nextP.defaultValue !== this.props.defaultValue ||
    nextP.value !== this.props.value
      ? this.setState(active(!!nextP.defaultValue || !!nextP.value))
      : null;

  componentWillUpdate = (_, nextS: State) =>
    nextS.passwordHidden !== this.state.passwordHidden &&
    this.setState(active());

  private handleFieldBlur = (e: React.FocusEvent<HTMLInputElement>) =>
    e.relatedTarget instanceof HTMLElement &&
    e.relatedTarget.hasAttribute('data-js-passwordtoggle')
      ? this.inputField.focus()
      : () => {
          this.setState(
            activeFocused(
              e.target instanceof HTMLInputElement &&
                e.target.value.length > 0,
              false,
            ),
          );
          this.props.onBlur(e);
        };

  private handleFieldFocus = (
    e: React.FocusEvent<HTMLInputElement>,
  ) => {
    this.setState(activeFocused());
    this.props.onFocus(e);
  };

  private handleWrapperClick = () => {
    this.inputField.focus();
    this.setState(active());
  };

  private handlePasswordToggle = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    this.setState({
      passwordHidden: !this.state.passwordHidden,
      type: newType(this.props.type, this.state.type),
    });
    this.props.onPasswordToggleClick(e);
  };

  render() {
    const {
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
      theme = 'light',
      type,
      ...props
    } = this.props;

    return (
      <InputWrapper
        showLabel={false}
        disabled={disabled}
        errorMsg={errorMsg}
        format={format}
        helperMsg={helperMsg}
        label={label}
        labelForId={id}
        isInline={isInline}
        preMessage={preMessage}
        size="xl"
        theme={theme === 'dark' ? 'dark' : 'light'}
      >
        <Wrapper format={format} onClick={this.handleWrapperClick}>
          <Label
            isActive={this.state.isActive}
            theme={theme === 'dark' ? 'dark' : 'light'}
            isPasswordField={type === 'password'}
            htmlFor={id}
          >
            {label}
          </Label>

          <InputStyled
            {...props}
            disabled={disabled}
            id={id}
            type={this.state.type}
            onBlur={this.handleFieldBlur}
            onFocus={this.handleFieldFocus}
            isActive={this.state.isActive}
            innerRef={(input: HTMLInputElement) => {
              this.inputField = input;
            }}
          />

          {type === 'password' && this.state.isActive && (
            <ActionButton>
              <TooltipOverlay
                tooltipText={
                  this.state.passwordHidden
                    ? passwordShowText
                    : passwordHideText
                }
              >
                <ToggleButton
                  role="switch"
                  onClick={this.handlePasswordToggle}
                  data-js-passwordtoggle
                  type="button"
                >
                  {this.state.passwordHidden ? <Eye /> : <EyeOff />}
                </ToggleButton>
              </TooltipOverlay>
            </ActionButton>
          )}
        </Wrapper>
      </InputWrapper>
    );
  }
}

const active = (boolean = true) => (): State => ({
  isActive: boolean,
});

const focused = (boolean = true) => (): State => ({
  isFocused: boolean,
});

const activeFocused = (A = true, F = true) => ({
  ...active(A)(),
  ...focused(F)(),
});

const newType = (P, S) =>
  P === 'password' && S === 'password'
    ? 'text'
    : P === 'password' && S === 'text'
    ? 'password'
    : P;
