import React from 'react';
import styled from 'styled-components';

import { Button as B } from '../Button';
import { Pencil, Camera, Gear, UploadCloud } from '../../../../icons';
import { red } from '../../../../color';

export default {
  title: 'components/Button/examples',
  component: B,
};

export function GrowthCTA() {
  return (
    <div>
      <Button size="xl" icon={<UploadCloud />}>
        Create videos
      </Button>
      <Button size="xl" icon={<Pencil />} color="#E0FF2B">
        Create videos
      </Button>
      <Button size="xl" icon={<Gear />} color="#f39e00">
        Download Chrome extension
      </Button>
      <Button size="xl" icon={<Camera />} color={red(600)}>
        Try the free demo
      </Button>
    </div>
  );
}

const Button = styled(B)`
  margin: 1rem;
`;
