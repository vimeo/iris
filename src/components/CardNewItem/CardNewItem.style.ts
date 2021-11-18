import { AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { tokens } from './CardNewItem.tokens';

import { core } from '../../tokens';
import { Text as T } from '../../typography';
import { CirclePlus as CP } from '../../icons';
import { white } from '../../color';

export const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  min-height: 12rem;
  border-radius: ${rem(4)};
  ${core.edge(0)};
  transition: 150ms ease-in-out;

  svg {
    height: ${rem(30)};
    background: ${tokens.icon};
    transition: 180ms ease-in-out;
  }

  p {
    margin-top: ${rem(12)};
    margin-bottom: 0;
    transition: 150ms ease-in-out;
  }

  &:hover,
  &:focus,
  &:focus-within,
  &:active {
    outline: none;
    ${core.edge(200)};
    transform: scale(1.0075);

    svg {
      transform: scale(1.025);
      background: ${tokens.iconHover};
    }
  }
`;

export const CirclePlus = styled(CP)`
  margin-bottom: 0.5rem;
  border-radius: 50%;

  path:first-child {
    fill: none;
  }

  path:last-child {
    fill: ${white};
  }
`;

export const Text = styled(T)`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: ${core.color.text(0)};
`;

export const Card = styled.div<AnchorHTMLAttributes<any>>`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  z-index: 2;
  background-color: ${tokens.background};
  transition: 150ms ease-in-out;

  &:hover,
  &:focus,
  &:focus-within,
  &:active {
    background-color: ${tokens.backgroundHover};
  }

  &:focus {
    outline: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
