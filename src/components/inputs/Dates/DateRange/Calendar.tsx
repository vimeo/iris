import React, { useMemo } from 'react';
import styled from 'styled-components';
import { padding, rem, margin } from 'polished';

import {
  CalendarDay,
  CalendarGridItem,
  DateRange,
} from './CalendarDay';
import { useDaysFromViewport } from '../useDaysFromViewport';

import { IrisProps } from '../../../../utils';
import { Header } from '../../../../typography';

type Props = IrisProps<{
  back?: JSX.Element;
  forward?: JSX.Element;
  viewport?: Date;
  range?: [Date | null, Date | null];
  hoverRange?: [Date | null, Date | null];
  selectionStart?: Date;
  selectionEnd?: Date;
  minDate: Date;
  onClick?: (date: Date) => void;
  onMouseEnter?: (date: Date | null) => void;
}>;

const WEEK_DAYS = {
  Sunday: 'Su',
  Monday: 'Mo',
  Tuesday: 'Tu',
  Wednesday: 'We',
  Thursday: 'Th',
  Friday: 'Fr',
  Saturday: 'Sa',
};

export function Calendar({
  back,
  forward,
  className,
  onClick,
  onMouseEnter,
  range: [selectionStart, selectionEnd],
  hoverRange: [hoverStart, hoverEnd],
  minDate,
  viewport = new Date(),
}: Props) {
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
}

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

  &:first-of-type {
    margin-left: ${rem(32)};
  }

  &:last-child {
    margin-right: ${rem(32)};
  }
`;

const DayHeader = styled(CalendarGridItem)`
  padding-bottom: ${rem(8)};
`;
