import React from 'react';

import { Flower } from './Flower';
import { Styles } from './Styles';

export default {
  title: 'iris/Welcome',
  parameters: { options: { showPanel: false } },
};

export function Welcome() {
  return (
    <>
      <Styles />
      <Flower />
    </>
  );
}
