import React from 'react';
import { Calendar } from './Calendar';
import { today, getLocalTimeZone } from '@internationalized/date';
import { rgba } from 'polished';
import { UxProvider } from '@vimeo-ux/theme';

export default {
  title: 'components/Calendar',
  component: Calendar,
};

export const Example = () => {
  const minDate = today(getLocalTimeZone());
  const initialMonth = today(getLocalTimeZone());

  return (
    <UxProvider>
      <Calendar
        minDate={minDate}
        initialMonth={initialMonth}
        css={`
          width: 20rem;
          border: 1px dashed
            ${(p) => rgba(p.theme.content.color, 0.25)};
          border-radius: 0.25rem;
        `}
      />
    </UxProvider>
  );
};
