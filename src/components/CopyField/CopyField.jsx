// @flow
import React from 'react';
import { findDOMNode } from 'react-dom';
import Toastification from '../Toastification/Toastification';
import classNames from 'classnames';
import Clipboard from 'clipboard';
import styles from './CopyField.scss';
import ClipboardIcon from '../../globals/svg/clipboard.svg';
import InputText from '../InputText/InputText';
import ButtonInlineInputText from '../ButtonInlineInputText/ButtonInlineInputText';
import TooltipOverlay from '../TooltipOverlay/TooltipOverlay';

const displayName = 'CopyField';

type Props = {
    buttonFormat?: 'subtle' | 'neutral' | 'strong',
    className?: string,
    id?: string,
    label: string,
    isFluid?: boolean,
    onCopy?: Function,
    size: 'md' | 'lg',
    successMessage: string,
    stringToCopy: string,
    tooltipString: string,
};

class CopyField extends React.Component {
    static defaultProps = {
        buttonFormat: 'strong',
    };

    constructor(props: Props) {
        super(props);
        this.fieldId = props.id || 'CopyToClipboardField';
        this.fieldWrapperId = `${this.fieldId}Wrapper`;
        this.state = {
            showNotice: false,
        };
    }

    state: Object;

    componentDidMount() {
        const el = findDOMNode(this);
        if (el instanceof HTMLElement) {
            this.TriggerButton = el.querySelector('[data-clipboard-trigger]');
            this._initializeClipBoard();
        }
    }


    componentDidUpdate() {
        this._destroyClipBoard();
        this._initializeClipBoard();
    }

    componentWillUnmount() {
        this._destroyClipBoard();
    }

    ClipBoardInstance: Object;
    fieldId: string;
    fieldWrapperId: string;
    TriggerButton: HTMLElement | null;
    props: Props;

    _destroyClipBoard = () => {
        this.ClipBoardInstance.destroy();
    }

    _initializeClipBoard = () => {
        const button = findDOMNode(this.TriggerButton);
        const thisComponent = this;
        this.ClipBoardInstance = new Clipboard(button);

        this.ClipBoardInstance.on('success', function(e) {
            thisComponent._showNotice();
        });
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

    _handleFieldClick = () =>{
        if (this.TriggerButton instanceof HTMLElement) {
            this.TriggerButton.click();
        }
    }

    render() {
        const {
            buttonFormat,
            className,
            tooltipString,
            id, // eslint-disable-line no-unused-vars
            onCopy, // eslint-disable-line no-unused-vars
            size,
            successMessage,
            stringToCopy,
            ...filteredProps
        } = this.props;

        // className builder
        const componentClass = classNames(
            styles.CopyField,
            className
        );

        const ButtonComponent = (
            <TooltipOverlay
                tooltipText={tooltipString}
                attachment = "left"
                tooltipOptions = {{
                    'offset': '48px 0',
                }}
            >
                <ButtonInlineInputText
                    icon = {<ClipboardIcon />}
                    format={buttonFormat}
                    size={size}
                    onClick={this._handleClick}
                    data-clipboard-trigger
                    data-clipboard-target={`#${this.fieldId}`}
                />
            </TooltipOverlay>
        );

        return (
            <div>
                <InputText
                    {...filteredProps}
                    id={this.fieldId}
                    inlineButton={ButtonComponent}
                    isInline
                    size={size}
                    className={componentClass}
                    value={stringToCopy}
                    onClick={this._handleFieldClick}
                    readOnly
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
}

CopyField.displayName = displayName;

export default CopyField;
