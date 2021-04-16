import React from 'react';

import { Password } from './Password';

export default {
  title: 'Components/Inputs/Password/Props',
};

export function Label() {
  return (
    <div
      css={`
        padding: 2rem;
        max-width: 30rem;
      `}
    >
      <Password label="Input (Password)" />
    </div>
  );
}

export function Floating() {
  return (
    <div
      css={`
        padding: 2rem;
        max-width: 30rem;
      `}
    >
      <Password label="Input (Password)" floating />
    </div>
  );
}
