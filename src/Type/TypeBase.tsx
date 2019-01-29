import React, { SFC } from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { VimeoStyleSettings } from '../Legacy/VimeoStyleSettings';
import * as COLORS from '../Color/Color';
import {
  TypeByCSSInterface,
  TypeProps,
  StyledTypeElementProps,
} from './TypeTypes';
import { getUnitlessLineHeight } from './TypeHelpers';
import { Omit } from '../Utils/Omit';
import { TypeVariableElement } from './TypeVariableElement';

export const TypeBaseStyleSettings = {
  fontFamily: {
    regular: VimeoStyleSettings.type.fontFamily.regular,
    light: VimeoStyleSettings.type.fontFamily.light,
  },
  fontSize: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    stat: 24,
    h1: 36,
    h2: 28,
    h3: 22,
    h4: 18,
    h5: 16,
    h6: 14,
    headerSm: 12,
  },
  fontWeight: {
    xs: 'normal',
    sm: 'normal',
    md: 'normal',
    lg: 'normal',
    stat: VimeoStyleSettings.type.weights.light,
    plusUltra: '800',
    h1: VimeoStyleSettings.type.weights.medium,
    h2: VimeoStyleSettings.type.weights.medium,
    h3: VimeoStyleSettings.type.weights.medium,
    h4: VimeoStyleSettings.type.weights.medium,
    h5: VimeoStyleSettings.type.weights.medium,
    h6: VimeoStyleSettings.type.weights.medium,
    headerSm: VimeoStyleSettings.type.weights.mediumLight,
  },
  format: {
    alternative: {
      default: VimeoStyleSettings.colors.typeColors.textColorMedium,
    },
    light: {
      xs: VimeoStyleSettings.colors.typeColors.textColorMediumLight,
      sm: VimeoStyleSettings.colors.typeColors.textColorMediumLight,
      md: VimeoStyleSettings.colors.typeColors.textColorMediumLight,
      lg: VimeoStyleSettings.colors.typeColors.textColorMediumLight,
      stat: VimeoStyleSettings.colors.typeColors.textColorMediumLight,
      headerSm:
        VimeoStyleSettings.colors.typeColors.textColorMediumDark,
      default: VimeoStyleSettings.colors.typeColors.textColorLight,
    },
    dark: {
      default: VimeoStyleSettings.colors.typeColors.textColorDark,
    },
    white: {
      default: COLORS.White,
    },
    success: {
      default: COLORS.Pistachio,
    },
  },
  letterSpacing: {
    xs: '0.01rem',
    sm: '0.01rem',
    md: '0.01rem',
    lg: '0.01rem',
    stat: '0.01rem',
    h1: '0.04rem',
    h2: '0.04rem',
    h3: '0.01rem',
    h4: '0.01rem',
    h5: '0.01rem',
    h6: '0.01rem',
    headerSm: '.033rem',
  },
  lineHeight: {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 20,
    stat: 32,
    h1: 40,
    h2: 32,
    h3: 30.8,
    h4: 24,
    h5: 20,
    h6: 20,
    headerSm: 18,
  },
  marginBottom: {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    stat: 24,
    h1: 20,
    h2: 16,
    h3: 8,
    h4: 4,
    h5: 8,
    h6: 8,
    headerSm: 8,
  },
};

const darkFontSmoothing = props =>
  (props.format === 'light' || props.format === 'white') &&
  css`
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
  `;

const getColor = ({ size, format }) =>
  TypeBaseStyleSettings.format[format][size] ||
  TypeBaseStyleSettings.format[format].default;
const getFontSize = size => TypeBaseStyleSettings.fontSize[size];
const getFontWeight = size => TypeBaseStyleSettings.fontWeight[size];
const getLetterSpacing = size =>
  TypeBaseStyleSettings.letterSpacing[size];
const getLineHeight = size => TypeBaseStyleSettings.lineHeight[size];
const getFontFamily = fontStack =>
  fontStack
    ? TypeBaseStyleSettings.fontFamily[fontStack]
    : TypeBaseStyleSettings.fontFamily.regular;
const getMarginBotton = ({ size, noMargin }) =>
  noMargin ? '0' : rem(TypeBaseStyleSettings.marginBottom[size]);
// This function serves as an interface to generate type styles in the same way the old SCSS type mixins work
// it is used when a type component cannot be used in a component for some reason. (e.g. styling a third-party plugin)
// it also creates our basic type styles.
export const typeCSSByProps = ({
  size,
  fontStack,
  format,
  noMargin,
}: TypeByCSSInterface) => css`
  color: ${getColor({ size, format })};
  font-size: ${size !== 'plusUltra'
    ? rem(getFontSize(size))
    : 'calc(2rem + 3.5vw)'};
  font-family: ${getFontFamily(fontStack)};
  font-weight: ${getFontWeight(size)};

  letter-spacing: ${size !== 'plusUltra'
    ? getLetterSpacing(size)
    : 'calc(-0.125rem - 0.0025vw)'};
  line-height: ${size !== 'plusUltra'
    ? getUnitlessLineHeight(getFontSize(size), getLineHeight(size))
    : 'calc(2.0625rem + 3.5125vw)'};
  margin-bottom: ${size !== 'plusUltra'
    ? getMarginBotton({ size, noMargin })
    : 'calc(1rem + 0.875vw)'};
  max-width: 44rem;

  ${darkFontSmoothing};
`;

const StyledElement = styled<StyledTypeElementProps & TypeProps, any>(
  TypeVariableElement,
)`
  ${props =>
    typeCSSByProps({
      fontStack: props.fontStack,
      format: props.format,
      noMargin: props.noMargin,
      size: props.size,
    })} strong {
    // handle bold styling within paragaphs.
    font-weight: ${VimeoStyleSettings.type.weights.medium};
  }
`;

export const TypeBase: SFC<
  StyledTypeElementProps &
    TypeProps &
    Omit<React.HTMLProps<HTMLElement>, 'size'>
> = ({ ref: _, ...props }) => <StyledElement {...props} />;
