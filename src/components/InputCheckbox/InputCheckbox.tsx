import React, { ReactNode } from 'react';
import {
  Wrapper,
  InputCheckboxStyled,
  Label,
  Overlay,
} from './InputCheckboxStyled';
import { CheckboxFocusOutline } from './InputCheckboxFocus';
import { InputWrapperInline } from '../InputWrapperInline/InputWrapperInline';
import {
  IrisInputComponent,
  withDeprecateComponent,
} from '../../utils';

interface Messages {
  error?: ReactNode;
  help?: ReactNode;
}

export interface Props {
  indeterminate?: boolean;
  format?: 'negative' | 'positive' | 'neutral';
  messages?: Messages;
  theme?: 'light' | 'dark';
}

export const Checkbox: IrisInputComponent<Props> = ({
  disabled,
  format = 'neutral',
  id,
  indeterminate,
  label,
  messages,
  theme = 'light',
  ...props
}) => (
  <InputWrapperInline
    errorMsg={messages && messages.error}
    helperMsg={messages && messages.help}
    theme={theme === 'dark' ? 'dark' : 'default'}
  >
    <Wrapper>
      <Label
        htmlFor={id}
        format={format}
        disabled={disabled}
        fieldLevelErrors
        theme={theme}
      >
        <InputCheckboxStyled
          {...props}
          aria-label={label}
          type="checkbox"
          id={id}
          disabled={disabled}
          theme={theme}
        />

        <Overlay theme={theme} indeterminate={indeterminate}>
          <CheckboxFocusOutline theme={theme} />
        </Overlay>

        {label}
      </Label>
    </Wrapper>
  </InputWrapperInline>
);

interface DeprecatedProps {
  checkedStyle?: 'default' | 'indeterminate';
  disabled?: boolean;
  errorMsg?: ReactNode;
  format?: 'negative' | 'positive' | 'neutral';
  helperMsg?: ReactNode;
  hideLabel?: boolean;
  theme?: 'default' | 'dark';
}

export const InputCheckbox = withDeprecateComponent<DeprecatedProps>(
  '<InputCheckbox /> will no longer be available in Iris 8. Please use <Checkbox />. Note: When updating components, please be aware the props interface has changed.',
  ({
    checkedStyle = 'default',
    errorMsg,
    helperMsg,
    hideLabel,
    label,
    theme = 'default',
    ...props
  }) => {
    const newTheme = theme === 'default' ? 'light' : 'dark';
    const newLabel = !hideLabel && <span>{label}</span>;
    const messages = { error: errorMsg, help: helperMsg };
    const indeterminate = checkedStyle === 'indeterminate';

    return (
      <Checkbox
        {...props}
        indeterminate={indeterminate}
        messages={messages}
        theme={newTheme}
        label={newLabel}
      />
    );
  },
);
