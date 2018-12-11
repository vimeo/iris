import styled, { css } from 'styled-components';
import { Button } from '../Button/Button';
import { ButtonLoadingStateProps as Props } from './ButtonLoadingStateTypes';

const waitCursor = ({ isLoading }) =>
    isLoading &&
    css`
        &:hover {
            cursor: wait !important;
        }
    `;

export const ButtonLoadingStateStyled = styled<Props, any>(Button)`
    ${waitCursor};
`;
