import styled from 'styled-components';
import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../FocusOutline/FocusOutline';
import {
  ToggleWrapper,
  ToggleLabel,
  Input,
  ToggleOverlay,
} from './InputToggleStyled';
import { rem } from 'polished';

export const InputToggleFocusOutline = styled.div<FocusOutlineProps>`
    ${FocusOutline}
    border-radius: ${rem(13)};

    ${Input}:focus &,
    ${ToggleLabel}:focus &,
    ${ToggleOverlay}:focus &,
    ${ToggleWrapper}:focus-within & {
        ${FocusOutlineFocused}
        border-radius: ${rem(13)};
    }
`;
