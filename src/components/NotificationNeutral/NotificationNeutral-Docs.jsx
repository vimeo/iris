import React from 'react';
import NotificationNeutral from './NotificationNeutral';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import Button from '../Button/Button';
import { TransitionGroup } from 'react-transition-group';
import { ParagraphMd, Header3 } from '../../../src/utility_components/Type/Type';

class NotificationNeutralDocs extends React.Component {
    // test handler for onDismiss event

    constructor(props) {
        super(props);
        this.state = { showNotification: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ showNotification: !this.state.showNotification });

    }

    render() {
        const DismissableNotification = (
               <NotificationNeutral
                    onDismiss={this.handleClick}
                >
                    <ParagraphMd>This component is a neutral notification. I am dismissable. I have a click handler function for onDismiss as well (look at the console!).</ParagraphMd>
                </NotificationNeutral>
        );

        return (
            <div>
                <ParagraphMd>The Neutral Notification is used for most message types.</ParagraphMd>
                <Header3>Animating the Notification Dismissal</Header3>
                <ParagraphMd>If you are making the notification dismissable by passing a function to <code>onDismiss</code>, be sure to wrap the notification in the `TransitionGroup` component, provided by importing `react-transition-group`</ParagraphMd>

                <div data-code>
                    <TransitionGroup>
                        {this.state.showNotification ? DismissableNotification : null}
                    </TransitionGroup>
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
const DismissableNotification = (
               <NotificationNeutral
                    onDismiss={this.handleClick}
                >
                    <p>This component is a neutral notification. I am dismissable. I have a click handler function for onDismiss as well (look at the console!).</p>
                </NotificationNeutral>
        );
<TransitionGroup>
            {this.state.showNotification ? DismissableNotification : null}
</TransitionGroup>
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
