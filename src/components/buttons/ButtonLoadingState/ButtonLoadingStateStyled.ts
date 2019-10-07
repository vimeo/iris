import styled, { css } from 'styled-components';
import { Button } from '../Button/Button';

const waitCursor = ({ isLoading = false }) =>
  isLoading &&
  css`
    &:hover {
      cursor: wait !important;
    }
  `;

export const ButtonLoadingStateStyled = styled(Button)<{
  isLoading?: boolean;
}>`
  ${waitCursor};
`;
