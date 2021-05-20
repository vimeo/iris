import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

import { ChevronRight } from '../../icons';
import { Button, Tip } from '../../components';

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
      <ItemStyled
        onClick={onClick}
        icon={icon}
        size="md"
        format="basic"
        variant="minimalTransparent"
        {...props}
      />
    </Tip>
  ) : (
    <ItemStyled
      onClick={onClick}
      icon={icon}
      size="md"
      format="basic"
      variant="minimalTransparent"
      {...props}
    >
      <Label style={{ opacity: panel ? 0 : 1 }}>{label}</Label>
      <Chevron />
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
  position: absolute;
  top: 0%;
  right: 0.5rem;
  padding: 0 !important;
  width: 2rem;
  min-width: 2rem;
  max-width: 2rem;
  height: 2rem;
  min-height: 2rem;
  max-height: 2rem;
`;

const ItemStyled = styled(Button)`
  /* width: 100%; */
  height: 3rem;
  /* padding: 0.5rem; */
  /* cursor: pointer; */
  /* display: flex; */
  /* transition: 120ms ease-in-out; */
  text-align: left;
  padding: 0.25rem 0.25rem 0.25rem 0.75rem;
  justify-content: start;

  > svg {
    padding: 0 !important;
    width: 1.25rem;
    min-width: 1.25rem;
    max-width: 1.25rem;
    height: 1.25rem;
    min-height: 1.25rem;
    max-height: 1.25rem;
  }
`;

const Label = styled.span`
  display: inline-block;
  padding: 0 2rem 0 0.5rem;
  line-height: 2rem;
  min-width: 11rem;
  animation: ${fadeIn} 90ms ease-in-out 30ms both;
`;

export const Break = styled.div<any>`
  width: calc(100% - 0.5rem);
  border-top: 2px solid ${(p) => rgba(p.theme.content.color, 0.5)};
  margin: 1rem auto;
  transition: 120ms ease-in-out;
`;
