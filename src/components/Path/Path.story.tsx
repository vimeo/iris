import React from 'react';
import styled from 'styled-components';

import { Path as P } from './Path';

import { Globe } from '../../icons';

export default { title: 'components/Path', component: P };

const Path = styled(P)`
  margin: 0 0.5rem;
`;

export function PathStory() {
  return (
    <Path>
      <Path.Link href="#">Home</Path.Link>
      <Path.Link href="#">Showcases</Path.Link>
      <Path.Current icon={<Globe />}>New Showcase</Path.Current>
    </Path>
  );
}
PathStory.storyName = 'Path';
