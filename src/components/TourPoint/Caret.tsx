import React from 'react';
import styled from 'styled-components';
import { core } from '../../tokens';

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
  background: ${core.color.surface(600)};
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

export function buildClipPaths(attach) {
  const [side, placement] = attach.split('-');
  const axis = side === 'left' || side === 'right' ? 'X' : 'Y';

  const TL = side === 'left' || side === 'top';

  const sign = TL ? 1 : -1;
  const operator = TL ? '+' : '-';
  const end = TL ? '0%' : '100%';

  const distance = 0.67 * sign * -1 + 'rem';
  const inset = `calc(${end} ${operator} 1rem)`;
  const translate = `translate${axis}(${distance})`;

  const [A, B, Tip] = buildVertices(placement, side, inset);
  const clipPath = `polygon(${A}, ${Tip}, ${B})`;

  return {
    '--caret-translate': translate,
    '--caret-clip-path': clipPath,
  };
}

function buildVertices(placement, side, inset) {
  const TL = placement === 'left' || placement === 'top';
  const end = TL ? '0%' : '100%';
  const sign = TL ? 1 : -1;

  const points = buildPoints(placement, sign, end);

  return points.map((point, i) => {
    const tip = i === 2;
    const outset = inset.replace('1rem', '0rem');

    return tip
      ? buildVertex(side, outset, point)
      : buildVertex(side, inset, point);
  });
}

function buildVertex(side, X, Y) {
  return side === 'left' || side === 'right'
    ? `${X} ${Y}`
    : `${Y} ${X}`;
}

function buildPoints(placement, sign, end) {
  if (!placement) {
    return [
      'calc(50% + 1rem)',
      'calc(50% - 1rem)',
      'calc(50% + 0rem)',
    ];
  } else {
    return [
      `calc(${end} + ${sign * 1.25}rem)`,
      `calc(${end} + ${sign * 3.25}rem)`,
      `calc(${end} + ${sign * 2.25}rem)`,
    ];
  }
}
