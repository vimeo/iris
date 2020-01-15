import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Card as Styled } from '../../components/cards/Card/Card.style';

import { IrisProps, withIris } from '../../utils';
import { StaffPicksBadgeJustSp } from '../../illustration';

export const VideoCard = withIris<HTMLDivElement, Props>(
  CardComponent,
);

type Props = IrisProps<
  {
    loading?: boolean;
    selected?: boolean;
    noHoverState?: boolean;
    badge?: any;
  },
  HTMLDivElement
>;

function CardComponent({ forwardRef, badge, ...props }: Props) {
  return (
    <VCStyled ref={forwardRef} {...props}>
      {badge && <SPIcon>{badge}</SPIcon>}
      <img
        src="http://placekitten.com/540/230"
        style={{ width: '100%', height: '100%' }}
      />
      <Sidebar />
    </VCStyled>
  );
}

const SPIcon = styled(StaffPicksBadgeJustSp)`
  width: 2rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const Sidebar = styled.div`
  opacity: 0;
  background: #fff;
  position: absolute;
  top: 0;
  height: 100%;
  left: 0;
  z-index: -1;
  width: 0;
  transition: 150ms ease-in-out;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
`;

const VCStyled = styled(Styled)`
  z-index: 100;
  transition: 150ms ease-in-out;
  cursor: pointer;

  &:hover {
    z-index: 200;
    transform: scale(1.05);
  }

  &:hover ${Sidebar} {
    opacity: 1;
    width: 150%;
    height: calc(100% + 2rem);
    top: -1rem;
    left: -1rem;
  }
`;
