export interface GridProps {
    /**
     * Horizontal center align grid contents
     */
    centered?: boolean;
    /**
     * HTML element to render <Grid> as
     */
    element?: 'div' | 'main' | 'aside' | 'section';
    /**
     * Specify a max-width for the grid
     */
    hasMaxWidth?: boolean;
    /**
     * Remove default padding if grid is used within another layout
     */
    isNested?: boolean;
}

export const GRID = {
    maxWidth: 1440,
    columnCount: 24,
    columnGutter: 20,
    gutterWidth: 10, // GRID.columnGutter / 2
    columnGutterForm: 12,
    gutterWidthForm: 6, // GRID.columnGutterForm / 2
};
