import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Calendar } from '../Calendar/Calendar';

import { PopOver } from '../../../../layout';
import { IrisInputProps, withIris } from '../../../../utils';

export const DateSelect = withIris<HTMLInputElement, Props>(
  DateSelectComponent
);

export type Props = IrisInputProps<{
  /**
   * Defines the element that the DateSelect PopOver will attach to.
   * Typically, this would be an Input
   */
  children: ReactElement;
  /**
   * The default date selected in the calendar
   */
  defaultValue?: Date;
  onSelect?: (date: Date) => void;
  /**
   * A date object that tells the calendar what initial month to display.
   * If no month is provided it will default to the current month.
   *
   * Ex: new Date('01/01/2032')
   */
  initialMonth?: Date;
  /**
   * A date object that defines the minimum date a user can select
   */
  min?: Date;
  /**
   * A date object that defines the maximum date a user can select
   */
  max?: Date;
  /**
   * The selected date in the calendar
   */
  value?: Date;
  /**
   * Controls the PopOver state
   */
  active?: boolean;
}>;

function DateSelectComponent({
  active,
  children = null,
  defaultValue,
  forwardRef,
  initialMonth = new Date(),
  max,
  min,
  onSelect = null,
  style,
  value,
  ...props
}: IrisInputProps<Props>) {
  const select = (date: Date) => {
    onSelect && onSelect(date);
  };

  return (
    <PopOver
      attach="bottom"
      active={active ?? undefined}
      style={{ width: (style && style.width) || '20rem' }}
      content={
        <Wrapper style={style} ref={forwardRef} {...props}>
          <Calendar
            selected={value ?? defaultValue ?? undefined}
            onClick={select}
            initialMonth={initialMonth}
            minDate={min}
            maxDate={max}
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
