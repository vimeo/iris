import React, {
  useState,
  cloneElement,
  useMemo,
  useEffect,
} from 'react';

import { Checkbox } from './Checkbox';
import { validate } from '../Shared';

import { Props } from './CheckboxSet.types';
import { generateUID as gUID, withIris } from '../../../utils';

export const CheckboxSet = withIris<HTMLInputElement, Props>(
  CheckboxSetComponent
);

function CheckboxSetComponent({
  children,
  coupled,
  defaultChecked,
  disabled,
  forwardRef,
  messages,
  onChange,
  status,
  theme,
  toggled,
  ...props
}: Props) {
  const UID = useMemo(() => gUID(), []);
  const UIDs = useMemo(() => children.map(() => gUID()), [children]);

  function all(boolean: boolean) {
    if (coupled) {
      return children.map((child, i) => {
        if (!child.props.disabled) {
          return boolean;
        } else {
          return checks?.[i] || child.props.defaultChecked;
        }
      });
    } else {
      return [
        ...children.map((child, i) => {
          if (!child.props.disabled) {
            return boolean;
          } else {
            return checks?.[i] || child.props.defaultChecked;
          }
        }),
        boolean,
      ];
    }
  }

  const [checks, checksSet] = useState(all(false));

  useEffect(() => {
    const initialState = coupled
      ? children.map((child) =>
          typeof defaultChecked === 'undefined'
            ? !!child.props.defaultChecked
            : !child?.props?.disabled && !!defaultChecked
        )
      : [
          ...children.map((child) => !!child.props.defaultChecked),
          !!defaultChecked,
        ];

    checksSet(initialState);
  }, []);

  if (!validate(children, 'checkbox') && DEV)
    console.warn('Unable to validate children on CheckboxSet');

  const allChecked = checks.every((check) => check);
  const someChecked = !allChecked && checks.some((check) => check);
  const parentChecked = toggled
    ? [...checks].pop()
    : allChecked || someChecked;

  const parentClick = () =>
    parentChecked
      ? checksSet(all(false))
      : coupled
      ? checksSet(all(true))
      : checksSet(toggle(children.length));

  function childClone(child, i) {
    return cloneElement(child, {
      checked: checks[i],
      key: i,
      id: `checkbox-${i}-${UIDs[i]}`,
      name: UID,
      value: UIDs[i],
      disabled: child?.props?.disabled || disabled,
      defaultChecked: child?.props?.defaultChecked,
      onChange: (e) => {
        checksSet(toggle(i));
        child.props.onChange && child.props.onChange(e);
      },
      readOnly: true,
    });
  }

  return (
    <div ref={forwardRef}>
      <Checkbox
        checked={parentChecked}
        indeterminate={someChecked}
        disabled={disabled}
        onChange={(event) => {
          parentClick();
          onChange?.(event);
        }}
        readOnly
        {...props}
      />
      {(!toggled || parentChecked) && (
        <div style={{ paddingLeft: '1rem' }}>
          {children.map(childClone)}
        </div>
      )}
    </div>
  );
}

const DEV = process.env.NODE_ENV === 'development';

const toggle = (index) => (checked) =>
  checked.map((val, i) => (index === i ? !val : val));
