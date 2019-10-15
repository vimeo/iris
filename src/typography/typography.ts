/* stylelint-disable */

import { css } from 'styled-components';

export const antialias = ({ theme }) =>
  (theme.name === 'dark' || theme === 'dark') &&
  css`
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
  `;

export const fontFamily =
  '"Helvetica Neue", Helvetica, Arial, sans-serif';
