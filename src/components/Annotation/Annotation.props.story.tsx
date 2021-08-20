import React, { Fragment } from 'react';

import { Annotation } from './Annotation';

import { Layout } from '../../../storybook';
import { Header } from '../../../typography';
import { ANCHOR_POINTS } from '../../utils';

export default {
  title: 'Components/Info/Annotation/Props',
  component: Annotation,
};

export function Attach() {
  return (
    <Layout.StoryVertical center>
      {ANCHOR_POINTS.map((attach, i) => (
        <Fragment key={i}>
          <Annotation content="I am a tooltip" attach={attach}>
            <Header size="3">{attach}</Header>
          </Annotation>
        </Fragment>
      ))}
    </Layout.StoryVertical>
  );
}
