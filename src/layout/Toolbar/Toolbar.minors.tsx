import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

import { ChevronRight } from '../../icons';
import { Tip } from '../../components';

export function Item({
  children = null,
  collapsed = null,
  icon,
  label,
  panel,
  onClick,
  ...props
}) {
  return collapsed ? (
    <Tip attach="right" content={label}>
      <ItemStyled onClick={onClick} {...props}>
        {icon}
      </ItemStyled>
    </Tip>
  ) : (
    <ItemStyled onClick={onClick} {...props}>
      {icon}
      <Label style={{ opacity: panel ? 0 : 1 }}>{label}</Label>
      <Chevron style={{ marginLeft: 'auto' }} />
    </ItemStyled>
  );
}

const fadeIn = keyframes`
  0% { 
    opacity: 0; 
  }

  100% {
    opacity: 1; 
  }
`;

const Chevron = styled(ChevronRight)`
  animation: ${fadeIn} 90ms ease-in-out 120ms both;
`;

const ItemStyled = styled.div`
  width: 100%;
  height: 3rem;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  transition: 120ms ease-in-out;

  svg {
    width: 2rem;
    min-width: 2rem;
    max-width: 2rem;
  }
`;

const Label = styled.span`
  display: inline-block;
  padding: 0 2rem 0 0.5rem;
  line-height: 2rem;
  min-width: 11rem;
  animation: ${fadeIn} 90ms ease-in-out 30ms both;
`;

export const Break = styled.div`
  width: 100%;
  border-top: 2px solid ${(p) => rgba(p.theme.content.color, 0.5)};
  margin: 1rem 0;
`;
