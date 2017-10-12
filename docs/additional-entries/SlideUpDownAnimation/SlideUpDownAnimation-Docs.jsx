import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import NotificationSuccess from '../../../src/NotificationSuccess/NotificationSuccess';
import Button from '../../../src/Button/Button';
import SlideUpDown from '../../../src/SlideUpDown/SlideUpDown';
import { ParagraphMd, Header3 } from '../../../src/Type';



class SlideUpDownAnimationDocs extends React.Component {
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
                <ParagraphMd>The SlideUpDown animation is acheived by wrapping a component in the SlideUpDown animation component and using the boolean <code>isHidden</code> prop to control visibility of the component.</ParagraphMd>
                <div data-code>
                    <SlideUpDown
                        isHidden={this.state.hideNotification}
                    >
                        <NotificationSuccess
                                onDismiss={this.handleClick}
                        >
                                <p>This component is a Success notification. I am dismissable. I have a click handler function for onDismiss as well (look at the console!).</p>
                        </NotificationSuccess>
                    </SlideUpDown>
                    <Button format="secondaryOutline" size="xs" onClick={this.handleClick}>Toggle Notifcation</Button>
                </div>

                <ExampleSource>
                    {`
<SlideUpDown
    isHidden={this.state.hideNotification}
>
    <NotificationSuccess
            onDismiss={this.handleClick}
    >
            <p>This component is a Success notification. I am dismissable. I have a click handler function for onDismiss as well (look at the console!).</p>
    </NotificationSuccess>
</SlideUpDown>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default SlideUpDownAnimationDocs;
