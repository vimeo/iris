// @flow
/* global ReactClass*/
import React from 'react';
import { findDOMNode } from 'react-dom';
import Toastification from '../Toastification/Toastification';

import Clipboard from 'clipboard';


type Props = {
    onCopy?: Function,
    stringToCopy: string,
    successMessage: string,
};

function withCopyAbility(WrappedComponent: ReactClass<any>) {

    return class extends React.Component {

        state: Object;

        componentWillMount() {
            this.state = {
                showNotice: false,
            };
        }

        componentDidMount() {
            this._initializeClipBoard();
        }


        componentDidUpdate() {
            this._destroyClipBoard();
            this._initializeClipBoard();
        }

        componentWillUnmount() {
            this._destroyClipBoard();
        }

        ClipBoardInstance: Object;
        props: Props;

        _destroyClipBoard = () => {
            this.ClipBoardInstance.destroy();
        }

        _initializeClipBoard = () => {
            const el = findDOMNode(this);
            const triggerEl = el instanceof HTMLElement && el.querySelector('[data-clipboard-trigger]');

            if (triggerEl) {
                this.ClipBoardInstance = new Clipboard(triggerEl);

                this.ClipBoardInstance.on('success', (e) => this._showNotice());
            }

        }

        _showNotice = () => {
            if (!this.state.showNotice) {
                this.setState({
                    showNotice: true,
                });
            }
        }

        _resetNotice = () => {
            this.setState({
                showNotice: false,
            });
        }

        _handleClick = (e: Event) =>{
            if (typeof this.props.onCopy === 'function') {
                this.props.onCopy();
            }
        }
        render() {
            const {
                onCopy, // eslint-disable-line no-unused-vars
                successMessage,
                stringToCopy,
                ...filteredProps
            } = this.props;

            return (
                <div>
                    <WrappedComponent
                        {...filteredProps}
                        onClick={this._handleClick}
                        data-clipboard-trigger
                        data-clipboard-text={stringToCopy}
                    />
                    <Toastification
                        isShowing={this.state.showNotice}
                        onComplete={this._resetNotice}
                    >
                        {successMessage}
                    </Toastification>
                </div>
            );
        }
    };
}


export default withCopyAbility;
