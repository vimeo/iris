import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { IrisComponent } from '../../../utils';

import { Paragraph } from '../../../typography';

import {
  AstroGranite,
  White,
  Porcelain,
  Foam,
  VimeoBlue,
  VimeoBlueDarkened,
} from '../../../color';

interface Props {
  isControl: boolean;
  isPast: boolean;
  isTrack: boolean;
  isStart: boolean;
  isEnd: boolean;
}

const Label: IrisComponent<Props> = ({ className, children }) => {
  return (
    <Paragraph size="1" className={className}>
      {children}
    </Paragraph>
  );
};

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
          color: ${White};
          z-index: 1;
          &:before {
            pointer-events: none;
            background-color: ${VimeoBlueDarkened};
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
        color: ${Porcelain};
      `;
    }

    if (props.isTrack && props.isControl) {
      return css`
        background-color: ${Foam};
        z-index: 1;
        color: ${White};
        &:before {
          background-color: ${VimeoBlue};
          border-radius: 50%;
        }
      `;
    }

    if (props.isTrack) {
      return css`
        background-color: ${Foam};
      `;
    }

    if (props.isControl) {
      const control = css`
        z-index: 1;
        color: ${White};
        &:before {
          background-color: ${VimeoBlue};
          border-radius: 50%;
        }
      `;

      if (props.isStart && !props.isEnd) {
        return css`
          ${control};
          background-color: ${Foam};
          border-radius: 50% 0 0 50%;
        `;
      }

      if (props.isEnd) {
        return css`
          ${control};
          background-color: ${Foam};
          border-radius: 0 50% 50% 0;
        `;
      }

      return css`
        ${control}
      `;
    }

    return css`
      color: ${AstroGranite};
    `;
  }}
`;
