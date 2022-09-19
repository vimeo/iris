import React, { useRef, useState, useLayoutEffect } from 'react';
import { useLocale } from '@react-aria/i18n';
import { useCalendarGrid } from '@react-aria/calendar';
import {
  getWeeksInMonth,
  DateDuration,
} from '@internationalized/date';
import { CalendarCell } from './CalendarCell';
import {
  CalendarState,
  RangeCalendarState,
} from '@react-stately/calendar';

import { geometry } from '../../utils';
import { rem } from 'polished';

import { Box } from '@vimeo-ux/components';

interface CalendarGridProps {
  state: CalendarState | RangeCalendarState;
  onClick?: () => void;
  offset?: DateDuration;
}

export const CalendarGrid = ({
  onClick,
  state,
  offset = {},
}: CalendarGridProps) => {
  const { locale } = useLocale();
  const startDate = state.visibleRange.start.add(offset);
  const { gridProps, headerProps, weekDays } = useCalendarGrid(
    {
      startDate,
    },
    state
  );

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(startDate, locale);

  const ref = useRef();
  const [height, setHeight] = useState(0);

  useLayoutEffect(
    () => setHeight(geometry(ref.current).width),
    [setHeight]
  );

  const CellStyles = {
    height: `${height}px`,
    fontSize: `${rem(14 + (height > 45.8 && height / 7))}`,
  };

  return (
    <Box
      as="table"
      cellPadding={0}
      cellSpacing={0}
      {...gridProps}
      style={{
        width: '100%',
        borderSpacing: '0 .25rem',
      }}
    >
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th ref={ref} key={index} style={CellStyles}>
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex} style={CellStyles}>
            {state
              .getDatesInWeek(weekIndex, startDate)
              .map((date, i) =>
                date ? (
                  <CalendarCell
                    key={i}
                    state={state}
                    date={date}
                    currentMonth={startDate}
                    onClick={onClick}
                    height={height}
                  />
                ) : (
                  <td key={i} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </Box>
  );
};
