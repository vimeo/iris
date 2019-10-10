import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { SelectWrapperFocusOutline as FocusOutline } from './SelectWrapperFocus';
import {
  InputProps,
  InputStyleSettings,
} from '../InputText/InputHelpers';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import { ChevronDown } from '../../../icons';

export interface SelectWrapperProps extends InputProps {
  /**
   * Use to pass an inline icon over the select, for example a credit card logo
   */
  icon?: React.ReactNode;
  className?: string;
}

export const ArrowIconSize = 24;
export const ArrowIconWrapperWidth = 36;

export const WrapperStyled = styled.div`
  position: relative;
`;

const IconWrapperStyled = styled.div`
  position: absolute;
  top: 50%;
  left: ${rem(12)};

  transform: translateY(-50%);

  svg {
    width: ${rem(20)};
  }
`;

const getArrowColor = ({ disabled, format, theme }) => {
  let color = InputStyleSettings.color.light.text.default;

  if (!disabled) {
    if (format === 'neutral' && theme === 'dark') {
      color = InputStyleSettings.color.dark.text.default;
    }

    if (format === 'positive') {
      color = InputStyleSettings.color.light.border.positive.default;
    }

    if (format === 'negative') {
      color = InputStyleSettings.color.light.border.negative.default;
    }
  } else {
    color = InputStyleSettings.color.light.text.disabled;
  }

  return `fill: ${color};`;
};

interface ArrowWrapperStyledProps {
  disabled: boolean;
  format: 'negative' | 'positive' | 'neutral';
  theme: 'default' | 'light' | 'dark';
}

const ArrowWrapperStyled = styled.div<ArrowWrapperStyledProps>`
  display: none;

  @supports (appearance: none) {
    display: flex;
    position: absolute;
    top: 50%;
    right: ${rem(4)};
    width: ${rem(ArrowIconWrapperWidth)};
    justify-content: center;
    align-items: center;
    transform: translateY(-50%);
    pointer-events: none;

    svg {
      width: ${rem(ArrowIconSize)};
      height: ${rem(ArrowIconSize)};

      * {
        ${getArrowColor};
      }
    }
  }
`;

export const SelectWrapper: SFC<SelectWrapperProps> = ({
  children,
  disabled,
  errorMsg,
  format = 'neutral',
  helperMsg,
  icon,
  id,
  label,
  showLabel = true,
  size = 'md',
  theme = 'default',
  ...props
}) => (
  <InputWrapper
    {...props}
    showLabel={showLabel}
    disabled={disabled}
    errorMsg={errorMsg}
    format={format}
    helperMsg={helperMsg}
    label={label}
    labelForId={id}
    size={size}
    theme={theme}
  >
    <WrapperStyled>
      {icon && <IconWrapperStyled>{icon}</IconWrapperStyled>}
      {children}
      <ArrowWrapperStyled
        format={format}
        disabled={disabled}
        theme={theme}
      >
        <ChevronDown />
      </ArrowWrapperStyled>
      <FocusOutline />
    </WrapperStyled>
  </InputWrapper>
);
