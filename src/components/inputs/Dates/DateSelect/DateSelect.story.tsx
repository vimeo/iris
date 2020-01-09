import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DateSelect } from './DateSelect';
import { Story } from '../../../../storybook';
import { Input } from '../../Input/Input';

storiesOf(`Components|inputs/Dates`, module).add(
  'Date Select',
  () => <DateSelectStory />,
);

const DateSelectStory = ({}) => {
  const [date1, setDate1] = useState(new Date());

  const initialMonth = new Date('01/01/2032');
  const [date2, setDate2] = useState(initialMonth);

  return (
    <Story title="Date Select">
      <DateSelect onSelect={date => setDate1(date)}>
        <Input value={date1.toLocaleDateString()} readOnly />
      </DateSelect>
      <br />
      <DateSelect
        onSelect={date => setDate2(date)}
        initialMonth={initialMonth}
      >
        <Input value={date2.toLocaleDateString()} readOnly />
      </DateSelect>
    </Story>
  );
};
