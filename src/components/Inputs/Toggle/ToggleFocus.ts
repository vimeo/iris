import styled from 'styled-components';
import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../../../utils';
import {
  ToggleWrapper,
  ToggleLabel,
  Input,
  ToggleOverlay,
} from './ToggleStyled';
import { rem } from 'polished';

export const ToggleFocusOutline = styled.div<FocusOutlineProps>`
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
