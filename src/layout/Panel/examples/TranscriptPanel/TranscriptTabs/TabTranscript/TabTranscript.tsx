import React, {
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import { VariableSizeList as List } from 'react-window';

import { Container } from './TabTranscript.style';
import { reducer, initialState } from './TabTranscript.state';
import { rowRender } from './rowRender';
import { Input } from '../../../../../../components';
import { Header } from '../../../../../../typography';

type VirtualListElement = HTMLElement & List;

export function TabTranscript({ data, gotoTimecode, currentTime }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const containerRef = useRef<HTMLElement>();
  const listRef = useRef<VirtualListElement>();

  const {
    height,
    width,
    visibleStartIndex,
    visibleStopIndex,
    scrollDirection,
  } = state;

  useLayoutEffect(() => {
    const element = containerRef?.current;
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

  useLayoutEffect(() => {
    const currentTimeChanged = false;

    if (currentTimeChanged) {
      const currentIndex = findCurrentIndex(data, currentTime);
      if (currentIndex === -1) return;

      const aboveRange = currentIndex < visibleStartIndex;
      const belowRange = currentIndex > visibleStopIndex;

      if (aboveRange || belowRange)
        listRef?.current.scrollToItem(currentIndex, 'center');
    }
  }, [data, currentTime, visibleStartIndex, visibleStopIndex]);

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

  const [search, searchSet] = useState(null);
  function updateSearch(event) {
    const query = event.target.value;
    if (query) searchSet(event.target.value);
    if (!query) searchSet(null);
  }

  const dataFiltered =
    search &&
    data.filter((segment) => {
      if (!segment) return false;
      const { spacer, text } = segment;

      if (spacer) return true;
      return text.includes(search);
    });

  const results = search && dataFiltered.length > 1;

  const atStart = visibleStartIndex < 1;
  const atStop = visibleStopIndex >= data.length - 2;

  if (search) {
    const itemData = {
      data: dataFiltered,
      currentTime,
      gotoTimecode,
      scrollDirection: 'backward',
      visibleStartIndex,
      visibleStopIndex,
    };

    const getItemSize = () => (index) => dataFiltered[index].height;

    return (
      <div
        style={{
          position: 'relative',
          height: '99%',
          border: '2px solid red',
        }}
      >
        <Input value={search} onChange={updateSearch} />
        <Header size="4">{dataFiltered.length} results</Header>
        <Container
          ref={containerRef}
          atStart={atStart}
          atStop={atStop}
        >
          {results ? (
            <List
              children={rowRender}
              height={height}
              itemCount={dataFiltered.length}
              itemData={itemData}
              itemSize={getItemSize()}
              onItemsRendered={onItemsRendered}
              onScroll={onScroll}
              ref={listRef}
              width={width}
            />
          ) : (
            <Header>no results</Header>
          )}
        </Container>
      </div>
    );
  } else {
    const itemData = {
      data: results ? dataFiltered : data,
      currentTime,
      gotoTimecode,
      scrollDirection,
      visibleStartIndex,
      visibleStopIndex,
    };

    const getItemSize = (index) => data[index].height;

    return (
      <div
        style={{
          position: 'relative',
          height: '99%',
          border: '2px solid blue',
        }}
      >
        <Input value={search} onChange={updateSearch} />
        <Container
          ref={containerRef}
          atStart={atStart}
          atStop={atStop}
        >
          <List
            children={rowRender}
            height={height}
            itemCount={data.length}
            itemData={itemData}
            itemSize={getItemSize}
            onItemsRendered={onItemsRendered}
            onScroll={onScroll}
            ref={listRef}
            width={width}
          />
        </Container>
      </div>
    );
  }
}

function findCurrentIndex(data, currentTime) {
  const match = data.findIndex(
    (segment) => currentTime === segment.start
  );
  return match;
}
