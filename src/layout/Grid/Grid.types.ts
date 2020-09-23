import { ReactElement } from 'react';
import { IrisProps } from '../../utils';

export type Props = IrisProps<
  {
    /**
     * The items inside the grid
     * If no CSS property `grid-gap` is set on the parent Grid component,
     * then the grid gap will default to 24px.
     */
    children: ReactElement[];
    /**
     * Whether items can stack with varying heights
     *
     * [default = false]
     */
    masonry?: boolean;
    /**
     * Can either set a fixed column, or specify columns at various breakpoints
     *
     * Usage examples
     * 4 = set number of columns to 4
     * [{minWidth: 250 }] = set min width of columns to 250px
     * [[1080, 5], [720, 3], [480, 2], [360, 1]] = At min screen width 1080px, set 5 columns, and etc
     *
     * [default = 4]
     */
    columns?: number | number[][] | { minWidth: number };
    /**
     * Index of featured item in grid
     */
    featured?: number;
  },
  HTMLDivElement
>;
