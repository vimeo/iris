/// <reference types="styled-components/cssprop" />
import React, { useState } from 'react';
import { rgba } from 'polished';

import { Calendar } from './Calendar';

import { Story } from '../../../../storybook';

export default { title: 'Components|Inputs/Calendar' };

export const Common = () => <CommonStory />;
function CommonStory() {
  const [date, setDate] = useState(new Date());

  return (
    <Story title="Calendar">
      <Calendar
        selected={date}
        onClick={date => setDate(date)}
        css={`
          width: 20rem;
          border: 1px dashed ${p => rgba(p.theme.content.color, 0.25)};
          border-radius: 0.25rem;
        `}
      />
    </Story>
  );
}
