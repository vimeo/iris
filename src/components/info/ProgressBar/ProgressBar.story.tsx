import React from 'react';
import styled from 'styled-components';

import { ProgressBar as PB } from './ProgressBar';

import { Story } from '../../../storybook';

export default { title: 'Components|Info/Progress Bar' };

export function Common() {
  return (
    <Story title="Progress Bar">
      <ProgressBar value={25} format="neutral" size="md" />
      <ProgressBar
        value={33.33}
        format="neutral"
        size="md"
        animated
      />
      <ProgressBar value={0} format="neutral" size="lg" animated />
      <ProgressBar value={50} format="neutral" size="xl" animated />
      <ProgressBar value={0} format="empty" size="md" animated />
      <ProgressBar value={0} format="empty" size="lg" animated />
      <ProgressBar value={0} format="empty" size="xl" animated />
      <ProgressBar value={25} format="warning" size="md" />
      <ProgressBar value={75} format="warning" size="lg" />
      <ProgressBar value={60} format="warning" size="xl" />
      <ProgressBar value={80} format="alert" size="xl" />
      <ProgressBar value={25} format="disabled" size="lg" />
    </Story>
  );
}
const ProgressBar = styled(PB)`
  margin: 3rem 0;
`;
