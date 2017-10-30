// @flow
import React from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import styles from './CopyField.scss';
import ClipboardIcon from '../../globals/svg/clipboard.svg';
import withCopyAbility from '../withCopyAbility/withCopyAbility';
import InputText from '../InputText/InputText';
import ButtonInlineInputText from '../ButtonInlineInputText/ButtonInlineInputText';
import TooltipOverlay from '../TooltipOverlay/TooltipOverlay';

const displayName = 'CopyField';

type Props = {
    buttonFormat?: 'subtle' | 'neutral' | 'strong',
    className?: string,
    id: string,
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

    props: Props;

    _handleFieldClick = () =>{
        const el = findDOMNode(this);
        const TriggerTarget = el instanceof HTMLElement && el.querySelector('[data-button-trigger]');
        if (TriggerTarget instanceof HTMLElement) {
            TriggerTarget.click();
        }
    }

    render() {
        const {
            buttonFormat,
            className,
            tooltipString,
            id,
            onCopy,
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

        const CopyButton = withCopyAbility(ButtonInlineInputText);

        const ButtonComponent = (
            <TooltipOverlay
                tooltipText={tooltipString}
                attachment = "left"
                tooltipOptions = {{
                    'offset': '48px 0',
                }}
            >
                <CopyButton
                    data-button-trigger
                    icon = {<ClipboardIcon />}
                    format={buttonFormat}
                    size={size}
                    successMessage={successMessage}
                    stringToCopy={stringToCopy}
                    onCopy={onCopy}
                />
            </TooltipOverlay>
        );

        return (
                <InputText
                    {...filteredProps}
                    id={id}
                    inlineButton={ButtonComponent}
                    isInline
                    size={size}
                    className={componentClass}
                    value={stringToCopy}
                    onClick={this._handleFieldClick}
                    readOnly
                />
        );

    }
}

CopyField.displayName = displayName;

export default CopyField;
