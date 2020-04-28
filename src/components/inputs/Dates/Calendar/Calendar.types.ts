export interface CalendarState {
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

export const initialState: CalendarState = {
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

export type DateRange = [Date | undefined] | [Date, Date | undefined];
