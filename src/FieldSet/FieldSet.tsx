import React, { SFC, HTMLProps } from 'react';
import { FieldSetProps } from './FieldSetTypes';
import { FieldSetStyled } from './FieldSetStyled';
import InputLabel from '../InputLabel/InputLabel';
import InputMessageArea from '../InputMessageArea/InputMessageArea';

const FieldSet: SFC<FieldSetProps & HTMLProps<HTMLFieldSetElement>> = ({
    children,
    errorMsg,
    format = 'neutral',
    helperMsg,
    label,
    theme = 'default',
    ref: _,
    ...filteredProps
}) => (
    <FieldSetStyled {...filteredProps}>
        <InputLabel format={format} element="legend" theme={theme}>
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

export default FieldSet;
