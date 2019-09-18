export interface DateRangeProps {
  /**
   * A date object that defines the minimum date a user must select
   */
  minDate?: Date;
  /**
   * In what direction should the calendar viewport open? Default: left
   */
  alignment?: 'left' | 'right' | 'center';
  /**
   * Pass a callback function to run when date changes are applied.
   * Use to get the `Date` objects that define the selected calendar range
   */
  onChange?: (range: [Date, Date]) => void;
  onApply?: () => void;
}

export interface DateRangeState {
  startLabel: string | null;
  startDateError: string | null;
  endLabel: string | null;
  endDateError: string | null;
  range: [Date, Date];
  draft: [Date | null, null] | [Date, Date | null];
  hoverDraft: [Date | null, Date | null];
  viewportDate: Date;
  open: boolean;
}

export const initialState: DateRangeState = {
  startLabel: null,
  startDateError: null,
  endLabel: null,
  endDateError: null,
  range: [null, null],
  draft: [null, null],
  hoverDraft: [null, null],
  viewportDate: null,
  open: false,
};
