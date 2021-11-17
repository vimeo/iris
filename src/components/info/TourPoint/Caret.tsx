import React from 'react';
import styled from 'styled-components';
import { core } from '../../../tokens';

export function Caret({ attach = 'left' }) {
  const style = attachPosition({ attach });

  return <CaretStyled style={style} />;
}

function caret(side, sideA, sideB, borderSize) {
  return side === sideA || side === sideB ? borderSize : 0;
}

export const CaretStyled = styled.div`
  position: absolute;
  width: 1rem;
  height: 1rem;
  transform: rotate(-45deg);
  background: ${core.color.background(600)};
  border: 0.25rem solid transparent;
  background-clip: padding-box;
`;

function attachPosition({
  attach = 'left',
  distance = 1,
  size = 0.5,
}) {
  const borderSize = '0.25rem';
  const [side, placement] = attach.split('-');

  const attachSide = distance + size + 'rem';
  const attachCenter = 'calc(50% - ' + size + 'rem)';

  const axisY = side === 'top' || side === 'bottom';

  const shiftProp = placement ? placement : axisY ? 'left' : 'top';
  const shiftVal = placement ? attachSide : attachCenter;

  const border = {
    borderTopWidth: caret(side, 'top', 'left', borderSize),
    borderRightWidth: caret(side, 'right', 'top', borderSize),
    borderBottomWidth: caret(side, 'bottom', 'right', borderSize),
    borderLeftWidth: caret(side, 'left', 'bottom', borderSize),
  };

  const borderRadius = '0.125rem';

  const styleSide = {
    [side]: '-0.68rem',
    [shiftProp]: shiftVal,
    borderRadius,
    ...border,
  };

  return styleSide;
}
