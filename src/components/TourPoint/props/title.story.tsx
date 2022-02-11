import React, { useState } from 'react';

import { TourPoint } from '../TourPoint';
import { Tour } from '../TourPoint.context';
import { Card } from '../TourPoint.story';

import { Input } from '../../../components';
import { StoryControlBar } from '../../../storybook';

export function Title() {
  const [title, titleSet] = useState('A Fresh New Look');

  return (
    <>
      <StoryControlBar>
        <Input
          value={title}
          onChange={(e) => titleSet(e.target.value)}
          style={{ width: '20rem' }}
        />
      </StoryControlBar>
      <div
        style={{
          padding: '7rem',
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          height: '500px',
        }}
      >
        <Tour steps={1}>
          <TourPoint
            active
            attach="left"
            src="http://placekitten.com/320/213"
            step={1}
            title={title}
            content="All the leaves are brown and the sky is grey, I've been for a walk on a winters day."
          >
            <Card>1</Card>
          </TourPoint>
        </Tour>
      </div>
    </>
  );
}
Title.storyName = 'title';
