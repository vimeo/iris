import React, { SFC } from 'react';
import { WrapperStyled } from './SegmentedButtonSetStyled';
import { SegmentedButtonSetProps} from './SegmentedButtonSetTypes';
import SegmentedButton from '../SegmentedButton';
import InputLabel from '../InputLabel';

const buildOptions = (options, name, format) =>  options.map( (option, i) => (
    <SegmentedButton
        format={format}
        key={`option-${name}-${i}`}
        name={name}
        {...option}
    />));

// ==================== SegmentedButtonSet

const SegmentedButtonSet: SFC <
    SegmentedButtonSetProps & 
    React.HTMLProps<HTMLDivElement>
> = ({
        //@ts-ignore
        children,
        format = 'light',
        name,
        groupLabel,
        options,
        showGroupLabel = true,
        ref:_,
    ...filteredProps
}) => (
    <fieldset
        aria-label={!showGroupLabel ? groupLabel : null}
    >
        {showGroupLabel && groupLabel && <InputLabel>{groupLabel}</InputLabel>}
        <WrapperStyled
            {...filteredProps}
        >
            {buildOptions(options, name, format)}
        </WrapperStyled>
    </fieldset>
);

export default SegmentedButtonSet;
