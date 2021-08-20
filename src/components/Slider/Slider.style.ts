import styled, { css } from 'styled-components';

import { white } from '../../color';
import { rgba } from 'polished';

export const Label = styled.div<{ focused: boolean }>`
  position: absolute;
  top: 100%;
  transform: translate(-30%, 0.5rem);
  padding: 0.5rem;
  width: 3rem;
  text-align: center;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => rgba(theme.content.color, 0.334)};
  transition: 100ms ease-in-out;
  background: ${({ theme }) => theme.item.bg};
  color: ${({ theme }) => theme.content.color};

  ${(p) =>
    p.focused &&
    css`
      transform: translate(-25%, 0.75rem) scale(1.075);
    `}
`;

export const LabelInput = styled.input.attrs({ type: 'number' })<{
  value: number;
  onChange: any;
  onFocus: any;
  focused: boolean;
}>`
  width: 100%;
  font-size: 1rem;
  padding: 0;
  margin: 0;
  background: ${({ theme }) => theme.item.bg};
  color: ${({ theme }) => theme.content.color};
  border: none;
  outline: none;
  overflow: visible;
  appearance: none;
  text-align: center;

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
  top: -0.5rem;
  transform: translateX(-50%);
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

export const ActiveRange = styled.div.attrs<{ values?: number[] }>(
  ({ values }) => ({
    style: {
      width: values[1] - values[0] + '%',
      left: values[0] + '%',
    },
  })
)<{ values?: number[] }>`
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
