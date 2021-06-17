import React, { FunctionComponent } from 'react';
import { Pop } from '../../../layout';

import { IrisProps } from '../../../utils';

type OptionProps = any;

export interface Minors {
  Option: FunctionComponent<IrisProps<OptionProps>>;
}

export function Option({ faux = false, ...props }) {
  return faux ? (
    <OptionFaux {...props} />
  ) : (
    <OptionNative {...props} />
  );
}

function OptionNative({
  children = null,
  disabled = null,
  ...props
}) {
  return (
    <option disabled={disabled} {...props}>
      {children}
    </option>
  );
}

const isString = (c) => typeof c === 'string';
const notString = (c) => typeof c !== 'string';

const styleDisabled = {
  pointerEvents: 'none',
  opacity: 0.4,
} as const;

function OptionFaux({
  children = null,
  disabled = null,
  href = null,
  ...props
}) {
  if (href) {
    const childString = children.filter(isString);
    const childNodes = children.filter(notString);

    return (
      <a href={href}>
        <Pop.Item {...props}>
          <span style={disabled && styleDisabled}>{childString}</span>
          <span style={{ pointerEvents: 'none' }}>{childNodes}</span>
        </Pop.Item>
      </a>
    );
  }

  return (
    <Pop.Item {...props} style={disabled && styleDisabled}>
      {children}
    </Pop.Item>
  );
}
