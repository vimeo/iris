import { EventHandler, ChangeEvent } from 'react';
import { IrisProps } from '../../utils';

export type Props = IrisProps<{
  /**
   * Current page. The page state will always be controlled externally.
   *
   * [default = 1]
   */
  active?: number;
  /**
   * Page buttons format.
   *
   * [default = 'secondary']
   */
  format?: 'basic' | 'soft' | 'alternative' | 'secondary' | 'primary';
  /**
   * An object that specifies what happens on prev or next page change
   *
   * ex: { prev: () => null, next: () => null}
   */
  onChange?: EventHandler<PaginationChangeEvent>;
  /**
   * The number of items per page
   */
  pageSize: number;
  /**
   * Total number of items
   */
  total: number;
  /**
   * Page buttons variant.
   *
   * [default = 'solid']
   */
  variant?:
    | 'solid'
    | 'transparent'
    | 'outline'
    | 'dashed'
    | 'minimal'
    | 'hyperminimal'
    | 'minimalTransparent';
}>;

export interface PaginationChangeEvent extends ChangeEvent<Element> {
  paging: {
    type: string;
    page: number;
  };
}
