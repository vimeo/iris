import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import {
  useCalendarCell,
  AriaCalendarCellProps,
} from '@react-aria/calendar';
import { useDateFormatter } from '@react-aria/i18n';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import {
  isSameMonth,
  isSameDay,
  CalendarDate,
} from '@internationalized/date';

import { rgba, rem } from 'polished';
import { blue } from '../../color';

export interface CalendarCellProps {
  isSelected?: boolean;
  isFocusVisible?: boolean;
  disabled?: boolean;
  height?: number;
  isSelectionStart?: boolean;
  isSelectionEnd?: boolean;
  onClick?: (CalendarDate) => void;
}

const Button = styled.span<CalendarCellProps>`
  height: ${(props) => props.height}px;
  display: ${(props) => (props.hidden ? 'hidden' : 'flex')};
  align-items: center;
  justify-content: center;
  cursor: default;
  border-radius: 100%;
  font-weight: 500;
  text-align: center;
  margin: auto;
  width: 100%;
  font-size: ${(props) =>
    rem(14 + (props.height > 45.8 && props.height / 7))};
  color: ${(props) => (props.isSelected ? 'white' : '')};
  outline: none;
  position: relative;
  transition: 120ms ease-in-out;
  ${(props) =>
    (props.isSelectionEnd || props.isSelectionStart) &&
    css`
      background: ${rgba(blue(500), 1)};
    `}

  &:hover {
    color: white;
    background: ${(props) =>
      props.isSelected ? rgba(blue(500), 1) : rgba(blue(500), 0.5)};
  }

  // Focus ring
  &:after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 100%;
    box-shadow: ${(props) =>
      props.isFocusVisible ? `0 0 0 2px ${blue(400)}` : ''};
  }

  &[aria-disabled='true'] {
    opacity: 0.125;
  }
`;

export function CalendarCell({ onClick, ...props }) {
  const ref = useRef();
  const { state, date, currentMonth, height } = props;
  const { cellProps, buttonProps, isSelected, isDisabled } =
    useCalendarCell(props as AriaCalendarCellProps, state, ref);

  const dateString = date.toDate(state.timeZone);

  // The start and end date of the selected range will have
  // an emphasized appearance.
  const isRange = !!state.highlightedRange;

  const isSelectionStart = state.highlightedRange
    ? isSameDay(date, state.highlightedRange.start)
    : isSelected;
  const isSelectionEnd = state.highlightedRange
    ? isSameDay(date, state.highlightedRange.end)
    : isSelected;

  const isOutsideMonth = !isSameMonth(currentMonth, date);

  const dateFormatter = useDateFormatter({
    day: 'numeric',
    timeZone: state.timeZone,
    calendar: date.calendar.identifier,
  });

  const { focusProps, isFocusVisible } = useFocusRing();

  const SelectedHighlight = css`
    ${isSelected &&
    !isOutsideMonth &&
    css`
      background: ${rgba(blue(500), 0.25)};
    `}
    ${isSelectionStart &&
    css`
      border-radius: 100% 0 0 100%;
    `}
    ${isSelectionEnd &&
    css`
      border-radius: 0 100% 100% 0;
    `};
  `;

  const handleClick = (date) => {
    if (onClick) {
      onClick(date);
    }
  };

  return (
    <td {...cellProps} css={isRange && SelectedHighlight}>
      <Button
        hidden={isOutsideMonth}
        ref={ref}
        {...mergeProps(buttonProps, focusProps)}
        isSelected={isSelected}
        isFocusVisible={isFocusVisible}
        disabled={isDisabled}
        height={height}
        isSelectionEnd={isSelectionEnd}
        isSelectionStart={isSelectionStart}
        onClick={() => handleClick(dateString)}
      >
        {dateFormatter.format(dateString)}
      </Button>
    </td>
  );
}
