import { IrisProps } from '../../utils';

export type Props = IrisProps<
  {
    /**
     * Converts the text to an input when focused to allow user editing.
     */
    contentEditable?: boolean;
    /**
     * Default is calculated based on size. If no size is specified:
     *
     * [default = 'h1']
     */
    element?:
      | 'h1'
      | 'h2'
      | 'h3'
      | 'h4'
      | 'h5'
      | 'h6'
      | 'span'
      | 'label';
    /**
     * [default = '1']
     */
    size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | 'plusUltra';
    /**
     * [default = 'basic']
     */
    format?: 'basic' | 'soft' | 'alternative';
    /**
     * [default = 'normal']
     */
    variant?: 'normal' | 'thin';
  },
  HTMLHeadingElement | HTMLSpanElement
>;
