import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { PanelProps } from './Tabs.types';

import { IrisProps } from '../../utils';

export function Panel({
  children,
  active,
  onActivate, // deprecated!
  onOpen,
  ...props
}: IrisProps<PanelProps>) {
  if (onActivate) onOpen = onActivate;

  const opened = useRef(false);

  useEffect(() => {
    if (!opened.current) {
      opened.current = true;
      onOpen?.();
    }
  }, [onOpen]);

  return <PanelStyled {...props}>{children}</PanelStyled>;
}

const PanelStyled = styled.div`
  position: relative;
  padding: 0.5rem 0;
`;
