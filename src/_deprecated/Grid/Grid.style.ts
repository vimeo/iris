import styled, { css } from 'styled-components';
import { rem, em } from 'polished';

export const Styled = styled.div<any>`
  ${({ columns, masonry, stagger, gridGap }) => {
    return css`
      width: 100%;
      ${stagger && staggerStyle(columns)}

      /* IE SUPPORT */
      @supports not (display: grid) {
        display: flex;
        flex-wrap: wrap;
        & > * {
          ${flexItemStyle(columns, gridGap)};
        }
      }

      /* CSS GRID */
      @supports (display: grid) {
        display: grid;
        grid-gap: ${masonry
          ? `1px ${rem(gridGap)} !important`
          : rem(gridGap)};
        ${masonry && masonryStyle}
        ${gridColumnStyle(columns)}
      }
    `;
  }}
`;

export const masonryStyle = css`
  grid-auto-rows: 0;
`;

export const flexItemStyle = (columns, gridGap) => {
  const flexColumns =
    columns <= 12
      ? `0 1 calc(100% / ${columns})`
      : `1 1 ${rem(columns - gridGap / 2)}`;

  return css`
    flex: ${flexColumns};
    margin: ${gridGap / 2}px;
    height: 'unset';
  `;
};

export const gridColumnStyle = (columns) => {
  let gridColumns = null;
  switch (typeof columns) {
    case 'number':
      gridColumns = css`
        grid-template-columns: repeat(${columns}, 1fr);

        @media screen and (max-width: ${em(768)}) {
          grid-template-columns: repeat(
            auto-fill,
            minmax(250px, 1fr)
          );
        }
      `;
      break;
    case 'object':
      if (columns.minWidth) {
        gridColumns = css`
          grid-template-columns: repeat(
            auto-fill,
            minmax(${columns.minWidth}px, 1fr)
          );
        `;
      } else {
        const breakpointStyle = columns.reduce((acc, value) => {
          return (
            `
          @media screen and (min-width: ${em(value[0])}) {
            grid-template-columns: repeat(${value[1]}, 1fr);
          }
          ` + acc
          );
        }, '');
        gridColumns = css<{
          columns: number | number[][] | { minWidth: number };
        }>`
          grid-template-columns: repeat(${columns[0][1]}, 1fr);
          ${breakpointStyle}
        `;
      }
      break;
    default:
      break;
  }
  return gridColumns;
};

const staggerColumn = (selector = '2n') => css`
  > *:nth-child(${selector}) {
    transform: translateY(50%);
  }
`;

const staggerColumnOdd = (columns) =>
  new Array(columns)
    .fill(null)
    .map((_, i) => i % 2 == 1 && staggerColumn(`${columns}n - ${i}`));

const staggerStyle = (columns) =>
  columns % 2 == 0 ? staggerColumn() : staggerColumnOdd(columns);
