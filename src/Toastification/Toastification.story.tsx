import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Toastification from './Toastification';
import Button from '../Button';

storiesOf('Notifications', module).add(
    'Toastification',
    () => <ToastificationDocs />,
    {
        info: {
            inline: true,
            propTables: [Toastification],
        },
        options: {
            name: 'Iris',
            url: '#',
        },
    },
);

class ToastificationDocs extends Component<any, any> {
    readonly state = {
        show: {},
        locked: false,
    };

    private showToast = id => () =>
        !this.state.locked && this.setState(show(id));

    private onComplete = id => () =>
        log(`toastification ${id} onComplete()`) && this.setState(hide(id));

    private demoAction = id => () =>
        alert(`I am a demo action for Toastification ${id}`);

    render() {
        return (
            <div>
                <Button onClick={this.showToast(1)}>
                    Show Toastification 1
                </Button>

                <Toastification
                    isShowing={this.state.show[1]}
                    onComplete={this.onComplete(1)}
                >
                    This is Toastification 1!
                </Toastification>

                <br />
                <br />

                <Button onClick={this.showToast(2)}>
                    Show Toastification 2
                </Button>

                <Toastification
                    format="warning"
                    isShowing={this.state.show[2]}
                    onComplete={this.onComplete(2)}
                    onActionClick={this.demoAction}
                    actionLabel="Undo"
                >
                    This is Toastification 2!
                </Toastification>
            </div>
        );
    }
}

const show = id => state => ({
    show: { ...state.show, [id]: true },
    locked: true,
});

const hide = id => state => ({
    show: { ...state.show, [id]: false },
    locked: false,
});

const log = str => {
    console.log(str);
    return true;
};
