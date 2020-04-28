import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { Calendar as C } from './Calendar';

import { Story } from '../../../../storybook';
import { rgba } from 'polished';

storiesOf(`Components|inputs/Dates`, module).add('Calendar', () => (
  <CalendarStory />
));

const CalendarStory = ({}) => {
  const [date, setDate] = useState(new Date());

  return (
    <Story title="Calendar">
      <Calendar selected={date} onClick={date => setDate(date)} />
    </Story>
  );
};

const Calendar = styled(C)`
  width: 20rem;
  border: 1px dashed ${({ theme }) => rgba(theme.content.color, 0.25)};
  border-radius: 0.25rem;
`;
