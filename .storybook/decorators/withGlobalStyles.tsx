import React from 'react';

import { GlobalStyles } from '../../src/utils';

export function withGlobalStyles(story) {
  return (
    <>
      <GlobalStyles />
      {story()}
    </>
  );
}
