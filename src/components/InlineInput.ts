import { css } from 'styled-components';
import { rem } from 'polished';

export const WrapperStyles = css`
  display: flex;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
`;

export const InlineStyles = css`
  display: inline-flex;
  position: absolute;
  z-index: 2;
  top: 0.625rem;
  left: 0.625rem;
  width: ${rem(1)};
  height: ${rem(1)};
  margin: 0;
  appearance: none;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: 0;
  }
`;
