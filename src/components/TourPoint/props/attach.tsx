import React, { useContext } from 'react';

import { TourPoint } from '../TourPoint';
import { Tour, TourContext } from '../TourPoint.context';
import { Card } from '../TourPoint.story';

import { Button } from '../..';
import { StoryControlBar } from '../../../storybook';

export function Attach() {
  function Children() {
    const { active, activeSet } = useContext(TourContext);

    const content =
      "All the leaves are brown and the sky is grey, I've been for a walk on a winters day.";

    return (
      <>
        <StoryControlBar>
          <Button onClick={() => activeSet(1)}>Restart</Button>
        </StoryControlBar>
        <div
          style={{
            padding: '3rem',
            alignItems: 'flex-start',
          }}
        >
          {attachs.map((attach, i) => (
            <TourPoint
              active={active === i + 1}
              attach={attach}
              content={content}
              key={i}
              src="http://placekitten.com/320/213"
              step={i + 1}
              title="A Fresh New Look"
            >
              <Card>{attach}</Card>
            </TourPoint>
          ))}
        </div>
      </>
    );
  }

  return (
    <Tour steps={attachs.length}>
      <Children />
    </Tour>
  );
}
Attach.storyName = 'attach';

const sides = {
  X: ['right', 'left'],
  Y: ['top', 'bottom'],
};
const positions = {
  X: [null, 'top', 'bottom'],
  Y: [null, 'left', 'right'],
};

const attachs = ['X', 'Y'].flatMap((axis) =>
  sides[axis].flatMap((side) =>
    positions[axis].map((position) =>
      position ? side + '-' + position : side
    )
  )
);
