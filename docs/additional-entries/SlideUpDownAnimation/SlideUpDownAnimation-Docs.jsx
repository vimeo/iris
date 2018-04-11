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
                <ParagraphMd>The component will only animate open on first mount if the <code>animateOpenOnMount</code> prop is passed.</ParagraphMd>
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
                    <SlideUpDown
                        animateOpenOnMount
                        isHidden={this.state.hideNotification}
                    >
                        <NotificationSuccess
                                onDismiss={this.handleClick}
                        >
                                <ParagraphMd>This component is a Success notification. I have <code>animateOpenOnMount</code> set to true. I am dismissable. I have a click handler function for onDismiss as well (look at the console!).</ParagraphMd>
                        </NotificationSuccess>
                    </SlideUpDown>
                    <Button format="secondaryOutline" size="xs" onClick={this.handleClick}>Toggle Notifcation</Button>
                </div>

                <ExampleSource>
                    {`
<SlideUpDown
    animateOpenOnMount={false}
    isHidden={this.state.hideNotification}
>
    <NotificationSuccess
            onDismiss={this.handleClick}
    >
            <ParagraphMd>This component is a Success notification. I am dismissable. I have a click handler function for onDismiss as well (look at the console!).</ParagraphMd>
    </NotificationSuccess>
</SlideUpDown>
<SlideUpDown
    isHidden={this.state.hideNotification}
>
    <NotificationSuccess
            onDismiss={this.handleClick}
    >
            <ParagraphMd>This component is a Success notification. I am dismissable. I have a click handler function for onDismiss as well (look at the console!).</ParagraphMd>
    </NotificationSuccess>
</SlideUpDown>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default SlideUpDownAnimationDocs;
