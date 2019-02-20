import React, { SFC, useState } from 'react';
import { CopyFieldProps } from './CopyFieldTypes';
import { Clipboard } from '../Icons';
import { InputText } from '../InputText/InputText';
import { ButtonInlineInputText } from '../ButtonInlineInputText/ButtonInlineInputText';
import copy from 'copy-to-clipboard';
import { Toastification } from '../Toastification/Toastification';

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
}) => {
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
            data-button-trigger
            format={buttonFormat}
            icon={<Clipboard />}
            onClick={setCopied}
            size={size}
            stringToCopy={stringToCopy}
            successMessage={successMessage}
            tooltipPosition={tooltipPosition}
            tooltipText={tooltipString}
          />
          <Toastification isShowing={copied as boolean}>
            {successMessage}
          </Toastification>
        </>
      }
    />
  );
};

function useClipboard(text, onCopy) {
  const [copied, setCopied] = useState(false);

  return [
    copied,
    () => {
      const didCopy = copy(text);
      setCopied(didCopy);
      onCopy();
    },
  ];
}

const CopyButton = props => <ButtonInlineInputText {...props} />;
