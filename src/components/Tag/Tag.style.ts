import styled from 'styled-components';
import { rem } from 'polished';

import { Sizes } from './Tag.types';

import { Button } from '../Button/Button';
import { DismissX as DismissIcon } from '../../icons';

const width = (size: Sizes) => widths[size];
const widths: { [key in Sizes]: number } = {
  xl: 60,
  lg: 48,
  md: 39,
  sm: 32,
  xs: 24,
};

const padding = (size: Sizes) => paddings[size];
const paddings: { [key in Sizes]: number } = {
  xl: widths.xl + 20,
  lg: widths.lg + 20,
  md: widths.md + 14,
  sm: widths.sm + 8,
  xs: widths.xs + 6,
};

interface Props {
  src: string;
}

export const Tag = styled(Button).attrs({
  pill: true,
  radius: 66,
})<Props>`
  border-radius: ${rem(66)};

  ${({ src, size }) =>
    src && `padding-left: ${rem(padding(size))} !important`}
`;

export const Image = styled.img<{ size: Sizes }>`
  position: absolute;
  top: 0.03125rem;
  left: 0.03125rem;
  border-radius: 50%;
  height: calc(100% - 0.03125rem);
  width: ${(p) => rem(width(p.size))};
`;

export const DismissX = styled(DismissIcon)`
  transition: 120ms ease-in-out;

  &:hover {
    transform: scale(1.1) rotate(15deg);
  }
`;
