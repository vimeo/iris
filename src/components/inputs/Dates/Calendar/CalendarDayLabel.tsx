import React from 'react';
import styled, { css } from 'styled-components';
import { rem, rgba } from 'polished';

import { white, green, blue } from '../../../../color';
import { IrisProps } from '../../../../utils';
import { Paragraph } from '../../../../typography';

type Props = IrisProps<{
  isControl: boolean;
  isPast: boolean;
  isTrack: boolean;
  isStart: boolean;
  isEnd: boolean;
}>;

function Label({ className, children, ...props }: Props) {
  return (
    <Paragraph size="1" className={className} {...props}>
      {children}
    </Paragraph>
  );
}

export const CalendarDayLabel = styled(Label)`
  font-size: ${rem(14)};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: ' ';
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  ${props => {
    if (!props.isPast) {
      return css`
        &:hover {
          color: ${white};
          z-index: 1;
          &:before {
            pointer-events: none;
            background-color: ${blue(600)};
            border-radius: 50%;
            transform: scale(1.1);
          }
        }
      `;
    }
  }}

  ${props => {
    if (props.isPast) {
      return css`
        cursor: default;
        color: ${({ theme }) => rgba(theme.formats.soft, 0.25)};
      `;
    }

    if (props.isTrack && props.isControl) {
      return css`
        background-color: ${({ theme }) =>
          theme.name === 'dark' ? rgba(green(50), 0.25) : green(50)};
        z-index: 1;
        color: ${white};
        &:before {
          background-color: ${blue(500)};
          border-radius: 50%;
        }
      `;
    }

    if (props.isTrack) {
      return css`
        background-color: ${({ theme }) =>
          theme.name === 'dark' ? rgba(green(50), 0.25) : green(50)};
      `;
    }

    if (props.isControl) {
      const control = css`
        z-index: 1;
        color: ${white};
        &:before {
          background-color: ${blue(500)};
          border-radius: 50%;
        }
      `;

      if (props.isStart && !props.isEnd) {
        return css`
          ${control};
          background-color: ${({ theme }) =>
            theme.name === 'dark'
              ? rgba(green(50), 0.25)
              : green(50)};
          border-radius: 50% 0 0 50%;
        `;
      }

      if (props.isEnd) {
        return css`
          ${control};
          background-color: ${({ theme }) =>
            theme.name === 'dark'
              ? rgba(green(50), 0.25)
              : green(50)};
          border-radius: 0 50% 50% 0;
        `;
      }

      return css`
        ${control}
      `;
    }

    return css`
      color: ${({ theme }) => theme.formats.soft};
    `;
  }}
`;
