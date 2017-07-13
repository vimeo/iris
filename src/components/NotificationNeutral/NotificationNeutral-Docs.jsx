import React from 'react';
import NotificationNeutral from './NotificationNeutral';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import Button from '../Button/Button';
import SlideUpDown from '../../animations/SlideUpDown/SlideUpDown';
import { ParagraphMd } from '../../../src/utility_components/Type/Type';

class NotificationNeutralDocs extends React.Component {
    // test handler for onDismiss event

    constructor(props) {
        super(props);
        this.state = { hideNotification: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ hideNotification: !this.state.hideNotification });

    }

    render() {

        return (
            <div>
                <ParagraphMd>The Neutral Notification is used for most message types.</ParagraphMd>
                <ParagraphMd>If the notification can be dismissed, Animation should be acheived by the SlideUpDown component. <a href="/pattern/Animation/SlideUpDownAnimation">See documentation.</a></ParagraphMd>

                <div data-code>
                    <SlideUpDown
                        isHidden={this.state.hideNotification}
                    >
                        <NotificationNeutral
                            onDismiss={this.handleClick}
                        >
                            <p>This component is a neutral notification. I am dismissable. I have a click handler function for onDismiss as well (look at the console!).</p>
                        </NotificationNeutral>
                    </SlideUpDown>
                    <Button format="secondaryOutline" size="xs" onClick={this.handleClick}>Toggle Notifcation</Button>
                    <NotificationNeutral hasIcon={false}>
                        <p>This is a neutral notification without an icon.  I am  NOT dismissable.</p>
                    </NotificationNeutral>
                    <NotificationNeutral>
                        <p>This is a neutral notification. Also in order to make this a little longer I'm going to remind you that you can't be neutral on a moving train.</p>
                    </NotificationNeutral>
                </div>

                <ExampleSource>
                    {`
<SlideUpDown
    isHidden={this.state.hideNotification}
>
    <NotificationNeutral
        onDismiss={this.handleClick}
    >
        <p>This component is a neutral notification. I am dismissable. I have a click handler function for onDismiss as well (look at the console!).</p>
    </NotificationNeutral>
</SlideUpDown>
<Button format="secondaryOutline" size="xs" onClick={this.handleClick}>Toggle Notifcation</Button>
<NotificationNeutral hasIcon={false}>
    <p>This is a neutral notification without an icon.  I am  NOT dismissable.</p>
</NotificationNeutral>
<NotificationNeutral>
    <p>This is a neutral notification. Also in order to make this a little longer I'm going to remind you that you can't be neutral on a moving train.</p>
</NotificationNeutral>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default NotificationNeutralDocs;
