import React, { useState } from 'react';
import { rgba } from 'polished';

import { Calendar } from './Calendar';

import { Header } from '../../../../typography';
import { Layout } from '../../../../storybook';

export default {
  title: 'Components/Inputs/Dates/Calendar',
};

export function CalendarStory() {
  const [date, setDate] = useState(new Date());

  return (
    <Layout.StoryVertical>
      <Header size="5">
        This component is consumed by DateRange and DateSelect, but it
        is not exported by itself.
      </Header>
      <Calendar
        selected={date}
        onClick={(date) => setDate(date)}
        css={`
          width: 20rem;
          border: 1px dashed
            ${(p) => rgba(p.theme.content.color, 0.25)};
          border-radius: 0.25rem;
        `}
      />
    </Layout.StoryVertical>
  );
}
CalendarStory.storyName = 'Calendar';
