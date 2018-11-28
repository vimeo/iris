import React, { SFC } from 'react';
import { CopyFieldProps, CopyButtonProps } from './CopyFieldTypes';
import ClipboardIcon from '../icons/clipboard.svg';
import withCopyAbility from '../withCopyAbility/withCopyAbility';
import { InputText } from '../InputText/';
import ButtonInlineInputText from '../ButtonInlineInputText/ButtonInlineInputText';

const CopyButton = withCopyAbility<CopyButtonProps>(ButtonInlineInputText);

const typeErr = err => {
    throw new TypeError(err);
};

const selectEl = el =>
    el !== null && el instanceof HTMLInputElement
        ? el.select()
        : typeErr(`Expected ${el.id} to be of type HTMLInputElement.`);

const copySelect = (id: string, onCopy: () => void) => {
    const el = document.getElementById(id);
    selectEl(el);
    onCopy();
};

const CopyField: SFC<CopyFieldProps> = ({
    buttonFormat = 'strong',
    id,
    onCopy,
    size = 'md',
    stringToCopy,
    successMessage,
    tooltipPosition = 'left',
    tooltipString,
    ...filteredProps
}) => (
    <InputText
        {...filteredProps}
        id={id}
        isInline
        readOnly
        size={size}
        value={stringToCopy}
        inlineButton={
            <CopyButton
                data-button-trigger
                format={buttonFormat}
                icon={<ClipboardIcon />}
                onCopy={() => copySelect(id, onCopy)}
                size={size}
                stringToCopy={stringToCopy}
                successMessage={successMessage}
                tooltipPosition={tooltipPosition}
                tooltipText={tooltipString}
            />
        }
    />
);

export default CopyField;
