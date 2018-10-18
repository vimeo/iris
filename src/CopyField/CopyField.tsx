import React, { SFC } from 'react';
import styled from 'styled-components';
import { CopyFieldProps, CopyButtonProps } from './CopyFieldTypes';
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

const CopyButton = withCopyAbility<CopyButtonProps>(ButtonInlineInputText);
const CopyInput = withCopyAbility<any>(InputText);

const CopyField: SFC<CopyFieldProps> = ({
    buttonFormat = 'strong',
    id,
    onCopy,
    size = 'md',
    successMessage,
    stringToCopy,
    tooltipPosition = 'left',
    tooltipString,
    ...filteredProps
}) => (
    <CopyFieldStyled>
        <CopyInput
            {...filteredProps}
            id={id}
            inlineButton={
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
            }
            isInline
            size={size}
            value={stringToCopy}
            successMessage={successMessage}
            stringToCopy={stringToCopy}
            readOnly
        />
    </CopyFieldStyled>
);

export default CopyField;
