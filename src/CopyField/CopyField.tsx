import React, { useState, ClipboardEventHandler } from 'react';
import { CopyFieldProps } from './CopyFieldTypes';
import { Clipboard } from '../Icons';
import { InputText } from '../InputText/InputText';
import { ButtonInlineInputText } from '../ButtonInlineInputText/ButtonInlineInputText';
import copy from 'copy-to-clipboard';
import { Toastification } from '../Toastification/Toastification';
import { withDeprecateProps } from '../Utils/Deprecated';

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
            <Toastification isShowing={copied as boolean}>
              {successMessage}
            </Toastification>
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
