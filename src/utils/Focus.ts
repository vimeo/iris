import styled, { css, StyledComponent } from 'styled-components';
import { VimeoBlue } from '../color';
import { rem, rgba } from 'polished';

interface Props {
  focused?: boolean;
  radius?: number;
  distance?: number;
  parent?: StyledComponent<any, any>;
}

export const Focus = styled.div<Props>`
  ${({ parent, focused, radius = 6, distance = 4 }) => {
    // const { focus } = readTheme(props);
    const focus = VimeoBlue;

    return css`
      z-index: 1;
      top: ${rem(distance * -1)};
      left: ${rem(distance * -1)};
      position: absolute;
      width: calc(100% + ${rem(distance * 2)});
      height: calc(100% + ${rem(distance * 2)});
      pointer-events: none;
      transform: scale(0.94);
      border-radius: ${rem(radius)};
      border: ${rem(1)} solid ${rgba(focus, 0)};
      transition: 150ms ease-in-out;
      ${parent}:focus &,
      ${parent}:focus ~ &,
      ${parent}:focus ~ div > & {
        transform: scale(1);
        border: ${rem(2)} solid ${focus};
      }
      ${focused &&
        css`
          transform: scale(1);
          border: ${rem(2)} solid ${focus};
        `}
    `;
  }}
`;
