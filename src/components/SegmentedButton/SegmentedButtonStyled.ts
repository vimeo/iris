import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { SBBCProps } from './SegmentedButtonTypes';
import {
  ButtonCoreCSS,
  getDefaultCSSByFormat,
  getDisabledCSSByFormat,
  getHoverCSSByFormat,
  getSizeCSS,
} from '../Button/ButtonHelpers';
import * as COLORS from '../../color';

const OuterBorderRadius = rem(3);

export const LabelStyled = styled.label<HTMLProps<HTMLLabelElement>>`
  flex-grow: 1;
`;

export const OptionStyled = styled.span<SBBCProps>`
    ${ButtonCoreCSS}
    ${getSizeCSS}
    ${getDefaultCSSByFormat({ format: 'primaryOutline' })}

    display: flex;
    position: relative;
    flex-grow: 1;
    justify-content: center;
    align-items: center;

    &:hover {
        ${getHoverCSSByFormat({
          format: 'primaryOutline',
        })};
        cursor: pointer;
    }

    input:checked + & {
        ${props =>
          getDefaultCSSByFormat({
            format:
              props.format === 'light' ? 'primary' : 'primaryDark',
          })};

        &:hover {
            ${props =>
              getHoverCSSByFormat({
                format:
                  props.format === 'light'
                    ? 'primary'
                    : 'primaryDark',
              })};
        }
    }

    input:focus + & {
        box-shadow:
            0 0 0 ${rem(1)} ${COLORS.White},
            0 0 0 ${rem(3)} ${COLORS.VimeoBlue};
        z-index: 9;
    }

    ${LabelStyled}:first-child & {
        border-radius: ${OuterBorderRadius} 0 0 ${OuterBorderRadius};
    }

     ${LabelStyled}:last-child & {
        border-radius:  0 ${OuterBorderRadius} ${OuterBorderRadius} 0;
    }

    ${LabelStyled}:not(:first-child) & {
        /* // prevent double border on buttons. */
        border-left-width: 0;
    }

    ${props =>
      props.disabled &&
      `

        ${getDisabledCSSByFormat({
          format: 'primaryOutline',
        })}
        &:hover {
            ${getDisabledCSSByFormat({
              format: 'primaryOutline',
            })}
            cursor: not-allowed;
        }`}
`;

export const InputStyled = styled.input<
  React.HTMLProps<HTMLInputElement>
>`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  margin: 0;
  appearance: none;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;
