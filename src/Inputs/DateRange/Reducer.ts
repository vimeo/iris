import { Action } from './Actions';
import {
  initialState,
  DateRangeState as State,
} from './DateRangeTypes';

import { getDateFormat, getDateFormatRegex } from './DateFormat';

/**
 * Internal component state
 */

const dateFormat = getDateFormat();
const dateFormatRegex = getDateFormatRegex(dateFormat);

export function init(state: State) {
  // Get the month starting at Day 1 that includes are current date
  // this will be the date object that represents our viewport.
  const now = new Date();
  const viewportDate = new Date(now.getFullYear(), now.getMonth(), 1);

  return {
    ...state,
    viewportDate,
  };
}

// Define and implement the reducer for internal state management
export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'OPEN': {
      const [rangeStart] = state.range;
      // Set the month at which the calendar initially renders to
      // as the start of the current date range.
      const viewportDate = rangeStart
        ? new Date(rangeStart.getFullYear(), rangeStart.getMonth(), 1)
        : state.viewportDate;

      return {
        ...state,
        open: true,
        viewportDate,
        // Copy (immutably) the current range into a draft state
        // this is what renders to the calendar as we make changes
        // to the date selection
        draft: [state.range[0], state.range[1]],
      };
    }
    case 'SAVE':
      return {
        ...state,
        open: false,
        // When saving, copy (immutably) the draft back into the selected
        // range, and set the draft range to null values.
        range: [state.draft[0], state.draft[1]],
        draft: [null, null],
      };
    case 'CLOSE':
      return {
        ...state,
        open: false,
        // When cancelling, we want to set the draft to null,
        // and do not commit anything to the range value.
        draft: [null, null],
        startLabel: null,
        startDateError: null,
        endLabel: null,
        endDateError: null,
      };
    case 'CLEAR':
      return {
        ...initialState,
        open: true,
        viewportDate: state.viewportDate,
      };
    case 'CHANGE_VIEWPORT':
      return { ...state, viewportDate: action.payload };
    case 'CHANGE_START': {
      const draftEnd = state.draft[1];
      const viewportDate = state.viewportDate;
      const label = action.payload.label;

      if (!dateFormatRegex.test(label)) {
        return {
          ...state,
          startLabel: label,
          startDateError: `Try this format: ${dateFormat}`,
        };
      }

      const newStartDate = new Date(label);
      const minDate = action.payload.minDate;
      // If the date entered is not a valid date only update the label and set error
      if (isNaN(newStartDate.getTime())) {
        return {
          ...state,
          startLabel: action.payload.label,
          startDateError: 'Invalid date',
        };
      }

      // If the date entered is before the minimum date requirement update label and set error
      if (
        minDate &&
        new Date(minDate.toDateString()) >
          new Date(newStartDate.toDateString())
      ) {
        return {
          ...state,
          startLabel: action.payload.label,
          startDateError: "You can't start in the past :(",
        };
      }

      let newViewportDate = new Date(viewportDate);
      const tempViewportDate = new Date(
        newStartDate.getFullYear(),
        newStartDate.getMonth(),
        1,
      );

      // If chosen date is in a previous month switch viewport to that month
      if (tempViewportDate < viewportDate) {
        newViewportDate = tempViewportDate;
      }

      // If chosen date is in a future month outside viewport switch to that month
      viewportDate.setUTCMonth(viewportDate.getUTCMonth() + 1);
      if (tempViewportDate > viewportDate) {
        newViewportDate = tempViewportDate;
      }

      // If the new date is greater than the current end range
      // start a new range at the given point and auto fill end date
      if (newStartDate > draftEnd) {
        return {
          ...state,
          startLabel: action.payload.label,
          startDateError: null,
          draft: [newStartDate, newStartDate],
          viewportDate: newViewportDate,
        };
      }

      // Otherwise, update start date
      return {
        ...state,
        startLabel: action.payload.label,
        startDateError: null,
        draft: [newStartDate, draftEnd],
        viewportDate: newViewportDate,
      };
    }
    case 'CHANGE_END':
      const draftStart = state.draft[0];
      const newEndDate = new Date(action.payload);
      const label = action.payload;

      if (!draftStart) {
        return {
          ...state,
          endDateError: 'Must select start date first',
        };
      }

      if (!dateFormatRegex.test(label)) {
        return {
          ...state,
          endLabel: label,
          endDateError: `Try this format: ${dateFormat}`,
        };
      }

      // If the date entered is not a valid date only update the label
      if (isNaN(newEndDate.getTime())) {
        return {
          ...state,
          endLabel: label,
          endDateError: 'Invalid date',
        };
      }

      // If the new date is less than the current start range
      // set error
      if (newEndDate < draftStart) {
        return {
          ...state,
          endLabel: label,
          endDateError: 'Make sure the start comes before the end.',
        };
      }

      // Otherwise, update end date
      return {
        ...state,
        endLabel: label,
        endDateError: null,
        draft: [draftStart, newEndDate],
      };
    case 'SELECT_DATE': {
      const [draftStart, draftEnd] = state.draft;
      const [hoverStart, hoverEnd] = state.hoverDraft;

      // If selected date is within an already selected range
      // clear selection and set start date to selected
      if (
        draftStart &&
        draftEnd &&
        action.payload > draftStart &&
        action.payload < draftEnd
      ) {
        return {
          ...state,
          draft: [action.payload, null],
          startLabel: null,
          startDateError: null,
          endLabel: null,
          endDateError: null,
        };
      }

      // Other wise set the date to the hover state
      return {
        ...state,
        draft: [
          hoverStart ? hoverStart : draftStart,
          hoverEnd ? hoverEnd : draftEnd,
        ],
        startLabel: null,
        startDateError: null,
        endLabel: null,
        endDateError: null,
      };
    }
    case 'HOVER_DATE': {
      const [draftStart, draftEnd] = state.draft;
      const hoverDate = action.payload;

      if (hoverDate === null) {
        return {
          ...state,
          hoverDraft: [null, null],
        };
      }

      // If there is a selected start date AND no end date selected
      // AND hover date is before start
      // treat the hover date as start and the start as the end date
      if (draftStart && !draftEnd && hoverDate < draftStart) {
        return {
          ...state,
          hoverDraft: [hoverDate, draftStart],
        };
      }

      // If no selected start date
      // OR theres a selected end date AND hover date is before the end date
      // show hover date instead of start date
      if (!draftStart || (draftEnd && hoverDate < draftEnd)) {
        return {
          ...state,
          hoverDraft: [hoverDate, null],
        };
      }

      // If hoverDate is past selected start date and no end date selected
      // OR end date is selected and hoverDate is past the end Date
      // show hover date as end date
      if (
        (draftStart && !draftEnd && hoverDate > draftStart) ||
        (draftEnd && hoverDate > draftEnd)
      ) {
        return {
          ...state,
          hoverDraft: [null, hoverDate],
        };
      }

      return {
        ...state,
        hoverDraft: [null, null],
      };
    }
    default:
      return state;
  }
}
