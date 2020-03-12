import React, { useState, cloneElement, useMemo } from 'react';

import { Checkbox } from './Checkbox';
import { validate } from '../Shared';

import { Props } from './Checkbox.types';
import { generateUID, withIris } from '../../../utils';

export const CheckboxSet = withIris<HTMLDivElement, Props>(
  CheckboxSetComponent,
);

function CheckboxSetComponent({
  children,
  coupled,
  disabled,
  forwardRef,
  messages,
  status,
  theme,
  toggled,
  ...props
}: Props) {
  const UID = useMemo(() => generateUID(), []);
  const UIDs = useMemo(() => children.map(() => generateUID()), [
    children,
  ]);

  const all = boolean =>
    coupled
      ? children.map(() => boolean)
      : [...children.map(() => boolean), boolean];

  const [checks, setChecks] = useState(all(false));

  if (!validate(children, 'checkbox')) return null;

  const allChecked = checks.every(check => check);
  const someChecked = !allChecked && checks.some(check => check);
  const parentChecked = toggled
    ? [...checks].pop()
    : allChecked || someChecked;

  const parentClick = () =>
    parentChecked
      ? setChecks(all(false))
      : coupled
      ? setChecks(all(true))
      : setChecks(toggle(children.length));

  return (
    <div ref={forwardRef}>
      <Checkbox
        checked={parentChecked}
        indeterminate={someChecked}
        onClick={parentClick}
        readOnly
        {...props}
      />
      {(!toggled || parentChecked) && (
        <div style={{ paddingLeft: '1rem' }}>
          {children.map((child, i) =>
            cloneElement(child, {
              checked: checks[i],
              key: i,
              id: `checkbox-${i}-${UIDs[i]}`,
              name: UID,
              value: UIDs[i],
              onClick: () => setChecks(toggle(i)),
              readOnly: true,
            }),
          )}
        </div>
      )}
    </div>
  );
}

const toggle = index => checked =>
  checked.map((val, i) => (index === i ? !val : val));
