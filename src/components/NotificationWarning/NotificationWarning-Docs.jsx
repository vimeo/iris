import React from 'react';
import NotificationWarning from './NotificationWarning';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import Button from '../Button/Button';
import { TransitionGroup } from 'react-transition-group';
import { ParagraphMd, Header3 } from '../../../src/utility_components/Type/Type';

class NotificationWarningDocs extends React.Component {
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
               <NotificationWarning
                    onDismiss={this.handleClick}
                >
                    <p>This component is a Warning notification. I am dismissable. I have a click handler function for onDismiss as well (look at the console!).</p>
                </NotificationWarning>
        );

        return (
            <div>
                <ParagraphMd>The Warning Notification is used for most message types.</ParagraphMd>
                <Header3>Animating the Notification Dismissal</Header3>
                <ParagraphMd>See Neutral Notification for instructions</ParagraphMd>
                <div data-code>
                    <TransitionGroup>
                                {this.state.showNotification ? DismissableNotification : null}
                    </TransitionGroup>
                    <Button format="secondaryOutline" size="xs" onClick={this.handleClick}>Toggle Notifcation</Button>
                    <NotificationWarning hasIcon={false}>
                        <p>This is a Warning notification without an icon.  I am  NOT dismissable.</p>
                    </NotificationWarning>
                </div>

                <ExampleSource>
                    {`
const DismissableNotification = (
    <NotificationWarning
            onDismiss={this.handleClick}
        >
            <p>This component is a Warning notification. I am dismissable. I have a click handler function for onDismiss as well (look at the console!).</p>
        </NotificationWarning>
);

<TransitionGroup>
    {this.state.showNotification ? DismissableNotification : null}
</TransitionGroup>

<NotificationWarning hasIcon={false}>
    <p>This is a Warning notification without an icon.  I am  NOT dismissable.</p>
</NotificationWarning>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default NotificationWarningDocs;
