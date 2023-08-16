import React from 'react';

import { Flower } from './Flower';

export default {
  title: 'iris/Welcome',
  parameters: {
    options: { showPanel: false },
    lostpixel: {
      disable: true,
    },
  },
};

export function Welcome() {
  return <Flower />;
}
