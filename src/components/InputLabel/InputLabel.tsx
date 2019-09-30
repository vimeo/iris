import React, { SFC } from 'react';
import styled from 'styled-components';
import { InputLabelStateIcon } from '../InputLabelStateIcon/InputLabelStateIcon';
import { Header6 } from '../../legacy';
import { InputStyleSettings } from '../InputText/InputHelpers';

export interface InputLabelProps {
  disabled?: boolean;
  element?: 'label' | 'legend';
  format?: 'negative' | 'positive' | 'neutral';
  theme?: 'default' | 'light' | 'dark';
  htmlFor?: string;
}

export interface LabelStyledProps {
  disabled?: boolean;
  labelTheme?: 'light' | 'dark';
}

const LabelStyled = styled(({ disabled, labelTheme, ...props }) => (
  <Header6 {...props} />
))<{ disabled: boolean; labelTheme: 'default' | 'light' | 'dark' }>`
  display: inline-block;
  position: relative;
  color: ${props =>
    props.disabled
      ? InputStyleSettings.color[props.labelTheme].text.disabled
      : InputStyleSettings.color[props.labelTheme].text.default};
  ${props =>
    props.labelTheme === 'dark' ? 'font-weight: normal' : ''};
`;

export const InputLabel: SFC<InputLabelProps> = ({
  children,
  disabled,
  element = 'label',
  format = 'neutral',
  theme = 'light',
  ...props
}) => (
  <LabelStyled
    disabled={disabled}
    labelTheme={theme === 'default' ? 'light' : theme}
    {...props}
  >
    {children}
    {format !== 'neutral' && <InputLabelStateIcon format={format} />}
  </LabelStyled>
);
