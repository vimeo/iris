import React, {
    Component,
    ComponentType,
    ReactNode,
    MouseEventHandler,
} from 'react';
import { findDOMNode } from 'react-dom';
import { Toastification } from '../Toastification/Toastification';

import Clipboard from 'clipboard';

interface Props {
    onCopy?: () => void;
    stringToCopy: string;
    successMessage: string | ReactNode;
}

const initialState = { showNotice: false };
type State = Readonly<typeof initialState>;

export const withCopyAbility = <P extends {}>(
    WrappedComponent: ComponentType<
        P & { onClick?: MouseEventHandler<HTMLElement> }
    >,
) =>
    class extends Component<P & Props> {
        readonly state: State = initialState;

        clipboard: Clipboard;

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

        _destroyClipBoard = () => {
            this.clipboard.destroy();
        };

        _initializeClipBoard = () => {
            const el = findDOMNode(this);
            const triggerEl =
                el instanceof HTMLElement &&
                el.querySelector('[data-clipboard-trigger]');

            if (triggerEl) {
                this.clipboard = new Clipboard(triggerEl);

                this.clipboard.on('success', () => {
                    this._showNotice();
                });
            }
        };

        _showNotice = () => {
            if (!this.state.showNotice) {
                this.setState({
                    showNotice: true,
                });
            }
        };

        _resetNotice = () => {
            this.setState({
                showNotice: false,
            });
        };

        _handleClick = () => {
            if (typeof this.props.onCopy === 'function') {
                this.props.onCopy();
            }
        };

        render() {
            const {
                onCopy,
                successMessage,
                stringToCopy,
                ...filteredProps
            } = this.props as Props;

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
