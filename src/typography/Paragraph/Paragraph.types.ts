import { IrisProps } from '../../utils';
import { Statuses } from '../../themes';

export type Props = IrisProps<
  {
    element?: 'p' | 'span' | 'label';
    size?: 1 | 2 | 3 | 4 | '1' | '2' | '3' | '4';
    format?: 'basic' | 'soft' | 'alternative';
    status?: Statuses;
  },
  HTMLParagraphElement
>;
