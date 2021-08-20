import { CSSProperties } from 'react';

import { IrisProps } from '../../utils';
import { Sizes } from '../../themes';

export type Props = IrisProps<{
  /**
   * Looping cycle animation of gradient background.
   *
   * [default = true]
   */
  animate?: boolean;
  /**
   * [default = 'md']
   */
  size?: Sizes;
  /**
   * [default = 'rainbow']
   */
  variant?: 'mod' | 'possessed' | 'rainbow' | 'primary' | 'success';
  /**
   * Note: if 'background' is specified on style this will override
   * the variant background gradient. If the Ribbon is animated
   * (default behavior) you must repeat the first color value at the end
   * for the animation to display properly.
   *
   * style={{
   *   background: 'linear-gradient(to right, red, yellow, red)',
   * }}
   */
  style?: CSSProperties;
}>;
