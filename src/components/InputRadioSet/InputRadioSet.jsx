// @flow

import React from 'react';
import classNames from 'classnames';
import InputLabel from '../InputLabel/InputLabel';
import InputRadio from '../InputRadio/InputRadio';
import InputWrapperInline from '../InputWrapperInline/InputWrapperInline';

const displayName = 'InputRadioSet';

type Props = {
    className?: string,
    disabled?: boolean,
    errorMsg?: React$Element<*>,
    format?: 'negative' | 'positive' | 'neutral',
    helperMsg?: React$Element<*>,
    id: string,
    label: string,
    name: string,
    radios: Array<{label: string, id: string, value: string}>,
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
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        className
    );

    const labelElement = (
        <InputLabel disabled={disabled} htmlFor={id}>{label}</InputLabel>
    );

    const radioSet = [];

    radios.map(function(key, i) {
        const thisRadioData = radios[i];
        radioSet.push(<InputRadio name={name} format={format} {...thisRadioData} key={i} />);
    });

    return (
            <InputWrapperInline
                {...filteredProps}
                errorMsg={errorMsg}
                helperMsg={helperMsg}
                className={componentClass}
            >
                {label ? labelElement : null}
                {radioSet}
            </InputWrapperInline>
    );
};

InputRadioSet.displayName = displayName;

export default InputRadioSet;
