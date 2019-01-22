import React, { SFC } from 'react';
import { CopyFieldProps, CopyButtonProps } from './CopyFieldTypes';
import ClipboardIcon from '../Icons/clipboard.svg';
import { withCopyAbility } from '../withCopyAbility/withCopyAbility';
import { InputText } from '../InputText/InputText';
import { ButtonInlineInputText } from '../ButtonInlineInputText/ButtonInlineInputText';
import { fnGuard } from '../Utils/fnGuard';

const CopyButton = withCopyAbility<CopyButtonProps>(ButtonInlineInputText);

export const CopyField: SFC<CopyFieldProps> = ({
    buttonFormat = 'strong',
    id,
    onCopy,
    size = 'md',
    stringToCopy,
    successMessage,
    tooltipPosition = 'left',
    tooltipString,
    ...props
}) => (
    <InputText
        {...props}
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
                size={size}
                stringToCopy={stringToCopy}
                successMessage={successMessage}
                tooltipPosition={tooltipPosition}
                tooltipText={tooltipString}
                onCopy={(id: string, onCopy: () => void) =>
                    document.getElementById(id) && fnGuard(onCopy)
                }
            />
        }
    />
);
