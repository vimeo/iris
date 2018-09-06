// @ts-ignore
import {
    css,
    // @ts-ignore
    StyledComponentClass,
    // @ts-ignore
    Styles,
} from 'styled-components';

// https://snook.ca/archives/html_and_css/hiding-content-for-accessibility

const visuallyHiddenCSS = css`
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
`;

export default visuallyHiddenCSS;
