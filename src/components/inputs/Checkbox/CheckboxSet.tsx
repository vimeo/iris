import React, { useState, cloneElement, useMemo } from 'react';

import { Checkbox } from './Checkbox';
import { validate } from '../Shared';

import { Props } from './CheckboxSet.types';
import { generateUID, withIris } from '../../../utils';

export const CheckboxSet = withIris<HTMLInputElement, Props>(
  CheckboxSetComponent
);

function CheckboxSetComponent({
  children,
  coupled,
  forwardRef,
  messages,
  status,
  theme,
  toggled,
  onChange,
  disabled,
  ...props
}: Props) {
  const UID = useMemo(() => generateUID(), []);
  const UIDs = useMemo(
    () => children.map(() => generateUID()),
    [children]
  );

  const all = (boolean) =>
    coupled
      ? children.map(() => boolean)
      : [...children.map(() => boolean), boolean];

  const [checks, setChecks] = useState(all(false));

  if (
    !validate(children, 'checkbox') &&
    process.env.NODE_ENV === 'development'
  )
    console.warn('Unable to validate children on CheckboxSet');

  const allChecked = checks.every((check) => check);
  const someChecked = !allChecked && checks.some((check) => check);
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
        disabled={disabled}
        onChange={(e) => {
          parentClick();
          onChange && onChange(e);
        }}
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
              disabled: disabled,
              onChange: (e) => {
                setChecks(toggle(i));
                child.props.onChange && child.props.onChange(e);
              },
              readOnly: true,
            })
          )}
        </div>
      )}
    </div>
  );
}

const toggle = (index) => (checked) =>
  checked.map((val, i) => (index === i ? !val : val));
