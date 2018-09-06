import React, { SFC } from 'react';
import InputText from '../InputText/InputText';
import ButtonInlineInputText from '../ButtonInlineInputText/ButtonInlineInputText';
// @ts-ignore
import SearchIcon from '../icons/search.svg';
import { Omit } from '../globals/js/type-helpers';
import { SearchFieldProps } from './SearchFieldTypes';

const SearchField: SFC<
    SearchFieldProps & Omit<React.HTMLProps<HTMLInputElement>, 'type'>
> = ({
    buttonFormat = 'subtle',
    buttonProps,
    buttonLabel,
    fieldLabel,
    showLabel = false,
    isInline = true,
    size = 'md',
    ...filteredProps
}) => {
    const ButtonComponent = (
        <ButtonInlineInputText
            {...buttonProps}
            title={buttonLabel}
            icon={<SearchIcon />}
            format={buttonFormat}
            size={size}
        />
    );

    return (
        <InputText
            {...filteredProps}
            showLabel={showLabel}
            label={fieldLabel}
            inlineButton={ButtonComponent}
            isInline={isInline}
            size={size}
        />
    );
};

export default SearchField;
