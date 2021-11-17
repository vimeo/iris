import { IrisProps } from '../../utils';
import { Statuses } from '../../themes';

export type Props = IrisProps<
  {
    contentEditable?: never;
    /**
     * [default = 'p']
     */
    element?: 'p' | 'span' | 'label';
    /**
     * [default = 'basic']
     */
    format?: 'basic' | 'soft' | 'alternative';
    status?: Statuses;
  },
  HTMLParagraphElement
>;
