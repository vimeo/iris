import React, { cloneElement, useMemo } from 'react';
import {
  generateUID,
  IrisInputProps,
  withIris,
} from '../../../utils';
import { validate, MarkInputElement } from '../Shared';

export const RadioSet = withIris<HTMLDivElement, Props>(
  RadioSetComponent,
);

interface Props {
  children: MarkInputElement[];
  defaultValue?: string | string[] | number | boolean;
}

function RadioSetComponent({
  children,
  defaultValue,
  forwardRef,
  label,
  ...props
}: IrisInputProps<Props>) {
  const UID = useMemo(() => generateUID(), []);
  const UIDs = useMemo(() => children.map(() => generateUID()), [
    children,
  ]);

  if (!validate(children, 'radio')) return null;

  return (
    <div ref={forwardRef} {...props}>
      {children.map((child, i) =>
        cloneElement(child, {
          id: `radio-${i}-${UIDs[i]}`,
          name: UID,
        }),
      )}
    </div>
  );
}
