import styled from 'styled-components';
import { Wrapper, Anchor } from './AddNewItemStyled';
import {
    FocusOutline,
    FocusOutlineFocused,
    FocusOutlineProps,
} from '../FocusOutline/FocusOutline';

export const ANICFocusOutline = styled.div<FocusOutlineProps>`
    ${FocusOutline};
    top: -0.5rem;
    left: -0.5rem;
    width: calc(100% + 1rem);
    height: calc(100% + 1rem);

    ${Wrapper}:focus &,
    ${Anchor}:focus & {
        ${FocusOutlineFocused};
    }
`;
