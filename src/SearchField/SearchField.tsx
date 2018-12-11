import React, { SFC } from 'react';
import { InputText } from '../InputText/InputText';
import { ButtonInlineInputText } from '../ButtonInlineInputText/ButtonInlineInputText';
import SearchIcon from '../icons/search.svg';
import { Omit } from '../globals/js/type-helpers';
import { SearchFieldProps } from './SearchFieldTypes';

export const SearchField: SFC<
    SearchFieldProps & Omit<React.HTMLProps<HTMLInputElement>, 'type'>
> = ({
    buttonFormat = 'subtle',
    buttonLabel,
    buttonProps,
    fieldLabel,
    icon = <SearchIcon />,
    isInline = true,
    showLabel = false,
    size = 'md',
    ...props
}) => {
    const ButtonComponent = (
        <ButtonInlineInputText
            {...buttonProps}
            title={buttonLabel}
            icon={icon}
            format={buttonFormat}
            size={size}
        />
    );

    return (
        <InputText
            {...props}
            showLabel={showLabel}
            label={fieldLabel}
            inlineButton={ButtonComponent}
            isInline={isInline}
            size={size}
        />
    );
};
