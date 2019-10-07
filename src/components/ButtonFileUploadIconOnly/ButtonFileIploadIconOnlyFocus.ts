import styled from 'styled-components';
import {
  Wrapper,
  InputStyled,
} from '../ButtonFileUploadWrapper/ButtonFileUploadWrapper';
import {
  FocusOutline,
  FocusOutlineFocused,
  FocusOutlineProps,
} from '../../utils';
import { LabelStyled } from './ButtonFileUploadIconOnlyStyled';

export const BFUIOFocus = styled.div<FocusOutlineProps>`
    ${FocusOutline}

    ${Wrapper}:focus-within &,
    ${LabelStyled}:focus &,
    ${InputStyled}:focus & {
        ${FocusOutlineFocused}
    }
`;
