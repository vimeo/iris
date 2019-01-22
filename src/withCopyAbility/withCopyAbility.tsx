import React, {
    Component,
    ComponentType,
    ReactNode,
    MouseEventHandler,
} from 'react';
import createRef from 'create-react-ref/lib/createRef';
import { Toastification } from '../Toastification/Toastification';
import Clipboard from 'clipboard';
import { fnGuard } from '../Utils/fnGuard';

interface Props {
    onCopy?: (...any) => void;
    stringToCopy: string;
    successMessage: string | ReactNode;
    ref?: HTMLElement;
}

const newClipboard = (ref, cb) => ref && new Clipboard(ref).on('success', cb);
const destroy = clipboard => {
    clipboard.destroy();
    return true;
};

interface State {
    showNotice: boolean;
}
export const withCopyAbility = <P extends {}>(
    WrappedComponent: ComponentType<{
        onClick?: MouseEventHandler<HTMLElement>;
        innerRef?: (HTMLElement) => HTMLElement;
    }>,
) =>
    class extends Component<P & Props, State> {
        readonly state: State = { showNotice: false };
        clipboard: Clipboard;
        ref = createRef();

        componentDidMount = () => this.init();
        componentDidUpdate = () => destroy(this.clipboard) && this.init();
        componentWillUnmount = () => destroy(this.clipboard);

        showNotice = () => this.setState(shown);
        resetNotice = () => this.setState(hidden);

        handleClick = () => fnGuard(this.props, 'onCopy');

        init = () => (this.clipboard = newClipboard(this.ref, this.showNotice));

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
                        onClick={this.handleClick}
                        data-clipboard-trigger
                        data-clipboard-text={stringToCopy}
                        innerRef={(el: HTMLElement) => (this.ref = el)}
                    />
                    <Toastification
                        isShowing={this.state.showNotice}
                        onComplete={this.resetNotice}
                    >
                        {successMessage}
                    </Toastification>
                </div>
            );
        }
    };

const shown = { showNotice: true };
const hidden = { showNotice: false };
