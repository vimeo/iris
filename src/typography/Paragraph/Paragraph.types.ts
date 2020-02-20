import { IrisProps } from '../../utils';
import { Statuses } from '../../themes';

export type Props = IrisProps<
  {
    /**
     * [default = 'p']
     */
    element?: 'p' | 'span' | 'label';
    /**
     * [default = '4']
     */
    size?: 1 | 2 | 3 | 4 | '1' | '2' | '3' | '4';
    /**
     * [default = 'basic']
     */
    format?: 'basic' | 'soft' | 'alternative';
    status?: Statuses;
  },
  HTMLParagraphElement
>;
