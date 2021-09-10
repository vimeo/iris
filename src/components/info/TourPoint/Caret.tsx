import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { CaretStyled } from './TourPoint.style';

export function Caret({ attach = 'left' }) {
  const { name } = useContext(ThemeContext);
  const style = attachPosition({ attach, theme: name });

  return <CaretStyled style={style} />;
}

function caret(side, sideA, sideB, borderSize) {
  return side === sideA || side === sideB ? borderSize : 0;
}

function attachPosition({
  attach = 'left',
  distance = 1,
  size = 0.5,
  theme = 'light',
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

  const borderImage = gradient(attach, theme);
  const borderRadius = '0.125rem';

  const styleSide = {
    [side]: '-0.68rem',
    [shiftProp]: shiftVal,
    borderRadius,
    borderImage,
    ...border,
  };

  return styleSide;
}

// TODO:
// Either calculate gradients based on size of TourPoint or
// place an equivalent conic-gradient very-off-center that
// correctly overlaps with the gradient on the TourPoint.
function gradient(attach, theme) {
  let colors = [];

  if (attach === 'right')
    colors = ['rgb(142, 79, 146)', 'rgb(119, 75, 161)'];
  if (attach === 'right-top')
    colors = ['rgb(237, 110, 82)', 'rgb(237, 103, 83)'];
  if (attach === 'right-bottom')
    colors = ['rgb(103, 148, 223)', 'rgb(104, 158, 228)'];
  if (attach === 'left')
    colors = ['rgb(177, 197, 80)', 'rgb(160, 196, 69)'];
  if (attach === 'left-top')
    colors = ['rgb(246, 198, 111)', 'rgb(246, 199, 115)'];
  if (attach === 'left-bottom')
    colors = ['rgb(90, 156, 148)', 'rgb(83, 151, 159)'];
  if (attach === 'top')
    colors = ['rgb(244, 183, 73)', 'rgb(244, 176, 71)'];
  if (attach === 'top-left')
    colors = ['rgb(246, 195, 104)', 'rgb(245, 193, 99)'];
  if (attach === 'top-right')
    colors = ['rgb(240, 131, 79)', 'rgb(238, 123, 80)'];
  if (attach === 'bottom')
    colors = ['rgb(80, 159, 221)', 'rgb(86, 167, 227)'];
  if (attach === 'bottom-left')
    colors = ['rgb(72, 143, 177)', 'rgb(64, 138, 190)'];
  if (attach === 'bottom-right')
    colors = ['rgb(106, 186, 246)', 'rgb(105, 175, 239)'];

  if (theme === 'dark')
    colors = colors.map((color) => shade(0.125, color));

  return `linear-gradient(${colors}) 1`;
}
