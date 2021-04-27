import React, { useLayoutEffect, useRef, useState } from 'react';
import { VariableSizeList as List } from 'react-window';

import { Caption } from './Caption';

export function TabTranscript({ data, gotoTimecode, currentTime }) {
  const [height, heightSet] = useState(0);
  const [width, widthSet] = useState(0);

  const [visibleStartIndex, visibleStartIndexSet] = useState(0);
  const [visibleStopIndex, visibleStopIndexSet] = useState(0);
  const [scrollDirection, scrollDirectionSet] = useState();

  const ref = useRef();

  useLayoutEffect(() => {
    const element = ref?.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      const { blockSize, inlineSize } = entries[0].borderBoxSize[0];

      const listSize = { height: blockSize, width: inlineSize };

      if (height !== listSize.height) heightSet(listSize.height);
      if (width !== listSize.width) widthSet(listSize.width);
    });

    observer.observe(element);
    return () => observer.unobserve(element);
    //
  }, [height, width]);

  function onItemsRendered({
    visibleStartIndex: start,
    visibleStopIndex: stop,
  }) {
    if (visibleStartIndex !== start) visibleStartIndexSet(start);
    if (visibleStopIndex !== stop) visibleStopIndexSet(stop);
  }

  function onScroll(event) {
    scrollDirectionSet(event.scrollDirection);
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

  return (
    <div ref={ref} style={{ height: '100%', position: 'relative' }}>
      <List
        children={rowRenderer}
        height={height}
        itemCount={data.length}
        itemData={itemData}
        itemSize={getItemSize}
        onItemsRendered={onItemsRendered}
        onScroll={onScroll}
        width={width}
      />
    </div>
  );
}

function rowRenderer({
  data: {
    data,
    currentTime,
    gotoTimecode,
    scrollDirection,
    visibleStartIndex,
    visibleStopIndex,
  },
  index,
  style,
}) {
  const segment = data[index];

  const active = currentTime === segment.start;
  const onClick = () => gotoTimecode(segment);

  // const rangeSize = Math.abs(visibleStopIndex - visibleStartIndex);

  const delay =
    scrollDirection === 'forward'
      ? index - visibleStartIndex
      : -1 * (index - visibleStopIndex);

  return (
    <Caption
      data={segment}
      active={active}
      delay={delay}
      onClick={onClick}
      style={style}
    />
  );
}
