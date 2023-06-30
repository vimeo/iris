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
  labelAsTooltip = true,
  onClick,
  isActive,
  activeStyles,
  ...props
}: ItemPropsIntrinsic) {
  return labelAsTooltip ? (
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
  ) : (
    <ItemLabelledStyled
      format="basic"
      icon={icon}
      onClick={onClick}
      size="md"
      variant="minimalTransparent"
      isActive={isActive}
      activeStyles={activeStyles}
      {...props}
    >
      {label}
    </ItemLabelledStyled>
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
  ${({ isActive, activeStyles }) =>
    isActive && activeStyles ? activeStyles : ''};

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

const ItemLabelledStyled = styled(Button)<{
  isActive?: boolean;
  activeStyles?: ActiveStyles;
}>`
  height: 4rem;
  width: 4rem;
  min-height: 4rem;
  min-width: 4rem;
  padding: 0.25rem;
  margin: 2px 0;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  // The negative margin here is to adjust the look of the
  // sidebar gutter, in order to avoid making an adjustment to the existing
  // sidebar padding which would break the no-labels version of the sidebar
  margin: 0.125rem -0.25rem;

  ${({ isActive, activeStyles }) =>
    isActive && activeStyles ? activeStyles : ''}

  > svg {
    // !important: Overrides padding placed on svg in Stylebar.style.ts
    padding: 0 !important;
    width: 1.25rem;
    height: 1.25rem;
    min-width: 1.25rem;
    max-width: 1.25rem;
    min-height: 1.25rem;
    max-height: 1.25rem;
    margin: 0 0 0.45rem 0;
  }

  // Button label
  > span {
    font-weight: 400;
    text-overflow: initial;
    font-size: 0.6875rem;
    line-height: initial;
    white-space: initial;
  }
`;

export const Break = styled.div`
  width: 100%;
  border-top: 1px solid ${core.color.stroke};
  margin: 0.35rem auto;
  transition: 120ms ease-in-out;
`;
