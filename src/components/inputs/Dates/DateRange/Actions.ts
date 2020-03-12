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
  | SaveAction
  | ClearAction
  | OpenAction
  | CloseAction
  | HoverDateAction;
