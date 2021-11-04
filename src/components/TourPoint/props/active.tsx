import React, { useState } from 'react';

import { TourPoint } from '../TourPoint';
import { Tour } from '../TourPoint.context';
import { Card } from '../TourPoint.story';

import { Button } from '../..';
import { StoryControlBar } from '../../../storybook';

export function Active() {
  const [active, activeSet] = useState(true);

  return (
    <>
      <StoryControlBar>
        <Button onClick={() => activeSet((active) => !active)}>
          toggle
        </Button>
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
            active={active}
            attach="left"
            src="http://placekitten.com/320/213"
            step={1}
            title="A Fresh New Look"
            content="All the leaves are brown and the sky is grey, I've been for a walk on a winters day."
          >
            <Card>1</Card>
          </TourPoint>
        </Tour>
      </div>
    </>
  );
}
Active.storyName = 'active';
