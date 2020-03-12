import { ChangeEventHandler } from 'react';

export interface Props {
  defaultValue?: string;
  /**
   * [default = 30]
   */
  maxCharacters?: number;
  onChange?: ChangeEventHandler;
  onError?: ChangeEventHandler;
  /**
   * The event handler that's called when warning appears,
   * in addition to built in warning which changes the text color of the character count to red.
   */
  onWarn?: ChangeEventHandler;
  /**
   * [default = 'characters']
   */
  plural?: string;
  /**
   * [default = 'character']
   */
  singular?: string;
  /**
   * The threshold number of characters typed before warning appears.
   *
   * [default = 5]
   */
  warningThreshold?: number;
}
