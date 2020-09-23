import React, { cloneElement, useMemo, useState } from 'react';

import { validate, MarkInputElement } from '../Shared';

import {
  generateUID,
  IrisInputProps,
  withIris,
} from '../../../utils';

export const RadioSet = withIris<HTMLDivElement, Props>(
  RadioSetComponent
);

interface Props {
  children: MarkInputElement[];
  defaultValue?: string | string[] | number | boolean;
}

function RadioSetComponent({
  children,
  defaultValue,
  forwardRef,
  onChange: doChange,
  label,
  ...props
}: IrisInputProps<Props>) {
  const UID = useMemo(() => generateUID(), []);
  const UIDs = useMemo(() => children.map(() => generateUID()), [
    children,
  ]);

  const [checkedIndex, checkedIndexSet] = useState(null);

  if (!validate(children, 'radio')) return null;

  function onChange(event) {
    if (event.target.checked) {
      const i = UIDs.indexOf(event.target.id.slice(-6));
      checkedIndexSet(i);
    }

    doChange && doChange(event);
  }

  function cloneChildren(child, i) {
    const checked = checkedIndex === i;
    const defaultChecked = defaultValue === child.props?.value;
    const id = `radio-${i}-${UIDs[i]}`;
    const key = id;
    const name = UID;

    return cloneElement(child, {
      checked,
      defaultChecked,
      id,
      key,
      name,
      onChange,
    });
  }

  return (
    <div ref={forwardRef} {...props}>
      {children.map(cloneChildren)}
    </div>
  );
}
