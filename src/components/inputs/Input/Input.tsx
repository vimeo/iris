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
  const isText = type === 'text' || type === 'password';

  if (!props.id) props.id = UID;
  if (!props.name) props.name = UID;
  if (!props.value && !isText) props.value = UID;

  return isText ? (
    <Text type={type} {...props} />
  ) : (
    <Mark type={type} {...props} />
  );
}
