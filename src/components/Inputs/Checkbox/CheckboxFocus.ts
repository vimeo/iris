import styled from 'styled-components';
import { CheckboxStyled, Overlay } from './CheckboxStyled';
import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../../../utils';

export const CheckboxFocusOutline = styled.div<FocusOutlineProps>`
    ${FocusOutline}

    ${CheckboxStyled}:focus ~ ${Overlay} & {
        ${FocusOutlineFocused}
    }
`;
