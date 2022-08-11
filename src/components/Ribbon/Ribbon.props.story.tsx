import React from 'react';
import { css } from 'styled-components';

import { Ribbon } from './Ribbon';

export default {
  title: 'components/Ribbon/props',
  component: Ribbon,
};

const style = css`
  margin: 1rem 1rem;
  width: 50%;
`;

export function Variant({ args }) {
  return (
    <>
      <Ribbon css={style} variant="rainbow" {...args} />
      <Ribbon css={style} variant="mod" />
      <Ribbon css={style} variant="possessed" />
    </>
  );
}

export function Animate({ args }) {
  return (
    <>
      <Ribbon css={style} animate {...args} />
      <Ribbon css={style} animate={false} />
    </>
  );
}

export function Size({ args }) {
  return (
    <>
      <Ribbon css={style} size="xs" {...args} />
      <Ribbon css={style} size="sm" />
      <Ribbon css={style} size="md" />
      <Ribbon css={style} size="lg" />
      <Ribbon css={style} size="xl" />
    </>
  );
}

export function Custom({ args }) {
  return (
    <>
      <Ribbon
        {...args}
        style={{
          background: 'linear-gradient(to right, red, yellow, red)',
          margin: '1rem 1rem',
          width: '50%',
        }}
      />
      <Ribbon
        animate={false}
        style={{
          background: 'linear-gradient(to right, red, yellow)',
          margin: '1rem 1rem',
          width: '50%',
        }}
      />
    </>
  );
}
