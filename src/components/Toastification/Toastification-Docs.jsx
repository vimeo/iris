import React from 'react';
import Toastification from './Toastification';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd, Header3 } from '../../../src/utility_components/Type';
import NotificationNeutral from '../NotificationNeutral/NotificationNeutral';
import Button from '../Button/Button';

class ToastificationDocs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast1: false,
            showToast2: false,
            lockToasts: false,
        };
    }

    _showToast1 = () => {
        if (!this.state.lockToasts) {
            this.setState({ showToast1: true });
            this._lockToasts();
        }
    }

    _lockToasts = () => {
        this.setState({ lockToasts: true });
    }
    _unlockToasts = () => {
        this.setState({ lockToasts: false });
    }

    _onComplete1 = () => {
        console.log('toastification 1 fired onComplete()');
        this.setState({ showToast1: false });
        this. _unlockToasts();
    }

    _showToast2 = () => {
        if (!this.state.lockToasts) {
            this.setState({ showToast2: true });
            this._lockToasts();
        }
    }

    _onComplete2 = () => {
        console.log('toastification 2 fired onComplete()');
        this.setState({ showToast2: false });
        this. _unlockToasts();
    }

    _demoAction = () => {
        alert('I am a demo action for the Toastification'); // eslint-disable-line no-alert
    }

    render() {
        return (
            <div className="Pattern__docs">
            <ParagraphMd>Toastifications are temporary user notifications that are used to notifiy a user that an ansynchronus action has occured.</ParagraphMd>
            <ParagraphMd>Toastifications are shown and hidden with the <code>isShowing</code> prop. Once triggered into being shown by <code>isShowing = true</code> the component, the Toasifcation will hide itself (by changing its state and animating with CSS) in a fixed time frame.</ParagraphMd>
            <NotificationNeutral>
                <ParagraphMd>If you need to track when a toastification is done displaying, you can pass a callback function to <code>onComplete</code>. This should be used to ensure that multiple toastifications do not display at the same time. For example, this demo sets a state that prevents more toasts from opening when a toast opens up then unlocks it with the onComplete callback.</ParagraphMd>
            </NotificationNeutral>
                <div data-code>
                    <Button
                        onClick={this._showToast1}
                    >
                        Show Toastification 1
                    </Button>

                    <Toastification
                        isShowing={this.state.showToast1}
                        onComplete={this._onComplete1}
                    >
                        This is Toastification 1!
                    </Toastification>

                </div>

                <ExampleSource>
                    {`
<Toastification
    isShowing={this.state.showToast1}
    onComplete={this._onComplete1}
>
This is Toastification 1!
</Toastification>
                        `}
                    </ExampleSource>
                    <Header3>Toastifications with Actions and/or Warning Icon</Header3>
                    <ParagraphMd>Toastifications may have a action associated with them. To include an action, add a label string to the <code>actionLabel</code> prop and pass a callback function to the <code>onActionClick</code> prop. This will create an action link and also slow-down the duration of the toastification.</ParagraphMd>
                    <ParagraphMd>Passing <code>warning</code> to the <code>format</code> prop will make the notification include an icon to draw the user's attention</ParagraphMd>
                    <div data-code>
                        <Button
                            onClick={this._showToast2}
                        >
                            Show Toastification 2
                        </Button>

                        <Toastification
                            format="warning"
                            isShowing={this.state.showToast2}
                            onComplete={this._onComplete2}
                            onActionClick={this._demoAction}
                            actionLabel="Undo"
                        >
                            This is Toastification 2!
                        </Toastification>
                    </div>
                    <ExampleSource>
                    {`
<Toastification
    format="warning"
    isShowing={this.state.showToast2}
    onComplete={this._onComplete2}
    onActionClick={this._demoAction}
    actionLabel="Undo"
>
    This is Toastification 2!
</Toastification>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default ToastificationDocs;
