import React from 'react';

import { Caption } from './Caption';

import {
  loremIpsum,
  randomInteger,
  secondsToMinutes,
} from '../../util';

export function CaptionStory() {
  const seconds = randomInteger(60);
  const start = secondsToMinutes(seconds);
  const end = secondsToMinutes(seconds + randomInteger(7));
  const text = loremIpsum();

  const data = { start, end, text };

  return (
    <div style={{ maxWidth: '25rem' }}>
      <Caption data={data} />
      <br />
      <Caption data={data} active />
    </div>
  );
}
