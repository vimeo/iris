import React, { useEffect } from 'react';
import styled from 'styled-components';

import { PanelProps } from './Tabs.types';

import { IrisProps } from '../../utils';

export function Panel({
  children,
  active,
  onActivate,
  onOpen,
  ...props
}: IrisProps<PanelProps>) {
  if (onActivate) onOpen = onActivate;
  useEffect(() => onOpen?.(), []);

  return <PanelStyled {...props}>{children}</PanelStyled>;
}

const PanelStyled = styled.div`
  position: relative;
  padding: 0.5rem 0;
`;
