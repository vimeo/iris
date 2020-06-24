import React, { useState } from 'react';

import { DateSelect } from './DateSelect';

import { Input } from '../../Input/Input';
import { Layout } from '../../../../storybook';

export default { title: 'components|inputs/DateSelect' };

export const Common = () => <CommonStory />;
const CommonStory = () => {
  const [date, dateSet] = useState(new Date());

  return (
    <Layout.StoryVertical>
      <DateSelect onSelect={date => dateSet(date)}>
        <Input value={date.toLocaleDateString()} readOnly />
      </DateSelect>
    </Layout.StoryVertical>
  );
};

export const InitialMonth = () => <InitialMonthStory />;
function InitialMonthStory() {
  const initialMonth = new Date('01/01/2032');
  const [date, dateSet] = useState(initialMonth);

  return (
    <Layout.StoryVertical>
      <DateSelect
        onSelect={date => dateSet(date)}
        initialMonth={initialMonth}
      >
        <Input value={date.toLocaleDateString()} readOnly />
      </DateSelect>
    </Layout.StoryVertical>
  );
}
