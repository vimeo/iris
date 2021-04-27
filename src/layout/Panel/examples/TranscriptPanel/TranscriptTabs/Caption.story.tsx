import React from 'react';

import { Caption } from './Caption';

import { loremIpsum, randomInteger, secondsToMinutes } from '../util';

// export default {
//   title: 'layout/Panel/examples/TranscriptPanel',
// };

export function CaptionStory() {
  const seconds = randomInteger(60);
  const start = secondsToMinutes(seconds);
  const end = secondsToMinutes(seconds + randomInteger(7));
  const text = loremIpsum();

  const data = { start, end, text };

  return (
    <>
      <Caption data={data} />
      <Caption data={data} active />
    </>
  );
}
