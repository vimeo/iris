import React from 'react';
import { useDateFormatter } from '@react-aria/i18n';
import { ChevronRight, ChevronLeft } from '../../icons';
import { VisuallyHidden } from '@react-aria/visually-hidden';

import styled, { css } from 'styled-components';

import { CalendarNavButton } from './CalendarNavButton';
import { Header } from '../../typography';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns:
    [icon-left] 40px
    [header-1] 1fr
    [gap] 2rem
    [header-2] 1fr
    [icon-right] 40px;
  width: 100%;
  text-align: center;
  align-items: center;
`;

const IconStyle = css`
  height: 2rem;
  * {
    fill: ${({ theme }) => theme.content.color};
  }
`;

export function CalendarRangeHeader({
  state,
  calendarProps,
  prevButtonProps,
  nextButtonProps,
}) {
  const monthDateFormatter = useDateFormatter({
    month: 'long',
    year: 'numeric',
    timeZone: state.timeZone,
  });

  return (
    <Wrapper>
      {/* Add a screen reader only description of the entire visible range rather than
       * a separate heading above each month grid. This is placed first in the DOM order
       * so that it is the first thing a touch screen reader user encounters.
       * In addition, VoiceOver on iOS does not announce the aria-label of the grid
       * elements, so the aria-label of the Calendar is included here as well. */}
      <VisuallyHidden>
        <Header size="4">{calendarProps['aria-label']}</Header>
      </VisuallyHidden>
      <CalendarNavButton {...prevButtonProps}>
        <ChevronLeft css={IconStyle} />
      </CalendarNavButton>
      <Header
        // We have a visually hidden heading describing the entire visible range,
        // and the calendar itself describes the individual month
        // so we don't need to repeat that here for screen reader users.
        aria-hidden
        size="4"
        css={{ marginBottom: 0 }}
      >
        {monthDateFormatter.format(
          state.visibleRange.start.toDate(state.timeZone)
        )}
      </Header>
      <Header
        aria-hidden
        size="4"
        css={{ marginBottom: 0, gridColumnStart: 'header-2' }}
      >
        {monthDateFormatter.format(
          state.visibleRange.start
            .add({ months: 1 })
            .toDate(state.timeZone)
        )}
      </Header>
      <CalendarNavButton {...nextButtonProps}>
        <ChevronRight css={IconStyle} />
      </CalendarNavButton>
    </Wrapper>
  );
}
