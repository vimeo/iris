import React from 'react';
import {
    Button,
    NotificationNeutral,
    ParagraphMd,
    SlideUpDown,
} from '../index';
import ExampleSource from '../../docs/layout/ExampleSource';

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
                            <ParagraphMd>This component is a neutral notification. I am dismissable. I have a click handler function for onDismiss as well (look at the console!).</ParagraphMd>
                        </NotificationNeutral>
                    </SlideUpDown>
                    <Button format="secondaryOutline" size="xs" onClick={this.handleClick}>Toggle Notifcation</Button>
                    <NotificationNeutral hasIcon={false}>
                        <ParagraphMd>This is a neutral notification without an icon.  I am  NOT dismissable.</ParagraphMd>
                    </NotificationNeutral>
                    <NotificationNeutral>
                        <ParagraphMd>In order to make this a little longer I'm quoting the Jabberwockky:</ParagraphMd>
                        <ParagraphMd>Twas brillig, and the slithy toves. Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.</ParagraphMd>
                    </NotificationNeutral>
                    <NotificationNeutral
                        headerText="Notification With Header"
                    >
                        <ParagraphMd>Twas brillig, and the slithy toves. Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.</ParagraphMd>
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
    <ParagraphMd>This is a neutral notification without an icon.  I am  NOT dismissable.</ParagraphMd>
</NotificationNeutral>

<NotificationNeutral>
    <ParagraphMd>In order to make this a little longer I'm quoting the Jabberwockky:</ParagraphMd>
    <ParagraphMd>Twas brillig, and the slithy toves. Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.</ParagraphMd>
</NotificationNeutral>
<NotificationNeutral
headerText="Notification With Header"
>
    <ParagraphMd>Twas brillig, and the slithy toves. Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.</ParagraphMd>
</NotificationNeutral>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default NotificationNeutralDocs;
