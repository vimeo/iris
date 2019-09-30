import React from 'react';
import styled from 'styled-components';
import * as COLORS from '../../color';
import { rem } from 'polished';
import { css } from 'styled-components';
import { ParagraphMd } from '../../legacy';

const size = rem(20);
const margin = rem(8);

export const MenuItemContentStyled = styled<any>(
  ({ hasSubMenu, hasRightSideContent, ...props }) => (
    <ParagraphMd {...props} />
  ),
)`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: ${rem(12)} ${rem(10)};
  max-width: 30rem;
  margin-bottom: 0;

  ${props =>
    props.hasSubMenu &&
    css`
      padding-left: ${rem(28)};
    `};

  ${props =>
    props.hasRightSideContent &&
    css`
      padding-right: ${size} + 1rem;
    `};
`;

export const LabelStyled = styled.span<{
  hasIcon: boolean;
  isTruncated: boolean;
}>`
  width: 100%;

  ${props =>
    props.hasIcon &&
    css`
      width: calc(100% - ${size} + ${margin});
    `};

  ${props =>
    props.isTruncated &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `};
`;

export const LabelIconStyled = styled.span<{
  labelIconTheme?: 'default' | 'subtle';
}>`
  margin-bottom: ${rem(-6)};
  margin-right: ${margin};
  transform: translateY(${rem(-3)});

  svg {
    width: ${size};
    height: ${size};

    * {
      fill: ${props =>
        props.labelIconTheme === 'subtle'
          ? COLORS.SoutherlySky
          : 'currentColor'};
    }
  }
`;

export const LinkActionWrapper = styled.span`
  position: absolute;
  top: ${rem(11)};
  right: 0.5rem;

  svg {
    width: ${size};
    height: ${size};

    * {
      fill: currentColor;
    }
  }
`;

export const ActionButtonStyled = styled.span`
  position: absolute;
  z-index: 6;
  top: ${rem(4)};
  right: ${rem(4)};
`;
