import React from 'react';
import styled from 'styled-components';
import { findDOMNode } from 'react-dom';

import { CopyFieldProps } from './CopyFieldTypes';

// @ts-ignore
import ClipboardIcon from '../icons/clipboard.svg';
import withCopyAbility from '../withCopyAbility/withCopyAbility';
import InputText from '../InputText/InputText';
import ButtonInlineInputText from '../ButtonInlineInputText/ButtonInlineInputText';

const CopyFieldStyled = styled.div`
    label,
    input {
        cursor: pointer;
    }
`;

class CopyField extends React.Component<CopyFieldProps> {
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
            buttonFormat = 'strong',
            id,
            onCopy,
            size = 'md',
            successMessage,
            stringToCopy,
            tooltipPosition = 'left',
            tooltipString,
            ...filteredProps
        } = this.props;

        const CopyButton = withCopyAbility(ButtonInlineInputText) as any;

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
            <CopyFieldStyled>
                <InputText
                    {...filteredProps}
                    id={id}
                    inlineButton={ButtonComponent}
                    isInline
                    size={size}
                    value={stringToCopy}
                    onClick={this._handleFieldClick}
                    readOnly
                />
            </CopyFieldStyled>
        );
    }
}

export default CopyField;
