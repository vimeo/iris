import React, {
  FormEventHandler,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';

import { Calendar } from '../Calendar/Calendar';
import { init, reducer } from '../Calendar/Calendar.state';
import { initialState } from '../Calendar/Calendar.types';

import {
  formatDate,
  getDateFormat,
  getMonthFromDate,
} from './DateFormat';
import {
  ApplyButton,
  CalendarHeader,
  CalendarsBody,
  CalendarsContainer,
  CalendarsFooter,
  ClearButton,
  DateField,
  DateRangeContainer,
  Menu,
} from './DateRange.style';
import { PresetValue, Props } from './DateRange.types';

import { slate } from '../../../../color';
import { withIris } from '../../../../utils';
import { Input } from '../../Input/Input';

export const DateRange = withIris<HTMLInputElement, Props>(
  DateRangeComponent
);

const dateFormat = getDateFormat();

function DateRangeComponent({
  className,
  endInputLabel = 'End date',
  forwardRef,
  maxDate,
  minDate,
  onChange,
  presets,
  startInputLabel = 'Start date',
  onPresetClick,
}: Props) {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const [presetOption, setPresetOption] = useState('');

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

  // Get the viewport for the first calendar in our range picker.
  const getDateForFirstCalendar = useMemo(() => {
    const year = viewportDate.getFullYear();
    const month = viewportDate.getMonth();
    const dateForFirstCalendar = new Date();

    dateForFirstCalendar.setFullYear(year, month - 1, 1);

    return dateForFirstCalendar;
  }, [viewportDate]);

  // Derive the value for the input that represents our start date.
  const startDateLabel = useMemo(() => {
    if (typeof startLabel === 'string') return startLabel;

    if (hoverStart) return formatDate(hoverStart);
    if (draftStart) return formatDate(draftStart);
    if (!open && rangeStart) return formatDate(rangeStart);

    return '';
  }, [open, draftStart, startLabel, hoverStart, rangeStart]);

  // Derive the value for the input that represents our end date.
  const endDateLabel = useMemo(() => {
    if (typeof endLabel === 'string') return endLabel;

    if (hoverEnd) return formatDate(hoverEnd);
    if (draftEnd) return formatDate(draftEnd);
    if (!open && rangeEnd) return formatDate(rangeEnd);

    return '';
  }, [open, draftEnd, endLabel, hoverEnd, rangeEnd]);

  // Callback for going to the next month in our date range picker.
  function handleGoForward() {
    const { viewportDate } = state;
    const payload = new Date(
      viewportDate.getFullYear(),
      viewportDate.getMonth() + 1,
      1
    );
    dispatch({ type: 'CHANGE_VIEWPORT', payload });
  }

  // Callback for going to the previous month in our date range picker.
  function handleGoBackward() {
    const { viewportDate } = state;
    const payload = new Date(
      viewportDate.getFullYear(),
      viewportDate.getMonth() - 1,
      1
    );
    dispatch({ type: 'CHANGE_VIEWPORT', payload });
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
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

  const handleStartChange: FormEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: 'CHANGE_START',
      payload: {
        label: event.currentTarget.value,
        minDate,
      },
    });
  };

  const handleEndChange: FormEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: 'CHANGE_END',
      payload: {
        label: event.currentTarget.value,
        maxDate,
      },
    });
  };

  const handleSelectPreset = (preset) => {
    const payload = [];
    const { today, yesterday } = getDates();

    setPresetOption(preset);
    dispatch({ type: 'CLEAR' });

    switch (typeof preset) {
      case 'string':
        if (preset === 'today') payload.push(today);
        if (preset === 'yesterday') payload.push(yesterday);
        if (preset === 'current month') {
          const firstDayOfMonth = new Date();
          firstDayOfMonth.setDate(1);

          payload.push(firstDayOfMonth);
          payload.push(new Date());
        }
        if (preset === 'last month') {
          const firstDayOfLastMonth = new Date();
          firstDayOfLastMonth.setDate(1);
          firstDayOfLastMonth.setMonth(
            firstDayOfLastMonth.getMonth() - 1
          );

          const lastDateOfLastMonth = new Date();
          lastDateOfLastMonth.setDate(0);

          payload.push(firstDayOfLastMonth);
          payload.push(lastDateOfLastMonth);
        }
        break;
      case 'number':
        const date = new Date(
          new Date().setDate(new Date().getDate() + preset)
        );
        if (preset > 0) {
          payload.push(today);
          payload.push(date);
        } else {
          payload.push(date);
          payload.push(today);
        }

        break;
      default:
        break;
    }

    if (payload.length) {
      dispatch({ type: 'SET_DATE_FROM_PRESET', payload });
    }
  };

  const getPresetLabel = (preset: PresetValue) => {
    if (typeof preset === 'number') {
      return preset < 0
        ? `Last ${Math.abs(preset)} days`
        : `Next ${preset} days`;
    } else if (preset === 'current month') {
      return getMonthFromDate(new Date());
    } else if (preset === 'last month') {
      const dateOfLastMonth = new Date();
      dateOfLastMonth.setDate(1);
      dateOfLastMonth.setMonth(dateOfLastMonth.getMonth() - 1);
      return getMonthFromDate(dateOfLastMonth);
    }

    return preset;
  };

  // Generate the styles to pin the portal to the parent node.
  return (
    <DateRangeContainer ref={forwardRef}>
      {presets ? (
        <Menu
          format="basic"
          style={{ borderRight: `1px solid ${slate(100)}` }}
        >
          <Menu.Section title="Presets">
            {presets.map((preset, key) => {
              const label = getPresetLabel(preset);

              return (
                <Menu.Item
                  active={presetOption === preset}
                  key={key}
                  onClick={() => {
                    handleSelectPreset(preset);
                    if (Boolean(onPresetClick)) {
                      onPresetClick(preset);
                    }
                  }}
                  style={{ textTransform: 'capitalize' }}
                >
                  {label}
                </Menu.Item>
              );
            })}
          </Menu.Section>
        </Menu>
      ) : null}
      <CalendarsContainer
        // hidden={!open}
        className={className}
      >
        <CalendarHeader>
          <DateField>
            <Input
              id="start–date"
              label={startInputLabel}
              value={startDateLabel}
              onChange={handleStartChange}
              onKeyDown={handleKeyDown}
              placeholder={dateFormat}
              status={startDateError ? 'negative' : 'neutral'}
              messages={{ error: startDateError }}
              // helperMsg={true}
            />
          </DateField>
          <DateField>
            <Input
              id="end-date"
              label={endInputLabel}
              value={endDateLabel}
              onChange={handleEndChange}
              onKeyDown={handleKeyDown}
              placeholder={dateFormat}
              disabled={draftStart ? false : true}
              status={endDateError ? 'negative' : 'neutral'}
              messages={{ error: endDateError }}
              // helperMsg={true}
            />
          </DateField>
        </CalendarHeader>
        <CalendarsBody>
          <Calendar
            isRange
            backOnly
            backOnClick={handleGoBackward}
            initialMonth={getDateForFirstCalendar}
            minDate={minDate}
            maxDate={maxDate}
            range={[draftStart, draftEnd]}
            hoverRange={[hoverStart, hoverEnd]}
            selectionStart={hoverStart ? hoverStart : draftStart}
            selectionEnd={hoverEnd ? hoverEnd : draftEnd}
            onClick={handleClick}
            onMouseEnter={handleHover}
          />
          <Calendar
            isRange
            forwardOnly
            forwardOnClick={handleGoForward}
            initialMonth={viewportDate}
            minDate={minDate}
            maxDate={maxDate}
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
            format="primary"
            variant="minimal"
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
    </DateRangeContainer>
  );
}

function getDates() {
  const today = new Date();
  const yesterday = new Date(today);

  yesterday.setDate(yesterday.getDate() - 1);

  return { today, yesterday };
}
