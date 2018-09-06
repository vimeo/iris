export type SpanTypes =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24;

export type OffsetTypes =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | -1
    | -2
    | -3
    | -4
    | -5
    | -6
    | -7
    | -8
    | -9
    | -10
    | -11
    | -12
    | -13
    | -14
    | -15
    | -16
    | -17
    | -18
    | -19
    | -20
    | -21
    | -22
    | -23
    | -24;

export interface GridColProps {
    /**
     * Any integer from 0 to 24
     */
    xsSpan?: SpanTypes;
    smSpan?: SpanTypes;
    mdSpan?: SpanTypes;
    lgSpan?: SpanTypes;
    xlSpan?: SpanTypes;
    offset?: OffsetTypes;
    /**
     * Any integer from -24 to 24
     */
    smOffset?: OffsetTypes;
    mdOffset?: OffsetTypes;
    lgOffset?: OffsetTypes;
    xlOffset?: OffsetTypes;
    /**
     * Set a specific the column to fixed width at specific breakpoint
     */
    xsFixed?: boolean;
    smFixed?: boolean;
    mdFixed?: boolean;
    lgFixed?: boolean;
    xlFixed?: boolean;
    /**
     * Align a column left or right via flex-order
     */
    alignment?: 'left' | 'right';
    /**
     * HTML element to render <GridCol> as
     */
    columnElement?: 'div' | 'main' | 'aside' | 'section';
    /**
     * Necessary to use the grid for <form> elements
     */
    formColumn?: boolean;
}
