import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { VideoCard as VC } from './VideoCard';

import { Story } from '../../storybook';
import { StaffPicksBadgeJustSp } from '../../illustration';

const VideoCard = styled(VC)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  letter-spacing: 0.005rem;
  font-size: 1.25rem;
`;

storiesOf(`Labs|VideoCard`, module).add('VideoCard', () => (
  <Story title="Video Card" width="100%">
    <Grid>
      <VideoCard badge={StaffPicksBadgeJustSp}>VideoCard</VideoCard>
      <VideoCard>VideoCard</VideoCard>
      <VideoCard>VideoCard</VideoCard>
      <VideoCard>VideoCard</VideoCard>
      <VideoCard>VideoCard</VideoCard>
    </Grid>
  </Story>
));

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    flex: 0 0 calc(33% - 2rem);
    margin: 1rem;
    min-height: 13rem;
  }
`;
