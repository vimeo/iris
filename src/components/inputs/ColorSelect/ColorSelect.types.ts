import { IrisInputProps } from '../../../utils';
import { ReactNode } from 'react';

import { Attach, AttachAlias } from '../../../utils';

export type Props = IrisInputProps<{
  defaultValue?: string | string[];
  /**
   * Initial color as HEX.
   *
   * [default = '#F00']
   */
  initial?: {
    color?: string;
    colorSpace?: 'HEX' | 'HSL' | 'RGB';
  };
  /**
   * @deprecated
   *
   * see `initial` prop!
   *
   */
  initialColor?: string;
  /**
   * Throttle update rate in milliseconds.
   *
   * [default = 40]
   */
  throttleSpeed?: number;
  /**
   * Hue spectrum width in pixels.
   *
   * [default = 360]
   */
  width?: number;
  /**
   * Hue spectrum height in pixels.
   *
   * [default = 360]
   */
  height?: number;
  onChange?: (HEX: string) => void;
  onOpen?: () => void;
  onClose?: () => void;
  label?: ReactNode;
  /**
   * Text for reset button. If no text is provided the reset button will not appear.
   *
   * Color to reset the picker too.
   */
  reset?: {
    color?: string;
    label?: string;
  };
  /**
   * @deprecated
   *
   * see `reset` prop!
   *
   */
  resetLabel?: string;
  /**
   * @deprecated
   *
   * see `reset` prop!
   *
   */
  resetColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * [default = 'bottom']
   */
  attach?: Attach | AttachAlias;
  /**
   * Shows hue slider, default = true
   */
  showHueSlider?: boolean;
}>;
