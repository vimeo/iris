import React from 'react';
import NotificationSuccess from './NotificationSuccess';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import Button from '../Button/Button';
import { TransitionGroup } from 'react-transition-group';
import { ParagraphMd, Header3 } from '../../../src/utility_components/Type/Type';

class NotificationSuccessDocs extends React.Component {
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
               <NotificationSuccess
                    onDismiss={this.handleClick}
                >
                    <p>This component is a Success notification. I am dismissable. I have a click handler function for onDismiss as well (look at the console!).</p>
                </NotificationSuccess>
        );

        return (
            <div>
                <ParagraphMd>The Success Notification is used for most message types.</ParagraphMd>
                <Header3>Animating the Notification Dismissal</Header3>
                <ParagraphMd>See Neutral Notification for instructions</ParagraphMd>
                <div data-code>
                    <TransitionGroup>
                        {this.state.showNotification ? DismissableNotification : null}
                    </TransitionGroup>
                    <Button format="secondaryOutline" size="xs" onClick={this.handleClick}>Toggle Notifcation</Button>
                    <NotificationSuccess hasIcon={false}>
                        <p>This is a Success notification without an icon.  I am  NOT dismissable.</p>
                    </NotificationSuccess>
                </div>

                <ExampleSource>
                    {`
const DismissableNotification = (
    <NotificationSuccess
            onDismiss={this.handleClick}
        >
            <p>This component is a Success notification. I am dismissable. I have a click handler function for onDismiss as well (look at the console!).</p>
        </NotificationSuccess>
);

<TransitionGroup>
    {this.state.showNotification ? DismissableNotification : null}
</TransitionGroup>

<NotificationSuccess hasIcon={false}>
    <p>This is a Success notification without an icon.  I am  NOT dismissable.</p>
</NotificationSuccess>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default NotificationSuccessDocs;
