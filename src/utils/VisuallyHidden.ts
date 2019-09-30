import { css } from 'styled-components';

// https://snook.ca/archives/html_and_css/hiding-content-for-accessibility

export const visuallyHiddenCSS = css`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;
