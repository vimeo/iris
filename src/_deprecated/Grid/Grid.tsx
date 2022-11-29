import React, {
  cloneElement,
  useRef,
  useEffect,
  useReducer,
  useImperativeHandle,
} from 'react';

import { Props } from './Grid.types';
import { Styled } from './Grid.style';
import { initialState, reducer } from './Grid.state';

import { withIris, useMeasure } from '../../utils';

export const Grid = withIris<HTMLDivElement, Props>(GridComponent);

function GridComponent({
  children,
  masonry,
  columns = 4,
  featured,
  forwardRef,
  ...props
}: Props) {
  const [state, dispatch] = useReducer(reducer, initialState());
  const { gridGap } = state;

  const ref = useRef(null);
  useImperativeHandle(forwardRef, () => ref.current, [ref]);

  const [measuredGridItems, data] = useMeasure(
    <div>{children}</div>,
    { depth: 1 }
  );

  useEffect(() => {
    const lastGap = gridGap;
    const gap = parseInt(ref.current?.style?.gap.slice(0, -2) ?? 0);
    const gapChanged =
      !Number.isNaN(gap) && gap !== lastGap && gap > 0;

    if (gapChanged) dispatch({ type: 'SET_GRID_GAP', payload: gap });
  }, [gridGap]);

  function applyGridStyles({ props: { style } }, i, height) {
    const gridColumn = featured === i ? '1/-1' : '';
    if (!masonry) return { ...style, gridColumn };

    // masonry requires us to calculate `grid-row-end` for each
    // child based upon the child's height
    const marginBottom = gridGap;
    const gridRowEnd = 'span ' + (height + gridGap + 1);
    return { ...style, gridRowEnd, marginBottom, gridColumn };
  }

  function cloneWithStyles(heights) {
    return (child, i) => {
      const style = applyGridStyles(child, i, heights[i]);
      return cloneElement(child, { style });
    };
  }

  function rebuildChildren() {
    // if useMeasure returns a portal to perform a measure
    if (measuredGridItems.type !== 'div') return children;

    // if useMeasure returns the component(s) with the measurements
    if (measuredGridItems.type === 'div') {
      const heights = data?.children?.map(({ height }) => height);
      const { children } = measuredGridItems.props;

      const gridItems = children.map(cloneWithStyles(heights));
      return gridItems;
    }
  }

  children = measuredGridItems?.props?.children
    ? rebuildChildren()
    : measuredGridItems;

  return (
    <Styled
      columns={columns}
      masonry={masonry}
      gridGap={gridGap}
      ref={ref}
      stagger={false}
      {...props}
    >
      {children}
    </Styled>
  );
}
