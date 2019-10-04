import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { WrapperStyledProps } from './PopOverListTypes';
import * as COLORS from '../../../color';

const maybeHasDividerBorder = props =>
  props.hasDivider &&
  css`
    border-top: ${rem(1)} solid
      ${props =>
        props.theme === 'dark' ? COLORS.IronHeart : COLORS.Porcelain};
  `;

export const WrapperStyled = styled.div<WrapperStyledProps>`
  padding: 0;

  ${maybeHasDividerBorder};
`;

export const HeaderWrapperStyled = styled.div`
  margin-top: ${rem(8)};
  margin-right: ${rem(24)};
  margin-left: ${rem(24)};
  padding: 0.75rem 0 0.25rem;
`;

export const MenuListStyled = styled.ul`
  margin: 0;
  list-style-type: none;
`;
