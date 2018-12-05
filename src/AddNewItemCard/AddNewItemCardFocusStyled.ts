import styled from 'styled-components';
import { Wrapper, Anchor } from './AddNewItemStyled';
import {
    FocusBloop,
    FocusBloopFocused,
    FocusBloopProps,
} from '../FocusBloopNew/FocusBloopNew';

export const FocusOutline = styled<FocusBloopProps, 'div'>('div')`
    ${FocusBloop};
    top: -0.5rem;
    left: -0.5rem;
    width: calc(100% + 1rem);
    height: calc(100% + 1rem);

    ${Wrapper}:focus &,
    ${Anchor}:focus & {
        ${FocusBloopFocused};
    }
`;
