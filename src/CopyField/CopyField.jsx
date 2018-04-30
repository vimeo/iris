// @flow
import React from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import styles from './CopyField.scss';
import ClipboardIcon from '../icons/clipboard.svg';
import withCopyAbility from '../withCopyAbility/withCopyAbility';
// $FlowFixMe
import InputText from '../InputText/InputText';
import ButtonInlineInputText from '../ButtonInlineInputText/ButtonInlineInputText';

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
    tooltipPosition: 'top' | 'right' | 'bottom' | 'left',
};

class CopyField extends React.Component {
    static defaultProps = {
        buttonFormat: 'strong',
    };

    props: Props;

    _handleFieldClick = () => {
        const el = findDOMNode(this);
        const TriggerTarget =
            el instanceof HTMLElement &&
            el.querySelector('[data-button-trigger]');
        if (TriggerTarget instanceof HTMLElement) {
            TriggerTarget.click();
        }
    };

    render() {
        const {
            buttonFormat,
            className,
            id,
            onCopy,
            size,
            successMessage,
            stringToCopy,
            tooltipPosition = 'left',
            tooltipString,
            ...filteredProps
        } = this.props;

        // className builder
        const componentClass = classNames(styles.CopyField, className);

        const CopyButton = withCopyAbility(ButtonInlineInputText);

        const ButtonComponent = (
            <CopyButton
                data-button-trigger
                icon={<ClipboardIcon />}
                format={buttonFormat}
                size={size}
                successMessage={successMessage}
                stringToCopy={stringToCopy}
                tooltipText={tooltipString}
                tooltipPosition={tooltipPosition}
                onCopy={onCopy}
            />
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
