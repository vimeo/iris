import React from 'react';
import { useRef } from 'react';
import { useRangeCalendarState } from '@react-stately/calendar';
import { useRangeCalendar } from '@react-aria/calendar';
import { useLocale } from '@react-aria/i18n';
import {
  createCalendar,
  today,
  getLocalTimeZone,
} from '@internationalized/date';
import { CalendarGrid } from './CalendarGrid';
import { CalendarRangeHeader } from './CalendarRangeHeader';

import { Flex } from '@vimeo-ux/components';

/**
 * Reference: https://codesandbox.io/s/objective-shape-8r4utm
 */
export function CalendarRange(props) {
  const { locale } = useLocale();
  const minValue = today(getLocalTimeZone());

  const state = useRangeCalendarState({
    ...props,
    minValue,
    visibleDuration: { months: 2 },
    locale,
    createCalendar,
  });

  const ref = useRef();
  const { calendarProps, prevButtonProps, nextButtonProps } =
    useRangeCalendar(props, state, ref);
  const { className } = props;

  return (
    <div {...calendarProps} ref={ref} className={className}>
      <CalendarRangeHeader
        state={state}
        calendarProps={calendarProps}
        prevButtonProps={prevButtonProps}
        nextButtonProps={nextButtonProps}
      />
      <Flex gap="400">
        <CalendarGrid state={state} />
        <CalendarGrid state={state} offset={{ months: 1 }} />
      </Flex>
    </div>
  );
}
