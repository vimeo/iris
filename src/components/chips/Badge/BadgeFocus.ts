import styled from 'styled-components';
import { BadgeStyled } from './Badge';
import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../../../utils';

export const BadgeFocusOutline = styled.div<FocusOutlineProps>`
  ${FocusOutline};

  ${BadgeStyled}:focus & {
    ${FocusOutlineFocused};
  }
`;
