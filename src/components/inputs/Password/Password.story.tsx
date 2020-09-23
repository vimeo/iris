import React from 'react';

import { Password } from './Password';

export default { title: 'Components/inputs/Password' };

export function Common() {
  return (
    <div
      css={`
        padding: 2rem;
        max-width: 30rem;
      `}
    >
      <Password />
    </div>
  );
}

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
