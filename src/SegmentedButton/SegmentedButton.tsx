import React from 'react';
import { SegmentedButtonProps } from './SegmentedButtonTypes';
import { SegmentedButtonSetOptionProps } from '../SegmentedButtonSet/SegmentedButtonSetTypes';
import {
    LabelStyled,
    InputStyled,
    OptionStyled,
} from './SegmentedButtonStyled';

const SegmentedButtonSetButton: React.SFC<SegmentedButtonProps & SegmentedButtonSetOptionProps & React.HTMLProps<HTMLDivElement> > = ({
    //@ts-ignore
    children,
    disabled,
    id,
    format = 'light',
    inputProps = {ref:false},
    name,
    optionLabel,
    //@ts-ignore
    ref: _, // filter out ref from styled component
    ...filteredProps
}) => {

    const {
        //@ts-ignore
        ref: _,
        ...inputPropsFiltered
    } = inputProps;
    
    
    return (
            <LabelStyled
                htmlFor={id}
            >
                <InputStyled
                    {...inputPropsFiltered}
                    name={name}
                    id={id}
                    type="radio" 
                    disabled={disabled} 
                />
                    <OptionStyled
                        {...filteredProps}
                        disabled={disabled}
                        format={format}
                        size="md"
                    >
                        {optionLabel}
                    </OptionStyled>
            </LabelStyled>
    );
};

export default SegmentedButtonSetButton;
