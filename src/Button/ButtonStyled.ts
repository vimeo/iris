import styled, { css } from 'styled-components';
import { rem } from 'polished';
import {
  ButtonCoreCSS,
  getActiveCSSByFormat,
  getAutoWidthCSS,
  getDefaultCSSByFormat,
  getDisabledCSSByFormat,
  getHoverCSSByFormat,
  getSizeCSS,
} from './ButtonHelpers';
import { ButtonStyleSettings } from './ButtonStyleSettings';
import {
  buttonFormats,
  CustomFormatButton,
  buttonSizes,
} from './ButtonTypes';

const maybeGetFeaturedIconCSS = props => {
  const thisButtonSize =
    ButtonStyleSettings.Sizes[props.size] ||
    ButtonStyleSettings.Sizes.md;

  if (props.hasFeaturedIcon && thisButtonSize) {
    const combinedPaddingBySize = `${
      thisButtonSize.minHeight
    } + 1rem`;

    return `
      padding-right: calc(${combinedPaddingBySize});
      padding-left: calc(${combinedPaddingBySize});
  `;
  }
};

export const ButtonStyled = styled.button<{
  autoWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'fluid';
  customFormat?: CustomFormatButton;
  format: buttonFormats;
  hasFeaturedIcon?: boolean;
  size: buttonSizes;
}>`
    ${ButtonCoreCSS}
    ${getSizeCSS}
    ${maybeGetFeaturedIconCSS}
    ${getAutoWidthCSS};

    border-radius: ${props =>
      props.size === 'xs' ? rem(2) : rem(3)};

    ${props =>
      props.customFormat
        ? customDefault(props)
        : getDefaultCSSByFormat};

    &:hover {
        cursor: pointer;
        ${props =>
          props.customFormat
            ? customHoverActive(props)
            : getHoverCSSByFormat};
    }

    &:active {
        transform: scale(0.98);
        ${props =>
          props.customFormat
            ? customHoverActive(props)
            : getActiveCSSByFormat};
    }

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
        cursor: not-allowed;
        transform: scale(1);
        pointer-events: none;
        ${getDisabledCSSByFormat}
    }
`;

export const ButtonLabelStyled = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-flex;
`;

const customDefault = props => css`
  background: ${props.customFormat.defaultBackgroundColor};
  border-color: ${props.customFormat.defaultBorderColor ||
    props.customFormat.defaultBackgroundColor};
  color: ${props.customFormat.defaultTextColor};
`;

const customHoverActive = props => css`
  background: ${props.customFormat.hoverBackgroundColor};
  border-color: ${props.customFormat.hoverBorderColor ||
    props.customFormat.hoverBackgroundColor};
  color: ${props.customFormat.hoverTextColor ||
    props.customFormat.defaultTextColor};
`;
