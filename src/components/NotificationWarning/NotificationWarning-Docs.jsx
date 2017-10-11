import React from 'react';
import NotificationWarning from './NotificationWarning';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import Button from '../Button/Button';
import SlideUpDown from '../SlideUpDown';
import { ParagraphMd } from '../Type';

class NotificationWarningDocs extends React.Component {
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
                <ParagraphMd>The Success Notification is used to let the user know that there has been an error or their attention is needed.</ParagraphMd>
                <ParagraphMd>If the notification can be dismissed, Animation should be acheived by the SlideUpDown component. <a href="/pattern/Animation/SlideUpDownAnimation">See documentation.</a></ParagraphMd>
                <div data-code>
                <SlideUpDown
                    isHidden={this.state.hideNotification}
                >
                    <NotificationWarning
                        onDismiss={this.handleClick}
                    >
                        <ParagraphMd>This component is a Warning notification. I am dismissable. I have a click handler function for onDismiss as well (look at the console!).</ParagraphMd>
                    </NotificationWarning>
                </SlideUpDown>
                    <Button format="secondaryOutline" size="xs" onClick={this.handleClick}>Toggle Notifcation</Button>
                    <NotificationWarning hasIcon={false}>
                        <ParagraphMd>This is a Warning notification without an icon.  I am  NOT dismissable.</ParagraphMd>
                    </NotificationWarning>
                    <NotificationWarning
                        headerText="Notification With Header"
                    >
                        <ParagraphMd>Twas brillig, and the slithy toves. Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.</ParagraphMd>
                    </NotificationWarning>
                </div>

                <ExampleSource>
                    {`
<SlideUpDown
    isHidden={this.state.hideNotification}
>
    <NotificationWarning
            onDismiss={this.handleClick}
        >
            <ParagraphMd>This component is a Warning notification. I am dismissable. I have a click handler function for onDismiss as well (look at the console!).</ParagraphMd>
        </NotificationWarning>
);

<NotificationWarning hasIcon={false}>
    <ParagraphMd>This is a Warning notification without an icon.  I am  NOT dismissable.</ParagraphMd>
</NotificationWarning>

<NotificationWarning hasIcon={false}>
    <ParagraphMd>This is a Warning notification without an icon.  I am  NOT dismissable.</ParagraphMd>
</NotificationWarning>
<NotificationWarning
headerText="Notification With Header"
>
    <ParagraphMd>Twas brillig, and the slithy toves. Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.</ParagraphMd>
</NotificationWarning>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default NotificationWarningDocs;
