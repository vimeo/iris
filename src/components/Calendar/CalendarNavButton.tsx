import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

import { slate } from '../../color';
import { rgba } from 'polished';

export interface CalendarNavButtonProps {
  isFocusVisible?: boolean;
}

const StyledButton = styled.button<CalendarNavButtonProps>`
  appearance: none;
  border: none;
  background: none;
  color: black;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  &:hover {
    background: ${rgba(slate(500), 0.2)};
  }

  &:active {
    background: ${rgba(slate(500), 0.1)};
  }
`;

export function CalendarNavButton({ children, ...props }) {
  const ref = useRef();
  const { buttonProps } = useButton(props, ref);
  const { focusProps, isFocusVisible } = useFocusRing();
  return (
    <StyledButton
      {...mergeProps(buttonProps, focusProps)}
      isFocusVisible={isFocusVisible}
      ref={ref}
    >
      {children}
    </StyledButton>
  );
}
