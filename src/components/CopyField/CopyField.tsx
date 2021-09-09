import React, {
  useRef,
  useState,
  useLayoutEffect,
  ReactNode,
  ClipboardEventHandler,
} from 'react';
import styled from 'styled-components';

import { InnerButton } from '../InnerButton';
import { Input } from '../Input/Input';

import { Notification } from '../Notification/Notification';
import { Clipboard } from '../../icons';
import { withIris, IrisInputProps, geometry } from '../../utils';

export const CopyField = withIris<HTMLInputElement, Props>(
  CopyFieldComponent
);

export type Props = IrisInputProps<{
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
  /**
   * Option to pass in a custom element to replace the content
   * of the copy button on the right side of the CopyField.
   *
   * The default is the Clipboard icon.
   */
  children?: ReactNode;
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

  useLayoutEffect(() => setHeight(geometry(ref.current).height), []);

  return (
    <>
      <Input {...props} size={size} ref={ref} label={label} readOnly>
        <InnerButtonStyled
          format={format}
          variant={variant}
          label={label}
          size={size}
          height={height}
          onClick={doCopy}>
          {children}
        </InnerButtonStyled>
      </Input>
      <Notification
        showing={copied as boolean}
        content={messages.success}
      />
    </>
  );
}

const InnerButtonStyled = styled(InnerButton)`
  & > button {
    padding: 0 0.5rem;
  }
`;
