import React, { forwardRef, useContext, useState } from 'react';

import { TourPoint } from '../TourPoint';
import { Tour, TourContext } from '../TourPoint.context';

import { Button } from '../../Button/Button';
import { Header, Paragraph } from '../../../typography';
import { History, Plus } from '../../../icons';
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

export function ChildrenResize() {
  function Children() {
    const { active, activeSet } = useContext(TourContext);
    const [extra, extraSet] = useState(false);

    const content = (
      <>
        <Paragraph size="1">
          All the leaves are brown and the sky is grey, I've been for
          a walk on a winters day.
        </Paragraph>
        <div
          style={{
            width: '100%',
            height: extra ? '10rem' : '0rem',
            background: 'rgba(0,0,0,0.15)',
            borderRadius: '0.25rem',
            margin: extra ? '0.5rem 0' : 0,
            transition: '160ms ease-in-out',
          }}
        />
      </>
    );

    const restartTour = () => activeSet(1);
    const toggleExtra = () => extraSet((s) => !s);

    return (
      <>
        <StoryControlBar>
          <Button icon={<History />} onClick={restartTour}>
            Restart Tour
          </Button>
          <Button icon={<Plus />} onClick={toggleExtra}>
            Toggle Size
          </Button>
        </StoryControlBar>
        <div
          style={{
            padding: '3rem',
            alignItems: 'flex-start',
          }}
        >
          <TourPoint
            active={active === 1}
            attach="left-top"
            content={content}
            src="http://placekitten.com/320/213"
            step={1}
            title="A Fresh New Look"
          >
            <Card>left-top</Card>
          </TourPoint>
          <TourPoint
            active={active === 2}
            attach="right"
            content={content}
            src="http://placekitten.com/320/213"
            step={2}
            title="A Fresh New Look"
          >
            <Card>right</Card>
          </TourPoint>
        </div>
      </>
    );
  }

  return (
    <Tour steps={2}>
      <Children />
    </Tour>
  );
}
ChildrenResize.storyName = 'resize TourPoint children';

const Card: any = forwardRef(({ children }, ref: any) => {
  return (
    <div
      ref={ref}
      style={{
        width: '12rem',
        height: '12rem',
        background: 'rgba(150,150,150,0.5)',
        padding: '1rem',
        borderRadius: '0.25rem',
        margin: '4rem auto',
      }}
    >
      <Header size="3">{children}</Header>
    </div>
  );
});
