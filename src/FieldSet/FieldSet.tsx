// @flow
import React from 'react';
import { FieldSetProps } from './FieldSetTypes';
import { FieldSetStyled } from './FieldSetStyled';
import InputLabel from '../InputLabel/InputLabel';
import InputMessageArea from '../InputMessageArea/InputMessageArea';

const FieldSet: React.SFC< FieldSetProps & React.HTMLProps< HTMLFieldSetElement > >  = ({
    children,
    errorMsg,
    format = 'neutral',
    helperMsg,
    label,
    theme = 'default',
    ref:_,
    ...filteredProps
}) => {
    return (
            <FieldSetStyled
                {...filteredProps}
            >
                <InputLabel
                    format={format}
                    element="legend"
                    theme={theme}
                >
                    {label}
                </InputLabel>
                <InputMessageArea
                    errorMsg={errorMsg}
                    format="sublabel"
                    helperMsg={helperMsg}
                />
                {children}
            </FieldSetStyled>
    );
};

export default FieldSet;
