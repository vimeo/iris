import React, {
  useRef,
  useState,
  useLayoutEffect,
  ReactNode,
  ClipboardEventHandler,
} from 'react';

import { InnerButton } from '../InnerButton';
import { Input } from './Input';

import { Notification } from '../../info/Notification/Notification';
import { Clipboard } from '../../../icons';
import { withIris, IrisInputProps, geometry } from '../../../utils';

export const CopyField = withIris<HTMLInputElement, Props>(
  CopyFieldComponent,
);

type Props = IrisInputProps<{
  /**
   * The format of the copy button.
   *
   * [default = 'primary']
   */
  format?: 'primary' | 'alternative';
  label?: ReactNode;
  /**
   * The message to display when string is copied.
   */
  messages: { success: string };
  onCopy?: ClipboardEventHandler;
  /**
   * [default = 'md']
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * [default = 'basic']
   */
  variant?: 'minimal' | 'basic';
}>;

function CopyFieldComponent({
  children = <Clipboard />,
  format = 'primary',
  forwardRef,
  label,
  messages,
  onCopy,
  size = 'md',
  variant = 'basic',
  ...props
}: Props) {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);
  const [height, setHeight] = useState(0);

  function doCopy(e) {
    if (document && !copied) {
      ref.current.select();
      document.execCommand('copy');
      onCopy && onCopy(e);
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    }
  }

  useLayoutEffect(() => setHeight(geometry(ref).height), []);

  return (
    <>
      <Input {...props} size={size} ref={ref} label={label} readOnly>
        <InnerButton
          format={format}
          variant={variant}
          label={label}
          size={size}
          height={height}
          onClick={doCopy}
        >
          {children}
        </InnerButton>
      </Input>
      <Notification
        showing={copied as boolean}
        content={messages.success}
      />
    </>
  );
}
