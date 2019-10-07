import React, { Component, useState } from 'react';
import { storiesOf } from '@storybook/react';

import { SlideUpDown } from './SlideUpDown';

import { Story } from '../../storybook';
import { ParagraphMd } from '../../legacy';
import { Button, Notification } from '../../components';

storiesOf('Motion|Animation', module).add('Slide Up Down', () => (
  <Story title="Slide Up Down">
    <SlideUpDownDocs />
  </Story>
));

const SlideUpDownDocs = () => {
  const [hidden, setHidden] = useState(false);
  const doClick = () => setHidden(hidden => !hidden);

  return (
    <>
      <Button onClick={doClick}>Toggle</Button>
      <SlideUpDown isHidden={hidden}>
        <Notification variant="success">
          <ParagraphMd>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aut quidem fugiat corrupti inventore eaque. Eaque
            aspernatur sed magni ex reprehenderit deleniti, nemo nihil
            delectus ab dignissimos, beatae molestiae architecto
            recusandae? Molestias accusantium dolorum ipsum quae
            quibusdam minus distinctio accusamus optio.
          </ParagraphMd>
        </Notification>
      </SlideUpDown>
      <SlideUpDown animateOpenOnMount isHidden={hidden}>
        <Notification variant="success">
          <ParagraphMd>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aut quidem fugiat corrupti inventore eaque. Eaque
            aspernatur sed magni ex reprehenderit deleniti, nemo nihil
            delectus ab dignissimos, beatae molestiae architecto
            recusandae? Molestias accusantium dolorum ipsum quae
            quibusdam minus distinctio accusamus optio.
          </ParagraphMd>
        </Notification>
      </SlideUpDown>
    </>
  );
};
