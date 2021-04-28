import React, { useLayoutEffect, useReducer, useRef } from 'react';
import { VariableSizeList as List } from 'react-window';

import { Container } from './TabTranscript.style';
import { reducer, initialState } from './TabTranscript.state';
import { rowRender } from './rowRender';

export function TabTranscript({ data, gotoTimecode, currentTime }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const ref = useRef();

  const {
    height,
    width,
    visibleStartIndex,
    visibleStopIndex,
    scrollDirection,
  } = state;

  useLayoutEffect(() => {
    const element = ref?.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      const { blockSize, inlineSize } = entries[0].borderBoxSize[0];

      const listSize = { height: blockSize, width: inlineSize };

      if (height !== listSize.height) {
        dispatch({
          type: 'SET_HEIGHT',
          payload: listSize.height,
        });
      }

      if (width !== listSize.width) {
        dispatch({
          type: 'SET_WIDTH',
          payload: listSize.width,
        });
      }
    });

    observer.observe(element);
    return () => observer.unobserve(element);
    //
  }, [height, width]);

  function onItemsRendered(payload) {
    if (visibleStartIndex !== payload.visibleStartIndex) {
      dispatch({
        type: 'SET_VISIBLE_START_INDEX',
        payload,
      });
    }

    if (visibleStopIndex !== payload.visibleStopIndex) {
      dispatch({
        type: 'SET_VISIBLE_STOP_INDEX',
        payload,
      });
    }
  }

  function onScroll(payload) {
    if (scrollDirection !== payload.scrollDirection) {
      dispatch({
        type: 'SET_SCROLL_DIRECTION',
        payload,
      });
    }
  }

  function getItemSize(index) {
    return data[index].height;
  }

  const itemData = {
    data,
    currentTime,
    gotoTimecode,
    scrollDirection,
    visibleStartIndex,
    visibleStopIndex,
  };

  const atStart = visibleStartIndex < 1;
  const atStop = visibleStopIndex >= data.length - 2;

  return (
    <Container ref={ref} atStart={atStart} atStop={atStop}>
      <List
        children={rowRender}
        height={height}
        itemCount={data.length}
        itemData={itemData}
        itemSize={getItemSize}
        onItemsRendered={onItemsRendered}
        onScroll={onScroll}
        width={width}
      />
    </Container>
  );
}
