import { slate } from './../../../color/colors';

import styled from 'styled-components';

import { blue, white } from '../../../color';
import { rem, rgba } from 'polished';
import { SliderInputArrow } from './SliderInputArrow';

export const SliderContainer = styled.div<{ range: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0.75rem 0;
  margin-left: ${({ range }) => (range ? 0 : '0.75rem')};
`;

export const Label = styled.div<{ focused: boolean }>`
  position: relative;
  padding: 0.2125rem;
  width: 3.125rem;
  text-align: center;
  border-radius: 0.25rem;
  border: 1px solid
    ${({ theme, focused }) =>
      focused ? blue(500) : rgba(theme.content.color, 0.334)};
  background: ${({ theme }) => theme.item.bg};
  color: ${({ theme }) => theme.content.color};
  font-size: 0.75rem;
`;

export const LabelInput = styled.input.attrs({ type: 'number' })<{
  value: number;
  onChange: any;
  onFocus: any;
}>`
  width: 100%;
  padding: 0;
  margin: 0;
  background: ${({ theme }) => theme.item.bg};
  color: ${({ theme }) => theme.content.color};
  border: none;
  outline: none;
  overflow: visible;
  appearance: none;
  text-align: center;
  font-size: inherit;
  user-select: none;

  &::-webkit-inner-spin-button {
    appearance: none;
  }
  &::-outer-inner-spin-button {
    appearance: none;
  }
`;

export const HandleStyled = styled.div<{ focused?: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: ${white};
  position: absolute;
  top: 0;
  transform: translate(-50%, -45%);
  cursor: pointer;
  border: 1px solid ${({ theme }) => rgba(theme.content.color, 0.1)};
  z-index: 2;

  ${({ theme }) => theme.shadows.small};
`;

export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 0.3rem;
  background: ${({ theme }) => theme.formats.secondary};
  border-radius: 0.125rem;
`;

export const ActiveRange = styled.div.attrs<{
  values?: number[];
  max?: number;
  range?: boolean;
}>(({ values, max, range }) =>
  range
    ? {
        style: {
          width: ((values[1] - values[0]) / max) * 100 + '%',
          left: (values[0] / max) * 100 + '%',
        },
      }
    : {
        style: {
          left: 0,
          width: (values[0] / max) * 100 + '%',
        },
      }
)<{ values?: number[]; max?: number; range?: boolean }>`
  pointer-events: none;
  position: absolute;
  height: 100%;
  background: ${({ theme }) => theme.inputs.primary};
  z-index: 1;
  border-radius: 0.125rem;
`;

export const Hidden = styled.input.attrs({ type: 'range' })`
  position: absolute;
  height: 0;
  width: 0;
  opacity: 0;
`;

export const ArrowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: ${rem(4)};
  top: ${rem(0.5)};
  width: 10px;
  height: 100%;
  opacity: 0;
  transition: opacity 300ms ease;
`;

export const LabelInputContainer = styled.div`
  transition: padding 300ms ease;

  &:hover {
    padding-right: ${rem(8)};
  }

  &:hover ${ArrowsContainer} {
    opacity: 1;
  }
`;

export const SliderInputArrowStyled = styled(SliderInputArrow)`
  border-radius: ${rem(4)};
  cursor: pointer;

  &:hover {
    background: ${slate(50)};
  }
`;
