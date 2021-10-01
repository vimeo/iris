import React, { useState } from 'react';

import { Button } from '../../Button/Button';
import { TourPoint } from '../TourPoint';
import { Tour } from '../TourPoint.context';

import { PopOver } from '../../../components';
import { Paragraph } from '../../../typography';

export function InsidePopOver() {
  const [active, activeSet] = useState(false);

  return (
    <div
      style={{
        padding: '7rem',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        height: '500px',
      }}>
      <Tour steps={1}>
        <PopOver
          attach="right"
          active={active}
          content={
            <div style={{ padding: '2rem', maxWidth: '15rem' }}>
              <TourPoint
                active={active}
                attach="top"
                src="http://placekitten.com/320/213"
                step={1}
                title="A Fresh New Look"
                content="All the leaves are brown and the sky is grey, I've been for a walk on a winters day.">
                <div>
                  <Paragraph size="1">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Accusantium, harum.
                  </Paragraph>
                </div>
              </TourPoint>
            </div>
          }>
          <Button onClick={() => activeSet((s) => !s)}>
            Open PopOver
          </Button>
        </PopOver>
      </Tour>
    </div>
  );
}
InsidePopOver.storyName = 'inside PopOver';

export function InsidePopOverDelay() {
  const [active, activeSet] = useState(false);

  return (
    <div
      style={{
        padding: '7rem',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        height: '500px',
      }}>
      <Tour steps={1}>
        <PopOver
          attach="right"
          onOpen={() => setTimeout(() => activeSet(true), 400)}
          onClose={() => activeSet(false)}
          content={
            <div style={{ padding: '2rem', maxWidth: '15rem' }}>
              <TourPoint
                active={active}
                attach="top"
                src="http://placekitten.com/320/213"
                step={1}
                title="A Fresh New Look"
                content="All the leaves are brown and the sky is grey, I've been for a walk on a winters day.">
                <div>
                  <Paragraph size="1">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Accusantium, harum.
                  </Paragraph>
                </div>
              </TourPoint>
            </div>
          }>
          <Button>Open PopOver</Button>
        </PopOver>
      </Tour>
    </div>
  );
}
InsidePopOverDelay.storyName = 'inside PopOver (with delay)';
