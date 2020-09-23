import React, { MouseEventHandler, ReactNode, memo } from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import { CalendarDayLabel } from './CalendarDayLabel';

import { IrisProps } from '../../../../utils';

export type DateRange = [Date | undefined] | [Date, Date | undefined];

type Props = IrisProps<{
  children: ReactNode;
  range: DateRange;
  draftRange: DateRange;
  inactive?: boolean;
  pastMinDate?: boolean;
  pastMaxDate?: boolean;
  date: Date;
  onMouseEnter?: MouseEventHandler;
}>;

function Day({
  children,
  className,
  onClick,
  onMouseEnter,
  inactive,
  pastMinDate,
  pastMaxDate,
  date,
  range,
  draftRange,
}: Props) {
  const isStart =
    isSameDate(date, range[0]) || isSameDate(date, draftRange[0]);
  const hasEnd = range[1] instanceof Date;
  const isEnd =
    isSameDate(date, range[1]) || isSameDate(date, draftRange[1]);
  const isTrack = isInDateRange(date, range);
  const isControl = isStart || isEnd;

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!inactive && !pastMinDate && !pastMaxDate && onClick) {
      onClick(event);
    }
  };

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    if (!inactive && !pastMinDate && !pastMaxDate && onMouseEnter) {
      onMouseEnter(event);
    }
  };

  return (
    <CalendarGridItem
      className={className}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      {!inactive && (
        <CalendarDayLabel
          isControl={isControl}
          isPast={pastMinDate || pastMaxDate}
          isTrack={isTrack}
          isStart={isStart && hasEnd}
          isEnd={isEnd}
        >
          {children}
        </CalendarDayLabel>
      )}
    </CalendarGridItem>
  );
}

export const CalendarGridItem = styled.div`
  position: relative;
  flex: 0 0 calc(100% / 7);
  width: calc(100% / 7);
  padding: ${rem(1)};
  text-align: center;
  cursor: default;
  font-size: ${rem(14)};
  font-weight: 500;
`;

const DayStyled = styled(Day)`
  margin-bottom: ${rem(4)};
  &::before {
    content: ' ';
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }
  cursor: ${(props) =>
    props.onClick && !props.inactive ? 'pointer' : 'default'};
`;

export const CalendarDay = memo(DayStyled, calendarDayEqual);

// Utility for comparing two date objects.
function isSameDate(a?: Date, b?: Date) {
  // if both dates are null we want to return true
  if (!(a && b)) {
    return a === b;
  }

  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

// Utility to determine if one date exists between two values of a range.
function isInDateRange(a: Date, range: DateRange) {
  const [start, end] = range;
  if (!(start && end)) {
    return false;
  }

  if (a > start && a < end) {
    return true;
  }

  return false;
}

// Generate the props that we want to watch for re renders
function generateCompareProps(day: Props) {
  const { date, range, draftRange } = day;
  const props = [];
  let i = 0;
  props[i++] =
    (isSameDate(date, range[0]) || isSameDate(date, draftRange[0])) &&
    range[1] instanceof Date; // isStart AND hasEnd
  props[i++] =
    isSameDate(date, range[1]) || isSameDate(date, draftRange[1]); // isEnd
  props[i++] = isInDateRange(date, range); // isTrack
  props[i++] = day.inactive;
  props[i++] = day.pastMinDate;
  props[i++] = day.pastMaxDate;
  return props;
}

// Determine if the previously rendered props differ enough to make a new render
function calendarDayEqual(prev: Props, next: Props) {
  const p = generateCompareProps(prev);
  const n = generateCompareProps(next);

  for (let i = 0; i < p.length; i++) {
    if (p[i] !== n[i]) {
      return false;
    }
  }

  // TODO fix generate compare props
  return false;
}
