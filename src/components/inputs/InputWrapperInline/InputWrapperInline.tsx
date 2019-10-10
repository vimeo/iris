import React, { ReactNode, SFC } from 'react';
import { InputMessageArea } from '../InputMessageArea/InputMessageArea';

interface Props {
  children: ReactNode;
  className?: string;
  errorMsg?: ReactNode;
  helperMsg?: ReactNode;
  theme: 'default' | 'dark';
}

export const InputWrapperInline: SFC<Props> = ({
  children,
  className,
  errorMsg,
  helperMsg,
  theme,
  ...props
}) => (
  <div className={className} {...props}>
    {children}
    <InputMessageArea
      errorMsg={errorMsg}
      helperMsg={helperMsg}
      theme={theme}
    />
  </div>
);
