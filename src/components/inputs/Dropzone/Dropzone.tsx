import React, { DragEvent, useState } from 'react';
import styled, { css } from 'styled-components';
import { rem, rgba } from 'polished';

import { DropChangeEvent, Props } from './Dropzone.types';

import { stopPrevent, useForwardRef, withIris } from '../../utils';

export const Dropzone = withIris<HTMLInputElement, Props>(
  DropzoneComponent
);

function DropzoneComponent({
  accept,
  active,
  children,
  defaultValue,
  disabled,
  format = 'primary',
  forwardRef,
  multiple,
  onChange,
  ...props
}: Props) {
  const ref = useForwardRef(forwardRef);
  const [drag, dragSet] = useState(false);

  const onDragOver = stopPrevent<DragEvent>(() => dragSet(true));
  const onDragLeave = stopPrevent<DragEvent>(() => dragSet(false));

  const onDrop = stopPrevent<DragEvent>(
    (event: DragEvent<HTMLDivElement> & DropChangeEvent) => {
      onChange && onChange(event);
      dragSet(false);
    }
  );

  return (
    <DropzoneContainer
      drag={active || drag}
      format={format}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      {...props}
    >
      <input
        accept={accept}
        disabled={disabled}
        multiple={multiple}
        onChange={onChange}
        ref={ref}
        type="file"
        style={{ display: 'none' }}
      />
      {typeof children === 'function'
        ? children(active || drag)
        : children}
    </DropzoneContainer>
  );
}

const DropzoneContainer = styled.div<{
  drag: boolean;
  format?: 'primary' | 'secondary';
}>`
  width: 100%;
  min-height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${rem(10)};
  border: ${rem(3)} solid ${(p) => p.theme.item.bg2};
  will-change: transform;
  transition: background 100ms ease-in-out;
  ${formats};
`;

function formats({ drag, format, theme }) {
  if (!drag) return;

  switch (format) {
    case 'primary':
      return css`
        background: ${rgba(theme.formats.primary, 0.2)};
        border: ${rem(3)} dashed ${theme.formats.primary};
      `;
    case 'secondary':
      // note: if we're using a 'secondary' format prop, we should
      // be following a consistent pattern with other components
      //
      // return css`
      //   background: ${rgba(theme.formats.secondary, 0.2)};
      //   border: ${rem(3)} dashed ${theme.formats.secondary};
      // `;
      return css`
        background: ${rgba(theme.formats.soft, 0.1)};
        border: ${rem(3)} dashed ${rgba(theme.formats.soft, 0.5)};
      `;
  }
}
