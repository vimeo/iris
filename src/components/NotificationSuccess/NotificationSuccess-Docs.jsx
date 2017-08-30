import React from 'react';
import NotificationSuccess from './NotificationSuccess';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import Button from '../Button/Button';
import SlideUpDown from '../../animations/SlideUpDown/SlideUpDown';
import { ParagraphMd } from '../../../src/utility_components/Type/Type';

class NotificationSuccessDocs extends React.Component {
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
                <ParagraphMd>The Success Notification is used to let the user know that they have been successful in their activity.</ParagraphMd>
                <ParagraphMd>If the notification can be dismissed, Animation should be acheived by the SlideUpDown component. <a href="/pattern/Animation/SlideUpDownAnimation">See documentation.</a></ParagraphMd>
                <div data-code>
                    <SlideUpDown
                        isHidden={this.state.hideNotification}
                    >
                        <NotificationSuccess
                                onDismiss={this.handleClick}
                        >
                                <ParagraphMd>This component is a Success notification. I am dismissable. I have a click handler function for onDismiss as well (look at the console!).</ParagraphMd>
                        </NotificationSuccess>
                    </SlideUpDown>
                    <Button format="secondaryOutline" size="xs" onClick={this.handleClick}>Toggle Notifcation</Button>
                    <NotificationSuccess hasIcon={false}>
                        <ParagraphMd>This is a Success notification without an icon.  I am  NOT dismissable.</ParagraphMd>
                    </NotificationSuccess>
                    <NotificationSuccess
                        headerText="Notification With Header"
                    >
                        <ParagraphMd>Twas brillig, and the slithy toves. Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.</ParagraphMd>
                    </NotificationSuccess>
                </div>

                <ExampleSource>
                    {`
<SlideUpDown
    isHidden={this.state.hideNotification}
>
    <NotificationSuccess
            onDismiss={this.handleClick}
        >
            <ParagraphMd>This component is a Success notification. I am dismissable. I have a click handler function for onDismiss as well (look at the console!).</ParagraphMd>
        </NotificationSuccess>
</SlideUpDown>
<Button format="secondaryOutline" size="xs" onClick={this.handleClick}>Toggle Notifcation</Button>
<NotificationSuccess hasIcon={false}>
    <ParagraphMd>This is a Success notification without an icon.  I am  NOT dismissable.</ParagraphMd>
</NotificationSuccess>
<NotificationSuccess
headerText="Notification With Header"
>
    <ParagraphMd>Twas brillig, and the slithy toves. Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.</ParagraphMd>
</NotificationSuccess>  
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default NotificationSuccessDocs;
