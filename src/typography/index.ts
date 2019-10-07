import { css } from 'styled-components';

export { Paragraph } from './Paragraph';
export { Header } from './Header';
export { BigStat } from './BigStat';
export { LinkText } from './LinkText';

export const fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif';

export const antialias = css`
  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizelegibility;
`;
