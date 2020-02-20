import { IrisProps } from '../../utils';
import { Statuses, Formats } from '../../themes';

export type Props = IrisProps<
  {
    /**
     * [default = 'span']
     */
    element?: HTMLTextElement;
    /**
     * [default = 'soft']
     */
    format?: Formats;
    status?: Statuses;
  },
  IrisTextElement
>;

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
