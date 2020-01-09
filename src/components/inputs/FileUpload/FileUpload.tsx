import React, { useRef } from 'react';

import { Hidden } from './FileUpload.style';

import { withIris, IrisInputProps } from '../../../utils';

export const FileUpload = withIris<HTMLInputElement, Props>(
  FileUploadComponent,
);

type Props = IrisInputProps;

function FileUploadComponent({
  children,
  defaultValue,
  forwardRef,
  ...props
}: Props) {
  const ref = useRef(null);
  const onClick = () => ref.current && ref.current.click();

  return (
    <div
      onClick={onClick}
      ref={forwardRef}
      style={{ display: 'inline-flex' }}
      {...props}
    >
      <Hidden ref={ref} type="file"></Hidden>
      {children}
    </div>
  );
}
