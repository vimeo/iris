import React from 'react';

import { Flower } from './Flower';
import { Styles } from './Styles';

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
  return (
    <>
      <Styles />
      <Flower />
    </>
  );
}
