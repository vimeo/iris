import React from 'react';
import { useMemo } from 'react';

import { Props } from './Input.types';
import { Text } from './Text';
import { Mark } from './Mark';

import { generateUID, withIris } from '../../../utils';

export const Input = withIris<HTMLInputElement, Props>(
  InputComponent,
);

function InputComponent({ type = 'text', ...props }: Props) {
  const UID = useMemo(() => generateUID(), []);
  if (!props.name) props.name = UID;
  if (!props.id) props.id = UID;

  switch (type) {
    case 'text':
    case 'password':
    case 'email':
      return <Text type={type} {...props} />;
    default:
      if (!props.value) props.value = UID;
      return <Mark type={type} {...props} />;
  }
}
