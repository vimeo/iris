import { IrisInputProps, IrisProps } from '../../utils';
import { Statuses, Formats } from '../../themes';

export interface CommonProps {
  /**
   * Converts the text to an input when focused to allow user editing.
   */
  contentEditable?: boolean;
  /**
   * [default = 'span']
   */
  element?: HTMLTextElement;
  /**
   * [default = 'soft']
   */
  format?: Formats;
  placeholder?: string;
  status?: Statuses;
  size?: number;
}

export type InputProps = IrisInputProps<CommonProps, IrisTextElement>;
export type Props = IrisProps<CommonProps, IrisTextElement>;

export type IrisTextElement =
  | HTMLHeadingElement
  | HTMLParagraphElement
  | HTMLSpanElement
  | HTMLLabelElement;

export type HTMLTextElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'label'
  | 'p'
  | 'span';
