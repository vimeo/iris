import React from 'react';
import styled from 'styled-components';

import { Path as P } from './Path';

export default {
  title: 'Components/Info/Path/Examples',
  component: P,
};

const Path = styled(P)`
  margin: 0 0.5rem;
`;

export function CustomWidths() {
  const style = `padding: 0.5rem 1rem;`;

  return (
    <>
      <div css={style}>
        <Path>
          <Path.Link href="#" style={{ maxWidth: '5rem' }}>
            5rem max-width Path.Link
          </Path.Link>
          <Path.Link href="#" style={{ maxWidth: '5rem' }}>
            5rem max-width Path.Link
          </Path.Link>
          <Path.Current style={{ maxWidth: '5rem' }}>
            5rem max-width Path.Current
          </Path.Current>
        </Path>
      </div>
      <div css={style}>
        <Path>
          <Path.Link href="#" style={{ maxWidth: '10rem' }}>
            10rem max-width Path.Link
          </Path.Link>
          <Path.Link href="#" style={{ maxWidth: '6rem' }}>
            6rem max-width Path.Link
          </Path.Link>
          <Path.Current>Path.Current</Path.Current>
        </Path>
      </div>
      <div css={style}>
        <Path>
          <Path.Link href="#" style={{ maxWidth: '15rem' }}>
            15rem max-width Path.Link
          </Path.Link>
          <Path.Link href="#">full size Path.Link</Path.Link>
          <Path.Current style={{ maxWidth: '7rem' }}>
            7rem max-width Path.Current With Long Name
          </Path.Current>
        </Path>
      </div>
      <div css={style}>
        <Path>
          <Path.Link href="#">full-size Path.Link</Path.Link>
          <Path.Link href="#">full-size Path.Link</Path.Link>
          <Path.Current>
            full-size Path.Current With Long Name
          </Path.Current>
        </Path>
      </div>
    </>
  );
}
