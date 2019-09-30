import React, { useMemo } from 'react';
import styled from 'styled-components';
import { padding, rem, margin } from 'polished';

import {
  CalendarDay,
  CalendarGridItem,
  DateRange,
} from './CalendarDay';

import { IrisComponent } from '../../../utils';
import { Header } from '../../../typography';

export interface CalendarProps {
  back?: JSX.Element;
  forward?: JSX.Element;
  viewport?: Date;
  range?: [Date | null, Date | null];
  hoverRange?: [Date | null, Date | null];
  selectionStart?: Date;
  selectionEnd?: Date;
  minDate: Date;
  onClick?: (date: Date) => void; // override IrisComponent
  onMouseEnter?: (date: Date | null) => void;
}

const WEEK_DAYS = {
  Sunday: 'Su',
  Monday: 'Mo',
  Tuesday: 'Tu',
  Wednesday: 'We',
  Thursday: 'Th',
  Friday: 'Fr',
  Saturday: 'Sa',
};

export const Calendar: IrisComponent<CalendarProps> = ({
  back,
  forward,
  className,
  onClick,
  onMouseEnter,
  range: [selectionStart, selectionEnd],
  hoverRange: [hoverStart, hoverEnd],
  minDate,
  viewport = new Date(),
}) => {
  // Generate the array of date objects to generate our calendar.
  const days = useDaysFromViewport(viewport);

  // Memoize the start and end selections for our range as a tuple.
  const range = useMemo<DateRange>(() => {
    return [
      hoverStart && hoverStart < selectionStart
        ? hoverStart
        : selectionStart,
      hoverEnd && hoverEnd > selectionEnd ? hoverEnd : selectionEnd,
    ];
  }, [selectionStart, selectionEnd, hoverStart, hoverEnd]);

  // Callback for clicking on a date that bubbles up the selected date object
  // to a handler that's passed in as a prop.
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

  return (
    <CalendarContainer
      className={className}
      onMouseOut={handleMouseOut}
    >
      <CalendarHeader>
        {back}
        <CalendarLabel size="6">
          {viewport.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </CalendarLabel>
        {forward}
      </CalendarHeader>
      {Object.keys(WEEK_DAYS).map(day => (
        <DayHeader key={day}>{WEEK_DAYS[day]}</DayHeader>
      ))}
      {days.map(date => {
        const inactive =
          date.getMonth() !== viewport.getMonth() ||
          date.getFullYear() !== viewport.getFullYear();

        const pastMinDate =
          minDate &&
          new Date(date.toDateString()) <
            new Date(minDate.toDateString());

        return (
          <CalendarDay
            key={date.getTime()}
            inactive={inactive}
            pastMinDate={pastMinDate}
            range={range}
            draftRange={[selectionStart, selectionEnd]}
            date={date}
            onClick={() => handleClick(date)}
            onMouseEnter={() => handleMouseOver(date)}
          >
            {date.getDate()}
          </CalendarDay>
        );
      })}
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  align-content: flex-start;
`;

const CalendarHeader = styled.div`
  display: flex;
  flex: 0 0 100%;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: space-between;
  ${padding(rem(16), 0, 0)};
  ${margin(0, 0, rem(8))};
`;

const CalendarLabel = styled(Header)`
  text-align: center;
  width: calc(100% - ${rem(64)});
  margin-bottom: 0;
  font-weight: bold;

  &:first-child {
    margin-left: ${rem(32)};
  }

  &:last-child {
    margin-right: ${rem(32)};
  }
`;

const DayHeader = styled(CalendarGridItem)`
  padding-bottom: ${rem(8)};
`;

// Utility, that given one date object, we return an array of date objects
// that represent a calendar month. This includes the padding from the previous
// and next months to visually build our calendar.
function useDaysFromViewport(viewport: Date) {
  return useMemo(() => {
    const days: Date[] = [];

    // Generate the date objects for each day of the month, and push them
    // into our array.
    const year = viewport.getFullYear();
    const month = viewport.getMonth();

    // Figure out how many days we need to pad before our calendar.
    // This is done by getting the current day of the week, and we presume
    // that we want to display a full week as aour first row. For each
    // padded integer, we push a new date object into our array.
    let dayLeftPad = viewport.getDay() - 1;

    while (dayLeftPad >= 0) {
      const date = new Date(year, month, 1);
      date.setDate(-dayLeftPad);
      days.push(date);
      dayLeftPad--;
    }

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    // Figure out how many days we need to push in the end
    // Fills up grid up to 7 days * 6 weeks
    // This will create the same size calender for each month
    const lastDate = days[days.length - 1].getDate();
    const maxDays = 7 * 6;

    for (let i = 0; days.length < maxDays; i++) {
      const date = new Date(year, month, lastDate + i + 1);
      days.push(date);
    }

    return days;
  }, [viewport]);
}
