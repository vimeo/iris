import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { ParagraphMd } from '../Type';
import { SlideUpDown } from './SlideUpDown';
import { Button } from '../Button/Button';
import { Notification } from '../Notification/Notification';
import { Story } from '../../.storybook/Story';

storiesOf('animation', module).add('Slide Up Down', () => (
  <Story title="Slide Up Down">
    <SlideUpDownDocs />
  </Story>
));

class SlideUpDownDocs extends Component {
  state = { hideNotification: false };

  handleClick = () =>
    this.setState({ hideNotification: !this.state.hideNotification });

  render = () => (
    <div>
      <Button onClick={this.handleClick}>Toggle</Button>
      <SlideUpDown isHidden={this.state.hideNotification}>
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
      <SlideUpDown
        animateOpenOnMount
        isHidden={this.state.hideNotification}
      >
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
    </div>
  );
}
