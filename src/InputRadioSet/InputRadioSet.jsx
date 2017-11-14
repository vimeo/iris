// @flow

import React from 'react';
import classNames from 'classnames';
import InputRadio from '../InputRadio/InputRadio';
import FieldSet from '../FieldSet/FieldSet';

const displayName = 'InputRadioSet';

type Props = {
    className?: string,
    disabled?: boolean,
    errorMsg?: React$Element<*>,
    format?: 'negative' | 'positive' | 'neutral',
    helperMsg?: React$Element<*>,
    id: string,
    label: string | React$Element<*>,
    name: string,
    radios: Array<{label: string | React$Element<*>, id: string, value: string}>,
    theme?: 'default' | 'dark',
};


const InputRadioSet = ({
                        className,
                        disabled,
                        errorMsg,
                        format = 'neutral',
                        helperMsg,
                        label,
                        id,
                        name,
                        radios,
                        theme = 'default',
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        className
    );

    const radioSet = radios.map(function(key, i) {
        const thisRadioData = radios[i];
        return (
            <InputRadio
                name={name}
                format={format}
                theme={theme}
                {...thisRadioData}
                key={i}
            />
        );
    });

    return (
            <FieldSet
                {...filteredProps}
                errorMsg={errorMsg}
                format={format}
                helperMsg={helperMsg}
                className={componentClass}
                label={label}
                theme={theme}
            >
                {radioSet}
            </FieldSet>
    );
};

InputRadioSet.displayName = displayName;

export default InputRadioSet;
