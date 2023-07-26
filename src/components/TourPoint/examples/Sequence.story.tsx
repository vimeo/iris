import React, { useContext } from 'react';

import { TourPoint } from '../TourPoint';
import { Tour, TourContext } from '../TourPoint.context';
import { Card } from '../TourPoint.story';

import { Button } from '../../../components';
import { StoryControlBar } from '../../../storybook';

export default {
  component: TourPoint,
  title: 'components/TourPoint/examples',
  parameters: {
    lostpixel: {
      disable: true,
    },
  },
};

export function Sequence() {
  function Children() {
    const { active, activeSet } = useContext(TourContext);

    const content =
      "All the leaves are brown and the sky is grey, I've been for a walk on a winters day.";

    return (
      <>
        <StoryControlBar>
          <Button onClick={() => activeSet(1)}>Restart</Button>
        </StoryControlBar>
        <TourPoint
          attach="left-top"
          active={active === 1}
          content={content}
          title="A Fresh New Look"
          src="http://placekitten.com/320/213"
          step={1}
        >
          <Card>1</Card>
        </TourPoint>
        <TourPoint
          attach="left-top"
          active={active === 2}
          content={content}
          title="A Fresh New Look"
          src="http://placekitten.com/320/213"
          step={2}
        >
          <Card>2</Card>
        </TourPoint>
        <TourPoint
          attach="left-top"
          active={active === 3}
          content={content}
          title="A Fresh New Look"
          src="http://placekitten.com/320/213"
          step={3}
        >
          <Card>3</Card>
        </TourPoint>
      </>
    );
  }

  return (
    <Tour id="demo-tour" steps={3}>
      <Children />
    </Tour>
  );
}
Sequence.storyName = 'sequence';
