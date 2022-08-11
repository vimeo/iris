import React from 'react';

import { Password } from './Password';

export default {
  title: 'components/Password/props',
};

export function Label({ args }) {
  return (
    <div
      css={`
        padding: 2rem;
        max-width: 30rem;
      `}
    >
      <Password label="Input (Password)" {...args} />
    </div>
  );
}

export function Floating({ args }) {
  return (
    <div
      css={`
        padding: 2rem;
        max-width: 30rem;
      `}
    >
      <Password label="Input (Password)" floating {...args} />
    </div>
  );
}
