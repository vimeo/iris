import React, { useState, useRef } from 'react';

import { DateSelect } from './DateSelect';

import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { Layout } from '../../storybook';
import { useOutsideClick } from '../../utils';

export default {
  title: 'components/DateSelect/props',
};

export const InitialMonth = () => <InitialMonthStory />;
function InitialMonthStory() {
  const initialMonth = new Date('01/01/2032');
  const [date, dateSet] = useState(initialMonth);

  return (
    <Layout.StoryVertical>
      <DateSelect
        active
        onSelect={(date) => dateSet(date)}
        initialMonth={initialMonth}
      >
        <Input value={date.toLocaleDateString()} readOnly />
      </DateSelect>
    </Layout.StoryVertical>
  );
}

export const MinMaxDate = () => <MinMaxDateStory />;
function MinMaxDateStory() {
  const today = new Date();
  const day = 86400000;
  const selected = new Date(today.getTime() + day * 2);
  const minDate = new Date(today.getTime() - day * 3);
  const maxDate = new Date(today.getTime() + day * 7);
  const [date, dateSet] = useState(selected);

  return (
    <Layout.StoryVertical>
      <DateSelect
        active
        onSelect={(date) => dateSet(date)}
        min={minDate}
        max={maxDate}
        value={date}
      >
        <Input value={date.toLocaleDateString()} readOnly />
      </DateSelect>
    </Layout.StoryVertical>
  );
}

export function Active() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useOutsideClick(ref, () => {
    setActive(false);
  });

  return (
    <Layout.StoryVertical>
      <DateSelect
        active={active}
        ref={ref}
        onSelect={() => {
          setActive(false);
        }}
      >
        <Button onClick={() => setActive(!active)}>
          Open DateSelect
        </Button>
      </DateSelect>
    </Layout.StoryVertical>
  );
}

export function Value() {
  const selected = new Date();
  const [date, dateSet] = useState(selected);

  return (
    <Layout.StoryVertical>
      <DateSelect
        active
        value={date}
        onSelect={(date) => {
          dateSet(date);
        }}
      >
        <Input value={date.toLocaleDateString()} readOnly />
      </DateSelect>
    </Layout.StoryVertical>
  );
}

export function DefaultValue() {
  const selected = new Date();
  const [date, dateSet] = useState(null);

  return (
    <Layout.StoryVertical>
      <DateSelect
        active
        defaultValue={selected}
        value={date}
        onSelect={(date) => {
          dateSet(date);
        }}
      >
        <Input
          value={
            date ? date.toLocaleDateString() : 'No date selected'
          }
          readOnly
        />
      </DateSelect>
    </Layout.StoryVertical>
  );
}
