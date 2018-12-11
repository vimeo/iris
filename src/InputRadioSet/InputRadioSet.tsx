import React, { SFC, HTMLProps } from 'react';
import { InputRadioSetProps } from './InputRadioSetTypes';
import { FieldSet } from '../FieldSet/FieldSet';
import { FieldSetProps } from '../FieldSet/FieldSetTypes';
import { InputRadio } from '../InputRadio/InputRadio';

export const InputRadioSet: SFC<
    InputRadioSetProps & FieldSetProps & HTMLProps<HTMLFieldSetElement>
> = ({ format = 'neutral', name, radios, theme = 'default', ...props }) => (
    <FieldSet {...props} format={format} theme={theme}>
        {radios.map((key, i) => (
            <InputRadio
                name={name}
                format={format}
                theme={theme}
                {...key}
                key={i}
            />
        ))}
    </FieldSet>
);
