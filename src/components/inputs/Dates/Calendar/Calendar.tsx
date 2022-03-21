import React, {
  useState,
  useRef,
  useLayoutEffect,
  useReducer,
  useMemo,
  MouseEventHandler,
} from 'react';
import styled, { css } from 'styled-components';

import { useDaysFromViewport } from './useDaysFromViewport';
import { reducer } from './Calendar.state';
import { initialState, DateRange } from './Calendar.types';
import { CalendarDay } from './CalendarDay';

import { blue, white } from '../../../../color';
import { ChevronRight } from '../../../../icons';
import { Header } from '../../../../typography';
import { IrisProps, geometry } from '../../../../utils';
import { rgba, rem } from 'polished';

export interface Props {
  selected?: Date;
  initialMonth?: Date;
  minDate?: Date;
  maxDate?: Date;
  backOnly?: boolean;
  forwardOnly?: boolean;
  backOnClick?: VoidFunction;
  forwardOnClick?: VoidFunction;
  isRange?: boolean;
  range?: [Date | null, Date | null];
  hoverRange?: [Date | null, Date | null];
  selectionStart?: Date;
  selectionEnd?: Date;
  onClick?: (date: Date) => void;
  onMouseEnter?: (date: Date | null) => void;
  locale?: string;
}

export const Calendar = ({
  onClick,
  selected,
  minDate,
  maxDate,
  backOnly = false,
  forwardOnly = false,
  backOnClick,
  forwardOnClick,
  isRange,
  range: [selectionStart, selectionEnd] = [null, null],
  hoverRange: [hoverStart, hoverEnd] = [null, null],
  onMouseEnter,
  locale = 'en',
  initialMonth = new Date(),
  ...props
}: IrisProps<Props>) => {
  const date = initialMonth;

  const DAY_LABELS = getDayNames(locale);

  const initialViewportDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  );

  const initialStateWithMonth = {
    ...initialState,
    viewportDate: initialViewportDate,
  };

  const [state, dispatch] = useReducer(
    reducer,
    initialStateWithMonth
  );

  const { viewportDate } = state;

  // Memoize the start and end selections for our range as a tuple.
  const range = useMemo<DateRange>(() => {
    return [
      hoverStart && hoverStart < selectionStart
        ? hoverStart
        : selectionStart,
      hoverEnd && hoverEnd > selectionEnd ? hoverEnd : selectionEnd,
    ];
  }, [selectionStart, selectionEnd, hoverStart, hoverEnd]);

  const [width, setWidth] = useState(0);

  const actualDate = isRange ? initialMonth : viewportDate;

  const days = useDaysFromViewport(gotoMonth(actualDate, 0));

  const resetMonth = () => {
    // TODO make this work for date range?
    const payload = new Date();
    dispatch({ type: 'CHANGE_VIEWPORT', payload });
  };

  const next = () => {
    const payload = new Date(
      viewportDate.getFullYear(),
      viewportDate.getMonth() + 1,
      1
    );
    dispatch({ type: 'CHANGE_VIEWPORT', payload });
  };

  const prev = () => {
    const payload = new Date(
      viewportDate.getFullYear(),
      viewportDate.getMonth() - 1,
      1
    );
    dispatch({ type: 'CHANGE_VIEWPORT', payload });
  };

  function select(date) {
    const newMonth = date.getMonth() !== initialMonth.getMonth();

    return () => {
      if (newMonth) dispatch({ type: 'SELECT_DATE', payload: date });
      onClick(date);
    };
  }

  const inCurrentMonth = (date) =>
    date.getMonth() === actualDate.getMonth();

  const inCurrentYear = (date) =>
    date.getFullYear() === actualDate.getFullYear();

  function isCurrentDate(date) {
    const selectedDate = new Date(selected);
    const sameDate = selectedDate.getDate() === date.getDate();
    const sameMonth = inCurrentMonth(selectedDate);
    const sameYear = inCurrentYear(selectedDate);

    return sameDate && sameMonth && sameYear;
  }

  function handleClick(date: Date) {
    if (onClick) {
      onClick(date);
    }
  }

  function handleMouseOver(date: Date) {
    if (onMouseEnter) {
      onMouseEnter(date);
    }
  }

  function handleMouseOut() {
    if (onMouseEnter) {
      onMouseEnter(null);
    }
  }

  const ref = useRef<HTMLDivElement>();
  const maxMonth = new Date(
    actualDate.getFullYear(),
    actualDate.getMonth() + 1,
    1
  );

  const minMonth = new Date(
    actualDate.getFullYear(),
    actualDate.getMonth(),
    1
  );

  useLayoutEffect(
    () => setWidth(geometry(ref.current).width),
    [setWidth]
  );

  return (
    <Wrapper {...props} onMouseOut={handleMouseOut}>
      <MonthNav>
        <PrevMonth
          onClick={
            !forwardOnly
              ? backOnClick
                ? backOnClick
                : prev
              : undefined
          }
          inactive={minDate ? minMonth < minDate : undefined}
          hidden={forwardOnly}
        />

        <MonthLabel size="4" onClick={resetMonth}>
          {month(actualDate, locale)}
        </MonthLabel>
        <NextMonth
          onClick={
            !backOnly
              ? forwardOnClick
                ? forwardOnClick
                : next
              : undefined
          }
          inactive={maxDate ? maxMonth > maxDate : undefined}
          hidden={backOnly}
        />
      </MonthNav>
      <Days ref={ref} width={width}>
        {DAY_LABELS.map((day, i) => (
          <DayLabel size={width / 7} key={i}>
            {day}
          </DayLabel>
        ))}

        {days.map((day, i) => {
          const pastMinDate =
            minDate &&
            new Date(day.toDateString()) <
              new Date(minDate.toDateString());

          const pastMaxDate =
            maxDate &&
            new Date(day.toDateString()) >
              new Date(maxDate.toDateString());

          const inactive =
            day.getMonth() !== actualDate.getMonth() ||
            day.getFullYear() !== actualDate.getFullYear();

          if (isRange) {
            return (
              <CalendarDay
                key={i}
                inactive={inactive}
                pastMinDate={pastMinDate}
                pastMaxDate={pastMaxDate}
                range={range}
                draftRange={[selectionStart, selectionEnd]}
                date={day}
                onClick={() => handleClick(day)}
                onMouseEnter={() => handleMouseOver(day)}
              >
                {String(day.getDate()).padStart(2, '0')}
              </CalendarDay>
            );
          }

          return (
            <Day
              key={i}
              size={width / 7}
              onClick={
                !pastMinDate ? !pastMaxDate && select(day) : undefined
              }
              isCurrentDate={isCurrentDate(day)}
              inCurrentMonth={inCurrentMonth(day)}
              disabled={pastMinDate || pastMaxDate}
            >
              {String(day.getDate()).padStart(2, '0')}
            </Day>
          );
        })}
      </Days>
    </Wrapper>
  );
};

function getDayNames(locale) {
  const formatter = new Intl.DateTimeFormat(locale, {
    weekday: 'short',
    timeZone: 'UTC',
  });
  const days = [1, 2, 3, 4, 5, 6, 7].map((day) => {
    const dd = day < 10 ? `0${day}` : day;
    return new Date(`2017-01-${dd}T00:00:00+00:00`);
  });
  return days.map((date) => formatter.format(date));
}

function month(month, locale) {
  return month.toLocaleDateString(locale, {
    month: 'long',
    year: 'numeric',
  });
}

function gotoMonth(viewingMonth, i) {
  return new Date(
    viewingMonth.getFullYear(),
    viewingMonth.getMonth() + i,
    1
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const MonthNav = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding-top: 1rem;
  align-items: center;
  justify-content: center;
`;

const MonthLabel = styled(Header)`
  margin: 0;
  flex-grow: 2;
  text-align: center;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.content.color};
  cursor: pointer;
`;

const NextMonth = styled(ChevronRight)<{
  onClick?: MouseEventHandler;
  inactive?: boolean;
  hidden?: boolean;
}>`
  width: 2rem;
  padding: 0;
  margin: 0 0.75rem;
  cursor: pointer;
  pointer-events: ${({ inactive, hidden }) =>
    inactive || hidden ? 'none' : 'default'};

  ${(props) => {
    if (props.hidden) {
      return css`
        opacity: 0;
        visibility: hidden;
      `;
    }
  }}

  * {
    fill: ${({ theme, inactive }) =>
      inactive
        ? rgba(theme.content.color, 0.2)
        : rgba(theme.content.color, 0.75)};
    stroke-width: 1px;
  }
`;

const PrevMonth = styled(NextMonth)`
  transform: rotate(180deg);
`;

const Days = styled.div<{ width?: number }>`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  align-content: flex-start;
  padding: 0 0.5rem 0.5rem;
  height: ${(p) => rem(p.width)};
  width: 100%;
`;

interface DayProps {
  size?: number;
  inCurrentMonth?: boolean;
  isCurrentDate?: boolean;
  disabled?: boolean;
}

const Day = styled.div<DayProps>`
  position: relative;
  cursor: default;
  flex: 0 0 calc(100% / 7);
  width: calc(100% / 7);
  height: calc(100% / 7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: ${(p) => rem(14 + (p.size > 45.8 && p.size / 7))};
  font-weight: 500;
  padding: 0.75rem 0.25rem;
  color: ${({ theme }) => theme.content.color};
  opacity: ${(p) => (p.inCurrentMonth && !p.disabled ? 1 : 0.125)};
  z-index: 0;
  background: transparent;

  &::after {
    content: '';
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${rgba(blue(500), 0)};
    border-radius: 50%;
    transition: 120ms ease-in-out;
    z-index: -1;
  }

  ${(p) =>
    p.isCurrentDate &&
    p.inCurrentMonth &&
    !p.disabled &&
    css`
      color: ${white};

      &::after {
        background: ${rgba(blue(500), 1)};
      }
    `};

  ${(p) =>
    !p.disabled &&
    css`
      cursor: pointer;

      &:hover {
        color: ${white};

        &::after {
          background: ${rgba(blue(500), 1)};
        }
      }
    `}
`;

const DayLabel = styled(Day)`
  font-weight: bold;
  opacity: 1;
  pointer-events: none;
`;
