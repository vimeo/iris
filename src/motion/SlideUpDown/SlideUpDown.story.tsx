import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Story } from '../../storybook';
import { Paragraph } from '../../typography';
import { Button, Notice } from '../../components';

import { SlideUpDown } from './SlideUpDown';

storiesOf('Motion|animation', module).add('Slide Up Down', () => (
  <Story title="Slide Up Down">
    <SlideUpDownDocs />
  </Story>
));

const SlideUpDownDocs = () => {
  const [hidden, setHidden] = useState(false);
  const doClick = () => setHidden(hidden => !hidden);

  return (
    <>
      <Button onClick={doClick} style={{ marginBottom: '1rem' }}>
        Toggle
      </Button>
      <SlideUpDown isHidden={hidden}>
        <Notice format="positive">
          <Paragraph size="2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aut quidem fugiat corrupti inventore eaque. Eaque
            aspernatur sed magni ex reprehenderit deleniti, nemo nihil
            delectus ab dignissimos, beatae molestiae architecto
            recusandae? Molestias accusantium dolorum ipsum quae
            quibusdam minus distinctio accusamus optio.
          </Paragraph>
        </Notice>
      </SlideUpDown>
      <SlideUpDown animateOpenOnMount isHidden={hidden}>
        <Notice format="primary">
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
    </>
  );
};
