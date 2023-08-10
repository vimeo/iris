import { rem } from 'polished';
import styled, { css } from 'styled-components';

import { ChevronDown, CircleWarning } from '../../icons';
import { Paragraph } from '../../typography';

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

export const TriggerContainer = styled.div<{
  format: 'basic' | 'secondary';
  active: boolean;
}>`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: ${rem(12)} ${rem(15)};
  border-radius: ${rem(10)};
  &:hover {
    background-color: ${({ theme, format }) =>
      format === 'basic'
        ? theme.name === 'dark'
          ? grayscale(800)
          : grayscale(50)
        : 'none'};
    border: ${({ active, theme, format }) =>
      !active && format === 'secondary'
        ? theme.name === 'dark'
          ? `${rem(1)} solid ${grayscale(800)}`
          : `${rem(1)} solid ${grayscale(50)}`
        : 'none'};
  }
`;

export const Header = styled.div`
  display: flex;
  margin-right: ${rem(10)};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Paragraph)`
  font-size: ${rem(16)};
  font-weight: 700;
  margin-bottom: 0;
`;

export const Subcopy = styled(Paragraph)`
  font-size: ${rem(14)};
  font-weight: 400;
  margin-bottom: -${rem(0.2)};
`;

export const CircleWarningIcon = styled(CircleWarning)`
  width: ${rem(22)};
  margin-right: ${rem(10)};
  path {
    fill: ${core.color.status.negative};
  }
`;

export const StyledChevronDown = styled(ChevronDown)`
  path {
    fill: ${core.color.text.primary};
  }
`;

export const ChevronUp = styled(StyledChevronDown)`
  transform: rotate(180deg);
`;

export const Content = styled.div<{ active: boolean }>`
  padding: ${rem(0)} ${rem(15)} ${rem(20)};
  max-height: ${({ active }) => (active ? '100%' : '0')};
  overflow: hidden;
`;
