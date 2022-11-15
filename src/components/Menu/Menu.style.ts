import styled, { css, keyframes } from 'styled-components';
import { rgba } from 'polished';

import { grayscale, slate } from '../../color';
import { core } from '../../tokens';

export const Action = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.5rem;
  border: 0;
  background: transparent;

  &:focus {
    outline: none;
  }

  > svg {
    width: 1.125rem;
    height: 1.125rem;

    * {
      fill: ${({ theme }) => rgba(theme.content.color, 0.667)};
    }
  }
`;

export const Toggle = styled.button<{ open?: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  transition: 120ms ease-in-out;

  transform: ${(p) => (p.open ? 'rotate(0deg)' : 'rotate(-90deg)')};

  &:focus {
    outline: none;
  }
`;

export const Header = styled.div`
  display: block;
  padding: 0.5rem 1.25rem;
  text-transform: uppercase;
  margin: 0.2rem 0 0;
  color: ${(p) => rgba(p.theme.content.color, 0.5)};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.025rem;
`;

const fade = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.99) translateX(-0.25rem);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
`;

export const Wrapper = styled.div<{
  active?: boolean;
  $height?: number;
}>`
  border-radius: 0.2rem;
  position: relative;
  background: ${({ active, theme }) =>
    active &&
    (theme.name === 'dark'
      ? rgba(theme.content.color, 0.095)
      : rgba(theme.content.color, 0.065))};

  &:hover {
    background: ${({ theme }) => rgba(theme.content.color, 0.025)};
  }

  ${(p) =>
    p.$height &&
    css`
      transition: 230ms ease-in-out;
      height: ${(p.$height + 1) * 2.5 + 0.25}rem;
    `}
`;

export const SvgWrapper = styled.span`
  display: flex;
  align-items: center;
  padding-left: 0.5rem;

  > svg {
    width: 1.125rem;
    height: 1.125rem;
    display: inline-block;
  }

  * {
    fill: ${({ theme }) => rgba(theme.content.color, 0.667)};
  }
`;

export const ItemStyled = styled.button<{ hasToggle?: boolean }>`
  padding: ${(p) =>
    p.hasToggle ? '0.5rem 1.25rem 0.5rem 0' : '0.5rem 1.5rem'};
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  align-content: center;
  line-height: 1.5rem;
  border-radius: 0.2rem;
  font-size: 0.875rem;
  width: 100%;
  background: transparent;
  color: ${core.color.text(0)};
  border: 0;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => rgba(theme.content.color, 0.05)};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    color: ${core.color.text(600)};
    opacity: 0.5;
    pointer-events: none;
    user-select: none;
  }
`;

export const ItemLabel = styled.span`
  padding-left: 0.5rem;
`;

export const MenuStyled = styled.div<{
  format: 'basic' | 'secondary';
}>`
  display: block;
  width: 20rem;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.content.color};
  background: ${({ theme, format }) =>
    format === 'secondary'
      ? theme.name === 'dark'
        ? grayscale(970)
        : slate(30)
      : 'none'};
`;

export const SubMenu = styled.div<{ total: number }>`
  width: 100%;
  padding-top: 0.25rem;
  padding-left: 1rem;

  > div {
    animation: ${fade} 120ms ease-in-out both;
  }

  ${(p) =>
    [...new Array(30)].map(
      (_, i) => css`
        > :nth-child(${i}) {
          animation-delay: ${i * (20 + 100 / p.total)}ms;
        }
      `
    )};
`;
