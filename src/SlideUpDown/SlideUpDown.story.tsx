import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { ParagraphMd } from '../Type';
import SlideUpDown from './SlideUpDown';
import Button from '../Button';
import NotificationSuccess from '../NotificationSuccess';

storiesOf('Animation', module).add('Slide Up Down', () => <SlideUpDownDocs />, {
    info: {
        inline: true,
        propTables: [SlideUpDown],
    },
    options: {
        name: 'Iris',
        url: '#',
    },
});

class SlideUpDownDocs extends Component {
    state = { hideNotification: false };

    handleClick = () =>
        this.setState({ hideNotification: !this.state.hideNotification });

    render = () => (
        <div>
            <Button onClick={this.handleClick}>Toggle</Button>
            <SlideUpDown isHidden={this.state.hideNotification}>
                <NotificationSuccess>
                    <ParagraphMd>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aut quidem fugiat corrupti inventore eaque. Eaque
                        aspernatur sed magni ex reprehenderit deleniti, nemo
                        nihil delectus ab dignissimos, beatae molestiae
                        architecto recusandae? Molestias accusantium dolorum
                        ipsum quae quibusdam minus distinctio accusamus optio.
                    </ParagraphMd>
                </NotificationSuccess>
            </SlideUpDown>
            <SlideUpDown
                animateOpenOnMount
                isHidden={this.state.hideNotification}
            >
                <NotificationSuccess>
                    <ParagraphMd>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aut quidem fugiat corrupti inventore eaque. Eaque
                        aspernatur sed magni ex reprehenderit deleniti, nemo
                        nihil delectus ab dignissimos, beatae molestiae
                        architecto recusandae? Molestias accusantium dolorum
                        ipsum quae quibusdam minus distinctio accusamus optio.
                    </ParagraphMd>
                </NotificationSuccess>
            </SlideUpDown>
        </div>
    );
}
