import React, {
  useEffect,
  useRef,
  useReducer,
  ReactNode,
} from 'react';

import { initialState, reducer } from './VirtualizedList.state';
import { Container, Scrollable } from './VirtualizedList.style';

import { geometry, IrisProps, withIris } from '../../utils';

export const VirtualizedList = withIris<HTMLDivElement, Props>(
  VirtualizedListComponent
);

type Props = IrisProps<
  {
    buffer?: number;
    children: ReactNode[];
  },
  HTMLDivElement
>;

function VirtualizedListComponent({ buffer = 1, children }: Props) {
  const { length } = children;
  const bottom = length == 0 ? 0 : 1;

  const [state, dispatch] = useReducer(reducer, initialState(bottom));
  const containerRef = useRef(null);
  const listRef = useRef(null);

  useEffect(updateItemHeight, [children]);
  useEffect(updateVisibleRange, [state.itemHeight]);
  useEffect(updateScrollDistance, [state.visibleRange]);

  function updateItemHeight() {
    const currentSize = state.visibleRange[1] - state.visibleRange[0];
    const payload = geometry(listRef.current).height / currentSize;
    dispatch({ type: 'SET_ITEM_HEIGHT', payload });
  }

  function updateVisibleRange() {
    const itemHeight = state.itemHeight;
    if (itemHeight) {
      const height = geometry(containerRef.current).height;
      const percentScrolled =
        containerRef.current.scrollTop / (length * itemHeight);

      const top = Math.round(length * percentScrolled);
      const bottom = top + Math.round(height / itemHeight);

      const bufferedTop = top >= buffer ? top - buffer : 0;
      const bufferedBottom =
        bottom <= length - buffer ? bottom + buffer : length;

      const payload: [number, number] = [bufferedTop, bufferedBottom];

      const rangeChanged =
        payload[0] != state.visibleRange[0] ||
        payload[1] != state.visibleRange[1];

      if (rangeChanged)
        dispatch({ type: 'SET_VISIBLE_RANGE', payload });
    }
  }

  function updateScrollDistance() {
    const payload = state.visibleRange[0] * state.itemHeight;
    dispatch({ type: 'SET_SCROLL_DISTANCE', payload });
  }

  const visibleChildren = children
    .slice(state.visibleRange[0], state.visibleRange[1])
    .map((item, i) => <div key={i}>{item}</div>);

  return (
    <Scrollable onScroll={updateVisibleRange} ref={containerRef}>
      <Container height={length * state.itemHeight}>
        <div
          ref={listRef}
          style={{
            transform: `translateY(${state.scrollDistance}px)`,
          }}
        >
          {visibleChildren}
        </div>
      </Container>
    </Scrollable>
  );
}
