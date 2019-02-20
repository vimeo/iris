import { css } from 'styled-components';
import { rem } from 'polished';
import { VimeoStyleSettings } from '../Legacy/VimeoStyleSettings';
import { mediaQuery } from '../Layout/MediaQuery';
import { ButtonColors } from './ButtonColors';
import { ButtonStyleSettings } from './ButtonStyleSettings';

const ButtonCoreCSS = css`
  display: inline-flex;
  position: relative;
  outline: 0;
  width: 100%;
  margin: 0;
  font-family: ${VimeoStyleSettings.type.fontFamily.regular};
  font-weight: 700;
  border-width: ${rem(1)};
  border-style: solid;
  transition: all 0.1s ease-in-out;
  text-align: center;
  vertical-align: middle;
  letter-spacing: 0.1px;
  align-items: center;
  justify-content: center;
  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizelegibility;
`;

const autoWidthCSS = css`
  width: auto;
`;

const getAutoWidthCSS = props =>
  props.autoWidth !== 'fluid' &&
  (props.autoWidth === 'xs'
    ? autoWidthCSS
    : mediaQuery[props.autoWidth]`
        ${autoWidthCSS}
      `);

const formatCSS = (format, state) =>
  ButtonStyleSettings.Formats[format] &&
  ButtonStyleSettings.Formats[format][state];

const getDefaultCSSByFormat = ({ format }) =>
  formatCSS(format, 'default') &&
  css`
    background-color: ${formatCSS(format, 'default').backgroundColor};
    border-color: ${formatCSS(format, 'default').borderColor};
    color: ${formatCSS(format, 'default').color};
  `;

const getHoverCSSByFormat = ({ format }) =>
  formatCSS(format, 'hover') &&
  css`
    background-color: ${formatCSS(format, 'hover').backgroundColor};
    border-color: ${formatCSS(format, 'hover').borderColor};
    color: ${formatCSS(format, 'hover').color};
  `;

const getActiveCSSByFormat = ({ format }) =>
  formatCSS(format, 'active') &&
  css`
    background-color: ${formatCSS(format, 'active').backgroundColor};
    border-color: ${formatCSS(format, 'active').backgroundColor};
  `;

const getDisabledCSSByFormat = ({ format }) =>
  format === 'primary' &&
  css`
    background-color: ${format === 'primary'
      ? ButtonColors.PrimaryDisabledBackground
      : ButtonColors.DisabledBackground};
    border-color: ${format === 'primary'
      ? ButtonColors.PrimaryDisabledBackground
      : ButtonColors.DisabledBackground};
    color: ${format === 'primary'
      ? ButtonColors.PrimaryDisabledText
      : ButtonColors.DisabledText};
  `;

const sizeCSS = size => ButtonStyleSettings.Sizes[size];

const getSizeCSS = ({ size }) => css`
  padding: ${sizeCSS(size).padding};
  font-size: ${sizeCSS(size).fontSize};
  line-height: ${sizeCSS(size).lineHeight};
  min-height: ${sizeCSS(size).minHeight};
  min-width: ${sizeCSS(size).minWidth};
`;

export {
  ButtonCoreCSS,
  getActiveCSSByFormat,
  getAutoWidthCSS,
  getDefaultCSSByFormat,
  getDisabledCSSByFormat,
  getHoverCSSByFormat,
  getSizeCSS,
};
