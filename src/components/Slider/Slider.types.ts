import { ChangeEventHandler } from 'react';

export interface Props {
  /**
   * [default = false]
   */
  disabled?: boolean;
  /**
   * Whether the label can be editable, handle will change positons on slider to match label.
   *
   * [default = false]
   */
  editableLabel?: boolean;
  /**
   * The function that provides formatting to the handle labels
   *
   * [default = 'basic']
   */
  formatter?: (value: number) => string;
  /**
   * The initial value of the handle(s)
   *
   * [default = [0, 100]]
   */
  initialValues?: number[];
  /**
   * The max number accepted, where the slider will end.
   *
   * [default = 100]
   */
  max?: number;
  /**
   * The min number accepted, where the slider will start.
   *
   * [default = 0]
   */
  min?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * If true, there will be two handles to select a range of numbers.
   * If false, there will only be one handle.
   *
   * [default = false]
   */
  range?: boolean;
}
