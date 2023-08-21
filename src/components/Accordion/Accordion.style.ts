import { rem } from 'polished';
import styled, { css, keyframes } from 'styled-components';

import { ChevronDown, CircleWarning } from '../../icons';
import { Header } from '../../typography';

import { grayscale } from '../../color';
import { core } from '../../tokens';

export const AccordionStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(8)};
`;

export const Wrapper = styled.div<{
  format: 'basic' | 'secondary';
  active: boolean;
  disabled: boolean;
}>`
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.4;
    `}
  ${({ active, theme, format }) =>
    active &&
    css`
      background-color: ${format === 'basic'
        ? theme.name === 'dark'
          ? grayscale(800)
          : grayscale(50)
        : 'none'};
    `}
  border-radius: ${rem(10)};
  color: ${core.color.text.primary};
  ${({ active, theme, format }) =>
    active &&
    css`
      border: ${format === 'secondary'
        ? theme.name === 'dark'
          ? `${rem(1)} solid ${grayscale(800)}`
          : `${rem(1)} solid ${grayscale(50)}`
        : 'none'};
    `}
`;

export const TriggerContainer = styled.button<{
  format: 'basic' | 'secondary';
  active: boolean;
}>`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: ${rem(12)} ${rem(15)};
  border-radius: ${rem(10)};
  width: 100%;
  &:hover {
    background-color: ${({ theme, format }) =>
      format === 'basic'
        ? theme.name === 'dark'
          ? grayscale(800)
          : grayscale(50)
        : 'none'};
    outline: ${({ active, theme, format }) =>
      !active && format === 'secondary'
        ? theme.name === 'dark'
          ? `${rem(1)} solid ${grayscale(800)}`
          : `${rem(1)} solid ${grayscale(50)}`
        : 'none'};
  }

  &:focus {
    outline: none;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  margin-right: ${rem(10)};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: ${rem(4)};
`;

export const Title = styled(Header)`
  margin-bottom: ${rem(0)};
`;

export const Subcopy = styled(Header)`
  margin-bottom: -${rem(0.2)};
`;

export const CircleWarningIcon = styled(CircleWarning)`
  width: ${rem(22)};
  margin-right: ${rem(10)};
  path {
    fill: ${core.color.status.negative};
  }
`;

const rotateUp = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-180deg);
    }
`;

const rotateDown = keyframes`
    from {
        transform: rotate(-180deg);
    }
    to {
        transform: rotate(0deg);
    }
`;

export const StyledChevronDown = styled(ChevronDown)`
  animation: ${rotateDown} 120ms ease-in-out both;
  path {
    fill: ${core.color.text.primary};
  }
`;

export const ChevronUp = styled(StyledChevronDown)`
  animation: ${rotateUp} 120ms ease-in-out both;
`;

const fadeAndExpand = keyframes`
  from {
    transform: translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Content = styled.div<{ active: boolean }>`
  padding: ${rem(0)} ${rem(15)} ${rem(20)} ${rem(18)};
  max-height: ${({ active }) => (active ? '100%' : '0')};
  overflow: hidden;
  transform: translateY(-50%);
  opacity: 0;
  ${({ active }) =>
    active &&
    css`
      animation: ${fadeAndExpand} 150ms ease-in-out both;
      opacity: 1;
    `};
`;
