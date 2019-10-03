import styled, { css } from 'styled-components';
import { rem, rgba } from 'polished';
import { theme } from '../../../themes';
// import { rgba } from '../../../color';

interface Props {
  loading?: boolean;
  selected?: boolean;
}

export const Card = styled.div<Props>`
  position: relative;
  border-radius: ${rem(3)};
  width: 100%;
  transform: scale(1) translate3d(0, 0, 0);
  transition: border 170ms ease-in-out;
  color: ${theme.color};

  background: ${p => (p.loading ? theme.item.locked : theme.item.bg)};

  border: 1px solid
    ${p =>
      p.selected ? theme.formats.primary : theme.formats.secondary};

  ${hover};

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${rem(3)};
    transition: box-shadow 120ms ease-in-out,
      transform 120ms ease-in-out, opacity 120ms ease-in-out;
    pointer-events: none;
    ${boxShadow};
  }
`;

export function boxShadow({ loading, selected }: Props) {
  return (
    !loading &&
    css`
      box-shadow: 0 0 0
        ${selected
          ? rem(3) + ' ' + theme.formats.primary
          : rem(8) + ' 0 rgba(0, 0, 0, 0.1)'};
    `
  );
}

export function hover({ loading, selected }: Props) {
  return (
    !loading &&
    !selected &&
    css`
      &:hover {
        border: ${rem(1)} solid ${rgba(theme.color, 0.3)};
        &:after {
          box-shadow: rgba(0, 0, 0, 0.16667) 0 0.5rem 1rem -0.5rem,
            rgba(0, 0, 0, 0.3334) 0 0 0.25rem -0.0625rem;
        }
      }
    `
  );
}
