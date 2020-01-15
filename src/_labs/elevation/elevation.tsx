import { rgba } from 'polished';
import { css } from 'styled-components';

import { black, white } from '../../color';

export function elevation({ theme, elevation: e }) {
  const intensity = theme.name === 'dark' ? 0.667 : 0.2;

  const key = `0 0 ${e / 1000}rem 0 ${rgba(black, intensity / 1.6)}`;
  const fill = `0 ${e / 1666.667}rem ${e / 2500 +
    e / 2500}rem 0 ${rgba(black, intensity)}`;
  // const back =
  //   theme.name === 'dark' &&
  //   `0 ${e / -10000}rem ${e / 20000}rem ${e / 50000}rem ${rgba(
  //     White,
  //     0.1,
  //   )}`;

  const transform = 'scale(' + (e / 5000 + 0.9) + ')';
  const boxShadow = key + ', ' + fill;
  //  + (back ? ', ' + back : '');

  return css({
    transform,
    boxShadow,
  });
}

// export const contour = ({ theme }: IrisTheme) =>
//   css`
//     border: 1px solid ${theme.contour};
//     /* border-top: 1px solid ${rgba(theme.contour, 0.2)}; */
//   `;
