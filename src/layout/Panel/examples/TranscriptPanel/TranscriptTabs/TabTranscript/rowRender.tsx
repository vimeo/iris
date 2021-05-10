import React from 'react';

import { Caption } from '../Caption/Caption';

export function rowRender({
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
  if (!segment) return <div />;

  if (segment.spacer) return <div />;

  const active =
    currentTime >= segment.start && currentTime <= segment.end;

  const onClick = () => gotoTimecode(segment);

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
