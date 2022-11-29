import React, { forwardRef } from 'react';

import { Story } from '@storybook/react';

import { TourPoint } from './TourPoint';

import { Header } from '../../typography';

export default {
  title: 'components/TourPoint',
  component: TourPoint,
  argTypes: {
    icon: { control: { disable: true } },
    onClose: { control: { disable: true } },
    target: { control: { disable: true } },
  },
  excludeStories: ['Card'],
};

type Props = any;

new Image().src = 'http://placekitten.com/320/213';

const Template: Story<Props> = (args) => {
  return (
    <div
      style={{
        padding: '7rem',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        height: '500px',
      }}
    >
      <TourPoint
        active={true}
        attach="left"
        {...args}
        src="http://placekitten.com/320/213"
        step={1}
        title="A Fresh New Look"
        content="All the leaves are brown and the sky is grey, I've been for a walk on a winters day."
        onClick={() => console.log('tourpoint clicked')}
      >
        <Card>1</Card>
      </TourPoint>
    </div>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'TourPoint';
Controls.args = {};

export const Card: any = forwardRef(({ children }, ref: any) => {
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
