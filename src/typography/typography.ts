/* stylelint-disable */

import { css } from 'styled-components';

export const antialias = ({ theme: { name } }) =>
  name === 'dark' &&
  css`
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
  `;
