import React, { useState, ReactElement } from 'react';
import styled from 'styled-components';

import { Calendar } from '../Calendar/Calendar';

import { PopOver } from '../../../portals/PopOver/PopOver';
import { IrisInputProps, withIris } from '../../../../utils';

export const DateSelect = withIris<HTMLInputElement, Props>(
  DateSelectComponent,
);

type Props = IrisInputProps<{
  children: ReactElement;
  defaultValue?: string | string[];
  onSelect?: (date: Date) => void;
  /**
   * A date object that tells the calendar what initial month to display. If no month is provided it will default to the current month.
   *
   * Ex: new Date('01/01/2032')
   */
  initialMonth?: Date;
}>;

function DateSelectComponent({
  onSelect = null,
  initialMonth = new Date(),
  children = null,
  style,
  ...props
}: IrisInputProps<Props>) {
  const [date, setDate] = useState(initialMonth);

  function select(date: Date) {
    setDate(date);
    onSelect && onSelect(date);
  }

  return (
    <PopOver
      attach="bottom"
      style={{ width: (style && style.width) || '20rem' }}
      content={
        <Wrapper style={style} {...props}>
          <Calendar
            selected={date}
            onClick={select}
            initialMonth={initialMonth}
          />
        </Wrapper>
      }
    >
      {children}
    </PopOver>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.content.background};

  @media screen and (max-width: 500px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 2rem 1rem 5rem;
    border-top: 1px solid black;
  }
`;
