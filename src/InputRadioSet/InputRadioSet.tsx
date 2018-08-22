import React, { SFC } from 'react';
import { InputRadioSetProps } from './InputRadioSetTypes';
import FieldSet from '../FieldSet/FieldSet';
import { FieldSetProps } from '../FieldSet/FieldSetTypes';
import InputRadio from '../InputRadio/InputRadio';

const InputRadioSet: SFC <
    InputRadioSetProps &
    FieldSetProps &
    React.HTMLProps<HTMLFieldSetElement>
> = ({
    format = 'neutral',
    name,
    radios,
    theme = 'default',
    ...filteredProps
}) => {

    const radioSet = radios.map((key, i) => (
        <InputRadio
            name={name}
            format={format}
            theme={theme}
            {...key}
            key={i}
        />
    ));

    return (
        <FieldSet
            {...filteredProps}
            format={format}
            theme={theme}
        >
            {radioSet}
        </FieldSet>
    );
};

export default InputRadioSet;
