/* stylelint-disable */

import { css } from 'styled-components';

export const antialias = css`
  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizelegibility;
`;

export const antialiasDark = ({ theme: { name } }) =>
  name === 'dark' && antialias;
