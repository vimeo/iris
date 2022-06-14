import { IrisInputProps } from '../../../../utils';
import { TranslatedStrings } from './translations';

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
   * @deprecated
   * Not in use anymore since popover logic was separated from DateRange
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
  /**
   * Pass a callback function to run when date presets are clicked.
   *
   * @presetValue is the value of preset which is clicked.
   */
  onPresetClick?: (presetValue: PresetValue) => void;
  /**
   * Optional value that supports translation of the DateRange component.
   * Pass in key/value pairs of strings and their translations.
   *
   * For example:
   * `{ apply: 'Apply', clear: 'Clear', startDate: 'Start Date'...}`
   *
   * Translated objects already exist for some languages, and can be found
   * and imported from `translations.ts`
   *
   * [default = translations['en']]
   */
  translation?: TranslatedStrings;
}>;

export type PresetValue =
  | 'today'
  | 'tomorrow'
  | 'yesterday'
  | 'current month'
  | 'last month'
  | 'custom'
  | number;
