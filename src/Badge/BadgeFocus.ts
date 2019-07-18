import styled from 'styled-components';
import { BadgeStyled } from './Badge';
import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../FocusOutline/FocusOutline';

export const BadgeFocusOutline = styled.div<FocusOutlineProps>`
  ${FocusOutline};

  ${BadgeStyled}:focus & {
    ${FocusOutlineFocused};
  }
`;
