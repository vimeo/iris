import React, { FunctionComponent } from 'react';

import { Pop } from '../PopOver/PopOver.minors';
import { IrisProps } from '../../utils';

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

function OptionFaux({
  children = null,
  disabled = null,
  href = null,
  ...props
}) {
  const styleDisabled = disabled
    ? ({
        pointerEvents: 'none',
        opacity: 0.4,
      } as const)
    : {};

  if (href) {
    const childString = children.filter(isString);
    const childNodes = children.filter(notString);

    return (
      <a href={href}>
        <Pop.Item {...props}>
          <span style={styleDisabled}>{childString}</span>
          <span style={{ pointerEvents: 'none' }}>{childNodes}</span>
        </Pop.Item>
      </a>
    );
  }

  return (
    <Pop.Item {...props} style={styleDisabled}>
      {children}
    </Pop.Item>
  );
}
