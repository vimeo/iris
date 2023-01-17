import styled, { css } from 'styled-components';

import { white } from '../../../color';
import { rgba } from 'polished';

export const UnitSign = styled.div<{ unit?: string }>`
  position: absolute;
  margin-left: 1.5rem;
`;

export const Label = styled.div<{
  focused: boolean;
  stickyLabel: boolean;
}>`
  position: ${({ stickyLabel }) =>
    stickyLabel ? 'absolute' : 'relative'};
  top: ${({ stickyLabel }) => stickyLabel && '100%'};
  display: grid;
  place-items: center;
  transform: ${({ stickyLabel }) =>
    stickyLabel && 'translate(-30%, 0.5rem)'};
  font-size: 0.75rem;
  margin-left: ${({ stickyLabel }) => !stickyLabel && '1.25rem'};
  width: 3rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => rgba(theme.content.color, 0.334)};
  transition: 100ms ease-in-out;
  background: ${({ theme }) => theme.item.bg};
  color: ${({ theme }) => theme.content.color};

  ${(p) =>
    p.focused &&
    p.stickyLabel &&
    css`
      transform: translate(-25%, 0.75rem) scale(1.075);
    `}
`;

export const LabelInput = styled.input.attrs({ type: 'number' })<{
  value: number;
  onChange: any;
  onFocus: any;
  focused: boolean;
  stickyLabel: boolean;
  inputLabelArrows: boolean;
}>`
  width: 2.5rem;
  font-size: 0.75rem;
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
    appearance: ${({ inputLabelArrows }) =>
      !inputLabelArrows && 'none'};
    cursor: pointer;
  }
  &::-outer-inner-spin-button {
    appearance: ${({ inputLabelArrows }) =>
      !inputLabelArrows && 'none'};
    cursor: pointer;
  }

  &:focus ~ ${UnitSign} {
    display: none;
  }
  &:hover ~ ${UnitSign} {
    display: none;
  }
`;

export const HandleStyled = styled.div<{ focused?: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: ${white};
  position: absolute;
  top: -0.6rem;
  transform: translateX(-50%);
  cursor: pointer;
  border: 1px solid ${({ theme }) => rgba(theme.content.color, 0.1)};
  z-index: 2;

  ${({ theme }) => theme.shadows.small};
`;

export const Background = styled.div<{ range?: boolean }>`
  position: relative;
  width: 100%;
  height: 0.3rem;
  background: ${({ range, theme }) =>
    range ? theme.formats.secondary : theme.formats.primary};
  border-radius: 0.125rem;
`;

export const ActiveRange = styled.div.attrs<{ values?: number[] }>(
  ({ values }) => ({
    style: {
      width: values[1] - values[0] + '%',
      left: values[0] + '%',
    },
  })
)<{ values?: number[]; range?: boolean }>`
  pointer-events: none;
  position: absolute;
  height: 100%;
  background: ${({ range, theme }) =>
    range ? theme.inputs.primary : theme.formats.secondary};
  z-index: 1;
  border-radius: 0.125rem;
`;

export const Hidden = styled.input.attrs({ type: 'range' })`
  position: absolute;
  height: 0;
  width: 0;
  opacity: 0;
`;
