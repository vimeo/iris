import React, { cloneElement } from 'react';
import styled from 'styled-components';

import { ItemPropsIntrinsic } from './Sidebar.types';

import { Button } from '../buttons/Button/Button';
import { Tip } from '../info/Tip/Tip';
import { core } from '../../tokens';

export function Item({
  attach = 'right',
  children: childrenNull = null,
  icon,
  label,
  onClick,
  tourPoint,
  ...props
}: ItemPropsIntrinsic) {
  const childrenItem = (
    <ItemStyled
      aria-label={label}
      format="basic"
      icon={icon}
      onClick={onClick}
      size="md"
      variant="minimalTransparent"
      {...props}
    />
  );

  const children = tourPoint ? (
    <div>{cloneElement(tourPoint, {}, childrenItem)}</div>
  ) : (
    childrenItem
  );

  return (
    <Tip attach={attach} content={label}>
      {children}
    </Tip>
  );
}

const ItemStyled = styled(Button)`
  height: 3rem;
  text-align: left;
  padding: 0.25rem 0.25rem 0.25rem 0.75rem;
  justify-content: start;
  width: 100%;

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
