import styled, { css, keyframes } from 'styled-components';
import { rem, rgba } from 'polished';

import { grayscale, slate } from '../../color';
import { core } from '../../tokens/core';

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

export const Toggle = styled.button<{
  href?: string;
  indentation: number;
  open?: boolean;
}>`
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  top: 0.625rem;
  left: ${({ indentation }) => rem(indentation - 28)};

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${toggleHoverColor};
  }

  border: 0px;
  border-radius: 0.25rem;
  cursor: pointer;
  z-index: 1;

  > svg {
    transition: 120ms ease-in-out;
    transform: ${(p) => (p.open ? 'rotate(0deg)' : 'rotate(-90deg)')};

    * {
      fill: ${({ theme }) => theme.content.color};
    }
  }
`;

export const Header = styled.div`
  display: block;
  padding: 0.5rem 1.25rem 0.5rem 2rem;
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

export const ItemStyled = styled.button<{
  active?: boolean;
  hasAction: boolean;
  href?: string;
  indentation: number;
}>`
  padding: 0.5rem;
  padding-right: ${(p) => (p.hasAction ? '1.5rem' : '0.5rem')};
  padding-left: ${({ indentation }) => rem(indentation)};
  display: flex;
  position: relative;
  align-items: center;
  line-height: 1.5rem;
  font-size: 0.875rem;
  width: 100%;
  background: ${({ active, theme }) =>
    active ? itemHoverColor({ theme }) : 'transparent'};
  color: ${({ theme }) => theme.content.color};
  border: 0;
  cursor: pointer;
  transition: background 120ms ease-in-out;

  &:hover {
    background: ${itemHoverColor};
  }

  &:focus {
    outline: none;
  }

  > svg {
    width: 1.125rem;
    height: 1.125rem;
    min-width: 1.125rem;
    min-height: 1.125rem;
    margin-right: 0.5rem;

    * {
      fill: ${({ theme }) => theme.content.color};
    }
  }
`;

export const MenuStyled = styled.div<{
  format: 'basic' | 'secondary';
}>`
  display: block;
  width: 20rem;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.content.color};
  background: ${({ format }) =>
    format === 'secondary'
      ? core.color.background(200)
      : core.color.background(600)};
`;

const animation = css`
  animation: ${fade} 140ms ease-in-out both;

  ${[...Array(30)].map(
    (_, i) => css`
      &:nth-child(${i + 1}) {
        animation-delay: ${(i + 1) * 40}ms;
      }
    `
  )};
`;

export const SubMenu = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  border-radius: 0.2rem;
  position: relative;
  transition: 80ms ease-in-out;

  & ${Toggle}:hover + ${ItemStyled} {
    background: ${itemHoverColor};
  }

  ${(p) =>
    p.style.animationDelay &&
    css`
      animation: ${fade} 140ms ease-in-out both;
    `}

  > svg {
    width: 1.125rem;
    height: 1.125rem;
    margin: 0 0.5rem 0 0;
    display: inline-block;

    * {
      fill: ${({ theme }) => rgba(theme.content.color, 0.667)};
    }
  }
`;

export const TextContainer = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

function itemHoverColor({ theme }) {
  return theme.name === 'dark' ? grayscale(700) : slate(100);
}

function toggleHoverColor({ theme }) {
  return theme.name === 'dark' ? grayscale(600) : slate(200);
}
