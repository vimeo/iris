import React, { useRef, ComponentProps } from 'react';
import { useCalendar } from '@react-aria/calendar';
import { useLocale } from '@react-aria/i18n';
import {
  useCalendarState,
  CalendarStateOptions,
} from '@react-stately/calendar';
import { createCalendar } from '@internationalized/date';

import { ChevronRight, ChevronLeft } from '../../icons';
import { CalendarNavButton } from './CalendarNavButton';
import { Header } from '../../typography';
import { CalendarGrid } from './CalendarGrid';
import { css } from 'styled-components';
import { Box } from '@vimeo-ux/components';

type BoxProps = ComponentProps<typeof Box>;
export interface CalendarProps extends BoxProps {
  initialMonth?: any;
  minDate?: any;
  maxDate?: any;
  className?: string;
}

const IconStyle = css`
  height: 2rem;
  * {
    fill: ${({ theme }) => theme.content.color};
  }
`;

/**
 * A calendar component that leverages Adobe's react-spectrum library.
 * Please see the following library docs:
 *   https://react-spectrum.adobe.com/react-aria/useCalendar.html
 *   https://react-spectrum.adobe.com/react-stately/useCalendarState.html
 *   https://react-spectrum.adobe.com/react-aria/useLocale.html
 */
export const Calendar = ({
  initialMonth,
  minDate,
  maxDate,
  onClick,
  ...props
}: CalendarProps) => {
  const { locale } = useLocale();
  const { className } = props;

  const state = useCalendarState({
    ...props,
    minValue: minDate,
    defaultValue: initialMonth,
    locale,
    createCalendar,
  });

  const ref = useRef();
  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useCalendar(props as CalendarStateOptions, state);

  return (
    <Box
      {...calendarProps}
      width="100%"
      className={className}
      ref={ref}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <CalendarNavButton {...prevButtonProps}>
          <ChevronLeft css={IconStyle} />
        </CalendarNavButton>
        <Header
          size="4"
          css={`
            margin-bottom: 0;
          `}
        >
          {title}
        </Header>
        <CalendarNavButton {...nextButtonProps}>
          <ChevronRight css={IconStyle} />
        </CalendarNavButton>
      </Box>
      <CalendarGrid onClick={onClick} state={state} />
    </Box>
  );
};
