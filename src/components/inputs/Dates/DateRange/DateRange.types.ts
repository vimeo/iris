import { IrisInputProps } from '../../../../utils';

export type Props = IrisInputProps<{
  /**
   * A date object that defines the minimum date a user must select
   */
  minDate?: Date;
  /**
   * A date object that defines the maximum date a user must select
   */
  maxDate?: Date;
  /**
   * In what direction should the calendar viewport open?
   *
   * [default = 'left']
   */
  attach?: 'left' | 'right' | 'bottom';
  /**
   * Pass a callback function to run when date changes are applied.
   * Use to get the `Date` objects that define the selected calendar range
   */
  onChange?: (range: [Date, Date]) => void;
  /**
   * Optional string to pass in, for example when translations are needed.
   *
   * [default = 'Start date']
   */
  startInputLabel?: string;
  /**
   * Optional string to pass in, for example when translations are needed.
   *
   * [default = 'End date']
   */
  endInputLabel?: string;
  /**
   * Optional values for presets that appear in left menu beside calendars.
   * Negative values refer to past 'x' days. Positive values refer to next 'x' days.
   *
   * For example:
   * ['today', -10, 10, -100, 100, 'custom']
   */
  presets?: PresetValue[];
}>;

type PresetValue =
  | 'today'
  | 'tomorrow'
  | 'yesterday'
  | 'custom'
  | number;
