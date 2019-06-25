import React, {
  useReducer,
  useEffect,
  useMemo,
  FormEventHandler,
} from 'react';

import { MenuPanel } from '../../MenuPanel/MenuPanel';
import { InputText } from '../../InputText/InputText';

import { reducer, init } from './Reducer';
import { DateRangeProps, initialState } from './DateRangeTypes';
import { getDateFormat, formatDate } from './DateFormat';

import {
  ApplyButton,
  Calendar,
  CalendarHeader,
  CalendarsBody,
  CalendarsContainer,
  CalendarsFooter,
  ClearButton,
  DateField,
  MoveLeft,
  MoveRight,
} from './DateRangeStyled';
import { IrisInputComponent } from '../../Utils/IrisInputComponent';

const dateFormat = getDateFormat();

export const DateRange: IrisInputComponent<DateRangeProps> = ({
  className,
  onChange,
  alignment = 'left',
  children,
  minDate,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  // When our internal range value changes, if a callback for onChange is passed
  // let's call that callback with our new value.
  useEffect(() => {
    if (onChange) {
      onChange(state.range);
    }
  }, [state.range, onChange]);

  const {
    startLabel,
    startDateError,
    endLabel,
    endDateError,
    range: [rangeStart, rangeEnd],
    draft: [draftStart, draftEnd],
    hoverDraft: [hoverStart, hoverEnd],
    viewportDate,
    open,
  } = state;

  // Get the viewport for the second calendar in our range picker.
  const nextViewportDate = useMemo(() => {
    const year = viewportDate.getFullYear();
    const month = viewportDate.getMonth();
    const nextDate = new Date();

    nextDate.setFullYear(year, month + 1, 1);

    return nextDate;
  }, [viewportDate]);

  // Derive the value for the input that represents our start date.
  const startDateLabel = useMemo(() => {
    if (typeof startLabel === 'string') {
      return startLabel;
    }

    if (hoverStart) {
      return formatDate(hoverStart);
    }

    if (draftStart) {
      return formatDate(draftStart);
    }

    if (!open && rangeStart) {
      return formatDate(rangeStart);
    }

    return '';
  }, [open, draftStart, startLabel, hoverStart]);

  // Derive the value for the input that represents our end date.
  const endDateLabel = useMemo(() => {
    if (typeof endLabel === 'string') {
      return endLabel;
    }

    if (hoverEnd) {
      return formatDate(hoverEnd);
    }

    if (draftEnd) {
      return formatDate(draftEnd);
    }

    if (!open && rangeEnd) {
      return formatDate(rangeEnd);
    }

    return '';
  }, [open, draftEnd, endLabel, hoverEnd]);

  // Callback for going to the next month in our date range picker.
  function handleGoForward() {
    const { viewportDate } = state;
    const payload = new Date(
      viewportDate.getFullYear(),
      viewportDate.getMonth() + 1,
      1,
    );
    dispatch({ type: 'CHANGE_VIEWPORT', payload });
  }

  // Callback for going to the previous month in our date range picker.
  function handleGoBackward() {
    const { viewportDate } = state;
    const payload = new Date(
      viewportDate.getFullYear(),
      viewportDate.getMonth() - 1,
      1,
    );
    dispatch({ type: 'CHANGE_VIEWPORT', payload });
  }

  function handleKeyDown(event: KeyboardEvent) {
    event.stopPropagation();
    switch (event.key) {
      case 'Enter':
        if (open) {
          dispatch({ type: 'SAVE' });
        } else {
          dispatch({ type: 'OPEN' });
        }
        break;
      case 'Escape':
        if (open) {
          dispatch({ type: 'CLOSE' });
        }
        break;
      default:
    }
  }

  function handleClick(payload) {
    dispatch({ type: 'SELECT_DATE', payload });
  }

  function handleHover(payload) {
    dispatch({ type: 'HOVER_DATE', payload });
  }

  const handleStartChange: FormEventHandler<
    HTMLInputElement
  > = event => {
    dispatch({
      type: 'CHANGE_START',
      payload: {
        label: event.currentTarget.value,
        minDate,
      },
    });
  };

  const handleEndChange: FormEventHandler<
    HTMLInputElement
  > = event => {
    dispatch({
      type: 'CHANGE_END',
      payload: event.currentTarget.value,
    });
  };

  // Generate the styles to pin the portal to the parent node.
  return (
    <>
      <MenuPanel
        isShowing={open}
        alignment={alignment}
        size="xl"
        onClose={() => void dispatch({ type: 'CLOSE' })}
        onOpen={() => void dispatch({ type: 'OPEN' })}
        menuContent={
          <CalendarsContainer hidden={!open} className={className}>
            <CalendarHeader>
              <DateField>
                {/*
                 //@ts-ignore no prop onKeyDown*/}
                <InputText
                  id="start–date"
                  label="Start date"
                  value={startDateLabel}
                  onChange={handleStartChange}
                  onKeyDown={handleKeyDown}
                  placeholder={dateFormat}
                  format={startDateError ? 'negative' : 'neutral'}
                  errorMsg={startDateError}
                  helperMsg={true}
                />
              </DateField>
              <DateField>
                {/*
                //@ts-ignore no prop onKeyDown*/}
                <InputText
                  id="end-date"
                  label="End date"
                  value={endDateLabel}
                  onChange={handleEndChange}
                  onKeyDown={handleKeyDown}
                  placeholder={dateFormat}
                  disabled={draftStart ? false : true}
                  format={endDateError ? 'negative' : 'neutral'}
                  errorMsg={endDateError}
                  helperMsg={true}
                />
              </DateField>
            </CalendarHeader>
            <CalendarsBody>
              <Calendar
                back={
                  <MoveLeft
                    inactive={minDate && viewportDate < minDate}
                    onClick={
                      !(minDate && viewportDate < minDate)
                        ? handleGoBackward
                        : undefined
                    }
                  />
                }
                viewport={viewportDate}
                minDate={minDate}
                range={[draftStart, draftEnd]}
                hoverRange={[hoverStart, hoverEnd]}
                selectionStart={hoverStart ? hoverStart : draftStart}
                selectionEnd={hoverEnd ? hoverEnd : draftEnd}
                onClick={handleClick}
                onMouseEnter={handleHover}
              />
              <Calendar
                forward={<MoveRight onClick={handleGoForward} />}
                viewport={nextViewportDate}
                minDate={minDate}
                range={[draftStart, draftEnd]}
                hoverRange={[hoverStart, hoverEnd]}
                selectionStart={hoverStart ? hoverStart : draftStart}
                selectionEnd={hoverEnd ? hoverEnd : draftEnd}
                onClick={handleClick}
                onMouseEnter={handleHover}
              />
            </CalendarsBody>
            <CalendarsFooter>
              <ClearButton
                hidden={draftEnd === null}
                size="sm"
                format="primaryTextOnly"
                onClick={() => void dispatch({ type: 'CLEAR' })}
              >
                Clear
              </ClearButton>
              <ApplyButton
                disabled={
                  !draftStart ||
                  !draftEnd ||
                  startDateError !== null ||
                  endDateError !== null
                }
                size="sm"
                format="secondary"
                onClick={() => void dispatch({ type: 'SAVE' })}
              >
                Apply
              </ApplyButton>
            </CalendarsFooter>
          </CalendarsContainer>
        }
      >
        {children}
      </MenuPanel>
    </>
  );
};
