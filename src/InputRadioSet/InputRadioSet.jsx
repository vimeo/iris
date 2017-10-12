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

    const radioSet = [];

    radios.map(function(key, i) {
        const thisRadioData = radios[i];
        radioSet.push(<InputRadio name={name} format={format} {...thisRadioData} key={i} />);
    });

    return (
            <FieldSet
                {...filteredProps}
                errorMsg={errorMsg}
                format={format}
                helperMsg={helperMsg}
                className={componentClass}
                label={label}
            >
                {radioSet}
            </FieldSet>
    );
};

InputRadioSet.displayName = displayName;

export default InputRadioSet;
