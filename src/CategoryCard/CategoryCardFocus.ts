import styled from 'styled-components';
import { Anchor } from './CategoryCardStyled';
import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../FocusOutline/FocusOutline';

export const CCFocusOutline = styled.div<FocusOutlineProps>`
  ${FocusOutline};

  ${Anchor}:focus & {
    ${FocusOutlineFocused};
  }
`;
