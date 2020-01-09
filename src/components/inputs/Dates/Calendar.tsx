import React, {
  useState,
  useRef,
  useLayoutEffect,
  MouseEventHandler,
} from 'react';
import styled, { css } from 'styled-components';

import { useDaysFromViewport } from './useDaysFromViewport';

import { blue, white } from '../../../color';
import { ChevronRight } from '../../../icons';
import { Header } from '../../../typography';
import { IrisProps, geometry } from '../../../utils';
import { rgba, rem } from 'polished';

interface Props {
  selected?: Date;
  initialMonth?: Date;
  onClick?: (date: Date) => void;
}

export const Calendar = ({
  onClick,
  selected,
  initialMonth = new Date(),
  ...props
}: IrisProps<Props>) => {
  const [viewing, setViewing] = useState(gotoMonth(initialMonth, 0));
  const [width, setWidth] = useState(0);
  const days = useDaysFromViewport(viewing);

  const resetMonth = () => setViewing(new Date());
  const next = () => setViewing(gotoMonth(viewing, 1));
  const prev = () => setViewing(gotoMonth(viewing, -1));

  function select(date) {
    const newMonth = date.getMonth() !== viewing.getMonth();

    return () => {
      if (newMonth) setViewing(date);
      onClick(date);
    };
  }

  const inCurrentMonth = date =>
    date.getMonth() === viewing.getMonth();

  const inCurrentYear = date =>
    date.getFullYear() === viewing.getFullYear();

  function isCurrentDate(date) {
    const selectedDate = new Date(selected);
    const sameDate = selectedDate.getDate() === date.getDate();
    const sameMonth = inCurrentMonth(selectedDate);
    const sameYear = inCurrentYear(selectedDate);

    return sameDate && sameMonth && sameYear;
  }

  const ref = useRef<HTMLDivElement>();

  useLayoutEffect(() => setWidth(geometry(ref).width), [setWidth]);

  return (
    <Wrapper {...props}>
      <MonthNav>
        <PrevMonth onClick={prev} />
        <MonthLabel size="4" onClick={resetMonth}>
          {month(viewing)}
        </MonthLabel>
        <NextMonth onClick={next} />
      </MonthNav>

      <Days ref={ref} width={width}>
        {DAY_LABELS.map((day, i) => (
          <DayLabel size={width / 7} key={i}>
            {day}
          </DayLabel>
        ))}

        {days.map((day, i) => (
          <Day
            key={i}
            size={width / 7}
            onClick={select(day)}
            isCurrentDate={isCurrentDate(day)}
            inCurrentMonth={inCurrentMonth(day)}
          >
            {String(day.getDate()).padStart(2, '0')}
          </Day>
        ))}
      </Days>
    </Wrapper>
  );
};

const DAYS_OF_WEEK = {
  Sunday: 'Su',
  Monday: 'Mo',
  Tuesday: 'Tu',
  Wednesday: 'We',
  Thursday: 'Th',
  Friday: 'Fr',
  Saturday: 'Sa',
};

const DAY_LABELS = Object.values(DAYS_OF_WEEK);

function month(month) {
  return month.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}

function gotoMonth(viewingMonth, i) {
  return new Date(
    viewingMonth.getFullYear(),
    viewingMonth.getMonth() + i,
    1,
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const MonthNav = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding-top: 1rem;
  align-items: center;
  justify-content: center;
`;

const MonthLabel = styled(Header)`
  margin: 0;
  flex-grow: 2;
  text-align: center;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.content.color};
  cursor: pointer;
`;

const NextMonth = styled(ChevronRight)<{
  onClick?: MouseEventHandler;
}>`
  width: 2rem;
  padding: 0;
  margin: 0 0.75rem;
  cursor: pointer;

  * {
    fill: ${({ theme }) => rgba(theme.content.color, 0.75)};
    stroke-width: 1px;
  }
`;

const PrevMonth = styled(NextMonth)`
  transform: rotate(180deg);
`;

const Days = styled.div<{ width?: number }>`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  align-content: flex-start;
  padding: 0 0.5rem 0.5rem;
  height: ${p => rem(p.width)};
  width: 100%;
`;

interface DayProps {
  size?: number;
  inCurrentMonth?: boolean;
  isCurrentDate?: boolean;
}

const Day = styled.div<DayProps>`
  position: relative;
  cursor: pointer;
  flex: 0 0 calc(100% / 7);
  width: calc(100% / 7);
  height: calc(100% / 7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: ${p => rem(14 + (p.size > 45.8 && p.size / 7))};
  font-weight: 500;
  padding: 0.75rem 0.25rem;
  color: ${({ theme }) => theme.content.color};
  opacity: ${p => (p.inCurrentMonth ? 1 : 0.125)};
  z-index: 0;
  background: transparent;

  &::after {
    content: '';
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${rgba(blue(500), 0)};
    border-radius: 50%;
    transition: 120ms ease-in-out;
    z-index: -1;
  }

  ${p =>
    p.isCurrentDate &&
    p.inCurrentMonth &&
    css`
      color: ${white};

      &::after {
        background: ${rgba(blue(500), 1)};
      }
    `};

  &:hover {
    color: ${white};

    &::after {
      background: ${rgba(blue(500), 1)};
    }
  }
`;

const DayLabel = styled(Day)`
  font-weight: bold;
  opacity: 1;
  pointer-events: none;
`;
