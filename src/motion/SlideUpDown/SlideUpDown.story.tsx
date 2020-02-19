import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { SlideUpDown } from './SlideUpDown';

import { Story } from '../../storybook';
import { Paragraph } from '../../typography';
import { Button, Notice } from '../../components';

storiesOf('Motion|animation', module).add('Slide Up Down', () => (
  <Story title="Slide Up Down">
    <SlideUpDownDocs />
  </Story>
));

const SlideUpDownDocs = () => {
  const [showing, setShowing] = useState(true);
  const doClick = () => setShowing(showing => !showing);

  return (
    <>
      <Button onClick={doClick} style={{ marginBottom: '1rem' }}>
        Toggle
      </Button>
      <SlideUpDown showing={showing}>
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
    </>
  );
};
