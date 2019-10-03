import React, { SFC, HTMLProps } from 'react';

import { RadioSetProps } from './RadioSetTypes';
import { FieldSet } from '../FieldSet/FieldSet';
import { FieldSetProps } from '../FieldSet/FieldSetTypes';
import { Radio } from '../Radio/Radio';

export const RadioSet: SFC<
  RadioSetProps & FieldSetProps & HTMLProps<HTMLFieldSetElement>
> = ({
  format = 'neutral',
  name,
  radios,
  theme = 'default',
  ...props
}) => (
  <FieldSet {...props} format={format} theme={theme}>
    {radios.map((key, i) => (
      <Radio
        name={name}
        format={format}
        theme={theme}
        {...key}
        key={i}
      />
    ))}
  </FieldSet>
);
