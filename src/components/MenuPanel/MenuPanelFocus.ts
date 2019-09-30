import styled from 'styled-components';
import { TriggerWrapperStyled } from './MenuPanelStyled';
import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../FocusOutline/FocusOutline';

export const MenuPanelFocusOutline = styled.div<FocusOutlineProps>`
  ${FocusOutline};

  ${TriggerWrapperStyled}:focus & {
    ${FocusOutlineFocused};
  }
`;
