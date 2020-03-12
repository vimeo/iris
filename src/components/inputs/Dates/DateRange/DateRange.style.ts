import { MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { rem, size, transparentize, padding, margin } from 'polished';

import { Calendar as BaseCalendar } from './Calendar';

import { Button } from '../../../buttons/Button/Button';
import { ChevronRight } from '../../../../icons';
import { black, blue } from '../../../../color';
import { slate } from '../../../../color/colors';

export const DateField = styled.div`
  padding-top: ${rem(16)};
  flex: 0 0 calc(50% - ${rem(32)});
`;

export const CalendarsContainer = styled.div<{ hidden?: boolean }>`
  flex: 0 0 100%;
  flex-flow: row wrap;
  display: ${props => (props.hidden ? 'hidden' : 'flex')};
  background-color: ${({ theme }) => theme.item.bg};
  border-radius: ${rem(3)};
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1 1 100%;
  ${padding(0, rem(16))};
`;

export const CalendarsBody = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  flex: 1 1 100%;
  ${padding(0, rem(16))};
`;

export const CalendarsFooter = styled.div`
  display: flex;
  flex: 1 1 100%;
  justify-content: space-between;
  box-shadow: 0 -${rem(2)} ${rem(3)} ${transparentize(0.9, black)};
  ${padding(rem(8))};
  ${margin(rem(8), 0, 0)}
`;

export const Calendar = styled(BaseCalendar)`
  flex: 0 0 calc(50% - ${rem(32)});
  display: flex;
`;

export const MoveLeft = styled(ChevronRight)<{
  inactive: boolean;
  onClick?: MouseEventHandler;
}>`
  ${size(rem(24))};
  transform: rotateY(180deg);
  cursor: pointer;
  path {
    fill: ${props => (props.inactive ? slate(100) : black)};
  }
`;

export const MoveRight = styled(ChevronRight)<{
  inactive: boolean;
  onClick?: MouseEventHandler;
}>`
  ${size(rem(24))};
  cursor: pointer;
  path {
    fill: ${props => (props.inactive ? slate(100) : black)};
  }
`;

export const ClearButton = styled(Button)`
  font-size: ${rem(14)};
  font-weight: 400;
  &:hover {
    text-decoration: underline;
    color: ${blue(500)};
    background: none;
    border-color: rgba(255, 255, 255, 0);
  }

  transition: opacity ease 300ms;

  ${props => {
    if (props.hidden) {
      return css`
        opacity: 0;
        visibility: hidden;
      `;
    } else {
      return css`
        opacity: 100;
        visibility: visible;
      `;
    }
  }}
`;

export const ApplyButton = styled(Button)`
  padding: 0 ${rem(32)};
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      color: #d0d8db;
      border-color: ${({ theme }) => theme.item.locked};
      background-color: ${({ theme }) => theme.item.locked};
    `}
`;
