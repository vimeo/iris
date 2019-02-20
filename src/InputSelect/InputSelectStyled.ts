import styled from 'styled-components';
import { rem } from 'polished';
import { getInputBaseStyles } from '../InputText/InputHelpers';
import { ArrowIconWrapperWidth } from '../SelectWrapper/SelectWrapper';

interface StyledSelectProps {
  hasIcon: boolean;
  hasInlineIcon: boolean;
  format?: 'negative' | 'positive' | 'neutral';
  inputSize: 'sm' | 'md' | 'lg' | 'xl';
  theme: 'default' | 'light' | 'dark';
}

export const StyledSelect = styled.select<StyledSelectProps>`
  ${getInputBaseStyles};
  appearance: none;

  ${props =>
    props.hasInlineIcon &&
    `
      padding-left: ${rem(40)};
    `};

  &:-moz-focusring {
    color: transparent !important;
    text-shadow: 0 0 0 #000000 !important;
  }

  @supports (appearance: none) {
    padding-right: ${rem(ArrowIconWrapperWidth)};
  }
`;
