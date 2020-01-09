import styled, { css } from 'styled-components';
import { rgba, rem } from 'polished';
import { blue } from '../color';

export const centered = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
} as const;

export const hidden = {
  position: 'absolute',
  height: '1px',
  width: '1px',
  overflow: 'hidden',
  clip: 'rect(1px, 1px, 1px, 1px)',
};

export const Focus = styled.div<any>`
  ${({ parent, focused, radius = 6, distance = 4 }) => {
    // const { focus } = readTheme(props);
    const focus = blue(500);

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
      ${parent}:focus > &,
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
