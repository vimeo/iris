import React from 'react';
import styled from 'styled-components';

import { ActiveStyles, ItemPropsIntrinsic } from './Sidebar.types';

import { Button } from '../Button/Button';
import { Tip } from '../Tip/Tip';
import { core } from '../../tokens';

export function Item({
  attach = 'right',
  children = null,
  icon,
  label,
  onClick,
  isActive,
  activeStyles,
  ...props
}: ItemPropsIntrinsic) {
  return (
    <Tip attach={attach} content={label}>
      <ItemStyled
        aria-label={label}
        format="basic"
        icon={icon}
        onClick={onClick}
        size="md"
        variant="minimalTransparent"
        isActive={isActive}
        activeStyles={activeStyles}
        {...props}
      />
    </Tip>
  );
}

const ItemStyled = styled(Button)<{
  isActive?: boolean;
  activeStyles?: ActiveStyles;
}>`
  height: 3rem;
  text-align: left;
  padding: 0.25rem 0.25rem 0.25rem 0.75rem;
  justify-content: start;
  ${({ isActive, activeStyles }) => (isActive ? activeStyles : '')};

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

export const Break = styled.div`
  width: calc(100% - 0.5rem);
  border-top: 2px solid ${core.color.stroke};
  margin: 1rem auto;
  transition: 120ms ease-in-out;
`;
