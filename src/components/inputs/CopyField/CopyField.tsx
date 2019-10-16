import React, { useState, ClipboardEventHandler } from 'react';
import { CopyFieldProps } from './CopyFieldTypes';
import { Clipboard } from '../../../icons';
import { InputText } from '../InputText/InputText';
import { ButtonInlineInputText } from '../../buttons/ButtonInlineInputText/ButtonInlineInputText';
import copy from 'copy-to-clipboard';
import { Notification } from '../../informational/Notification/Notification';
import { withDeprecateProps } from '../../../utils';

export const CopyField = withDeprecateProps<CopyFieldProps>(
  {
    buttonFormat:
      '`buttonFormat` is deprecated and will no longer be available in Iris 8. Use `format` (same functionality) instead.',
  },
  ({
    buttonFormat,
    children = <Clipboard />,
    format = 'strong',
    id,
    onCopy,
    size = 'md',
    stringToCopy,
    successMessage,
    tooltipPosition = 'left',
    tooltipString,
    ...props
  }) => {
    if (buttonFormat) {
      format = buttonFormat;
    }

    const [copied, setCopied] = useClipboard(stringToCopy, onCopy);

    return (
      <InputText
        {...props}
        id={id}
        readOnly
        size={size}
        value={stringToCopy}
        inlineButton={
          <>
            <CopyButton
              format={format}
              onClick={setCopied}
              size={size}
              stringToCopy={stringToCopy}
              successMessage={successMessage}
              tooltipPosition={tooltipPosition}
              tooltipText={tooltipString}
            >
              {children}
            </CopyButton>
            <Notification
              showing={copied as boolean}
              content={successMessage}
            ></Notification>
          </>
        }
      />
    );
  },
);

function useClipboard(text: string, onCopy?: ClipboardEventHandler) {
  const [copied, setCopied] = useState(false);

  return [
    copied,
    event => {
      const didCopy = copy(text);
      setCopied(didCopy);
      if (onCopy) {
        onCopy(event);
      }
    },
  ];
}

const CopyButton = props => <ButtonInlineInputText {...props} />;
