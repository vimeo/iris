import styled from 'styled-components';
import { rem } from 'polished';
import { GridColProps } from './GridColTypes';
import { GridColVariableElement } from './GridColVariableElement';
import { GRID } from '../Grid/GridTypes';
import { BREAKPOINTS } from '../Legacy/BREAKPOINTS';
import { mediaQuery } from '../Layout/MediaQuery';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

const buildSizeCSS = props =>
  sizes.map(size => {
    const sizeSpan = props[`${size}Span`];
    const sizeFixed = props[`${size}Fixed`];

    const sizeOffset =
      size === 'xs' ? props.offset : props[`${size}Offset`];

    const validProp = prop => prop || prop === 0;

    const width = validProp(sizeFixed) ? BREAKPOINTS[size] : 100;

    return [
      validProp(sizeSpan) ? buildSpanMQ(sizeSpan, size, width) : null,
      validProp(sizeOffset) ? buildOffset(sizeOffset, size) : null,
    ];
  });

const buildSpanMQ = (size, mq, width = 100) => {
  const flexBasis =
    width === 100
      ? `${(size / 24) * width}%`
      : rem((size / 24) * width);

  return size !== 0
    ? mediaQuery[mq]`
            flex: 1 1 ${flexBasis};
            max-width: ${flexBasis}; `
    : mediaQuery[mq]`
            flex: 1 0 0;`;
};

const buildOffset = (offset, mq = null) => {
  const direction = offset > 0 ? 'left' : 'right';

  const marginCSS = `
        margin-${direction}: ${100 * (offset / 24)}%
    `;

  return mq ? mediaQuery[mq]`${marginCSS}` : marginCSS;
};

export const GridColStyled = styled<GridColProps, any>(
  GridColVariableElement,
)`
    padding-left: ${rem(GRID.gutterWidth)};
    padding-right: ${rem(GRID.gutterWidth)};

    ${buildSizeCSS}

    ${props => (props.alignment === 'left' ? 'order: -1' : null)}

    ${props => (props.alignment === 'right' ? 'order: 2' : null)}

    ${props =>
      props.formColumn
        ? `
        padding-left: ${rem(GRID.gutterWidthForm)};
        padding-right: ${rem(GRID.gutterWidthForm)};
    `
        : null}
`;
