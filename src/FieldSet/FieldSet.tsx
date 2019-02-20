import React, { SFC } from 'react';
import { FieldSetProps } from './FieldSetTypes';
import { InputLabel } from '../InputLabel/InputLabel';
import { InputMessageArea } from '../InputMessageArea/InputMessageArea';

export const FieldSet: SFC<FieldSetProps> = ({
  children,
  errorMsg,
  format = 'neutral',
  helperMsg,
  label,
  theme = 'default',
  ...props
}) => (
  <div {...props}>
    <InputLabel format={format} element="legend" theme={theme}>
      {label}
    </InputLabel>
    <InputMessageArea
      errorMsg={errorMsg}
      format="sublabel"
      helperMsg={helperMsg}
    />
    {children}
  </div>
);
