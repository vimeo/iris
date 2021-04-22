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

/**
 * Actions for mutating internal state
 */
interface ChangeStartAction {
  type: 'CHANGE_START';
  payload: {
    label: string;
    minDate: Date;
  };
}

interface ChangeEndAction {
  type: 'CHANGE_END';
  payload: {
    label: string;
    maxDate: Date;
  };
}

interface ChangeViewportAction {
  type: 'CHANGE_VIEWPORT';
  payload: Date;
}

interface SelectDateAction {
  type: 'SELECT_DATE';
  payload: Date;
}

interface SetDateFromPreset {
  type: 'SET_DATE_FROM_PRESET';
  payload: Date[];
}

interface HoverDateAction {
  type: 'HOVER_DATE';
  payload: Date | null;
}

interface OpenAction {
  type: 'OPEN';
}

interface CloseAction {
  type: 'CLOSE';
}

interface SaveAction {
  type: 'SAVE';
}

interface ClearAction {
  type: 'CLEAR';
}

export type Action =
  | ChangeStartAction
  | ChangeEndAction
  | ChangeViewportAction
  | SelectDateAction
  | SetDateFromPreset
  | SaveAction
  | ClearAction
  | OpenAction
  | CloseAction
  | HoverDateAction;
