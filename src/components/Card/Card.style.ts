import styled, { css } from 'styled-components';
import { rem, rgba } from 'polished';
import { IrisTheme } from '../../themes';

interface Props {
  $loading?: boolean;
  selected?: boolean;
  theme?: IrisTheme;
}

export const Card = styled.div<Props>`
  position: relative;
  border-radius: ${rem(3)};
  width: 100%;
  transform: scale(1) translate3d(0, 0, 0);
  transition: border 170ms ease-in-out;

  ${themeStyles};
  ${hoverStyles};

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    transition: box-shadow 120ms ease-in-out,
      transform 120ms ease-in-out, opacity 120ms ease-in-out;
    pointer-events: none;

    ${boxShadow};
  }
`;

function themeStyles({
  theme: { formats, item, content },
  $loading,
  selected,
}: Props) {
  const background = $loading ? item.locked : item.bg;
  const borderColor = selected ? formats.primary : formats.secondary;

  return css`
    color: ${content.color};
    background: ${background};
    border: 1px solid ${borderColor};
  `;
}

export function boxShadow({
  theme: { formats },
  $loading,
  selected,
}: Props) {
  const boxShadowColor = selected
    ? rem(3) + ' ' + formats.primary
    : rem(8) + ' 0 rgba(0, 0, 0, 0.1)';

  return (
    !$loading &&
    css`
      box-shadow: 0 0 0 ${boxShadowColor};
    `
  );
}

export function hoverStyles({
  theme: { content },
  $loading,
  selected,
}: Props) {
  const borderColor = rgba(content.color, 0.334);

  return (
    !$loading &&
    !selected &&
    css`
      &:hover {
        border: ${rem(1)} solid ${borderColor};

        box-shadow: rgba(0, 0, 0, 0.16667) 0 0.5rem 1rem -0.5rem,
          rgba(0, 0, 0, 0.3334) 0 0 0.25rem -0.0625rem;
      }
    `
  );
}
