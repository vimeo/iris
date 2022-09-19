import React from 'react';
import { CalendarRange } from './CalendarRange';
import { today, getLocalTimeZone } from '@internationalized/date';

export default {
  title: 'components/CalendarRange',
  component: CalendarRange,
};

export const Example = () => {
  return (
    <CalendarRange
      minValue={today(getLocalTimeZone())}
      defaultValue={{
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()).add({ weeks: 1 }),
      }}
      css={`
        width: 40rem;
      `}
    />
  );
};
