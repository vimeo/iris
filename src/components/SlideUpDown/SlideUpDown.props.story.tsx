import React, { useState } from 'react';

import { SlideUpDown } from './SlideUpDown';

import { Paragraph } from '../../typography';
import { Button, Notice } from '../../components';
import { Layout } from '../../storybook';

export default {
  title: 'components/SlideUpDown/props',
  component: SlideUpDown,
};

export const Automatic = () => <AutomaticStory />;
function AutomaticStory() {
  const [showing, setShowing] = useState(true);
  const onClick = () => setShowing((showing) => !showing);

  return (
    <Layout.StoryVertical>
      <Button onClick={onClick} style={{ marginBottom: '1rem' }}>
        Toggle
      </Button>
      <SlideUpDown automatic showing={showing}>
        <Notice format="positive">
          <Paragraph size="2">
            I open automatically on mount!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aut quidem fugiat corrupti inventore eaque. Eaque
            aspernatur sed magni ex reprehenderit deleniti, nemo nihil
            delectus ab dignissimos, beatae molestiae architecto
            recusandae? Molestias accusantium dolorum ipsum quae
            quibusdam minus distinctio accusamus optio.
          </Paragraph>
        </Notice>
      </SlideUpDown>
    </Layout.StoryVertical>
  );
}
