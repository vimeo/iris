import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import {
  getInputBaseStyles,
  InputProps,
} from '../InputText/InputHelpers';
import { TruncatedTextWrapper } from '../../TruncatedTextWrapper/TruncatedTextWrapper';
import { ArrowIconWrapperWidth } from '../SelectWrapper/SelectWrapper';

export interface FauxSelectProps extends InputProps {
  /**
   * This string should explain what clicking this will do since this is not a native select. e.g. "Click to change update your privacy options"
   */
  a11yLabel: string;
  /**
   * Make the select appear to be disabled
   */
  disabled?: boolean;
  /**
   * This behaves like all other input formats
   */
  format?: 'negative' | 'positive' | 'neutral';
  /**
   * Set to true if the select has an overlayed icon (eg credit card logo)
   */
  hasInlineIcon?: boolean;
  /**
   * This behaves like all other input sizes
   */
  inputSize: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * This behaves like all other input themes
   */
  theme: 'default' | 'light' | 'dark';
}

export interface FauxSelectStyledProps {
  hasIcon?: boolean;
  hasInlineIcon?: boolean;
  format?: 'negative' | 'positive' | 'neutral';
  inputSize?: 'sm' | 'md' | 'lg' | 'xl';
}

const FauxSelectStyled = styled.button<FauxSelectStyledProps>`
    ${getInputBaseStyles}
    ${props => props.hasInlineIcon && `padding-left: ${rem(40)};`}
    padding-right: ${rem(ArrowIconWrapperWidth)};
    display: inline-flex;
    text-align: left;
    width: 100%;
`;

export const FauxSelect: SFC<FauxSelectProps> = ({
  a11yLabel,
  children,
  disabled,
  format = 'neutral',
  hasInlineIcon,
  size = 'md',
  theme = 'default',
  ...props
}) => (
  <FauxSelectStyled
    {...props}
    aria-label={a11yLabel}
    role="listbox"
    disabled={disabled}
    hasIcon={format === 'negative' || format === 'positive'}
    hasInlineIcon={hasInlineIcon}
    format={format}
    inputSize={size}
    theme={theme === 'dark' ? theme : 'light'}
  >
    <TruncatedTextWrapper>{children}</TruncatedTextWrapper>
  </FauxSelectStyled>
);
