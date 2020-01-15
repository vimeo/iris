import React, { SFC, forwardRef } from 'react';
import styled from 'styled-components';
import {
  setSaturation,
  shade,
  lighten,
  darken,
  saturate,
} from 'polished';

import { Button } from '../../components';
import { ChevronDown } from '../../icons';

export const ToggleButton = forwardRef(
  ({ color, children, status, ...props }, ref) => {
    return (
      <ButtonStyled
        format="primary"
        color={color}
        ref={ref}
        {...props}
      >
        <StatusDot color={color} />
        {children}
        <Chevron />
      </ButtonStyled>
    );
  },
);

const Chevron = styled(ChevronDown)`
  position: absolute;
  top: calc(50% - 10px);
  right: 20px;
  height: 20px;
  width: 20px;

  * {
    fill: white;
  }
`;

const StatusDot = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  color: ${props => saturate(0.1, lighten(0.05, props.color))};
  background: ${props => saturate(0.1, lighten(0.05, props.color))};
  position: absolute;
  top: calc(50% - 4px);
  left: 20px;
`;

const ButtonStyled = styled(Button)`
  padding: 0 60px;
  min-width: 200px;
  border: 0;
  color: white !important;
  background: ${props =>
    setSaturation(0.49, shade(0.31, darken(0.11, props.color)))};

  &:hover {
    background: ${props =>
      setSaturation(0.6, shade(0.25, darken(0.05, props.color)))};

    ${StatusDot} {
      color: ${props => lighten(0.15, props.color)};
      background: ${props => lighten(0.15, props.color)};
    }
  }

  &:active {
    background: ${props => shade(0.2, darken(0.05, props.color))};
  }
`;
