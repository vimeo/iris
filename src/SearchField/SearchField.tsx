import React, { SFC } from 'react';
import { InputText } from '../InputText/InputText';
import { ButtonInlineInputText } from '../ButtonInlineInputText/ButtonInlineInputText';
import { Search } from '../Icons';
import { Omit } from '../Utils/Omit';
import { SearchFieldProps } from './SearchFieldTypes';

export const SearchField: SFC<
    SearchFieldProps & Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'size'>
> = ({
    buttonFormat = 'subtle',
    buttonLabel,
    buttonProps,
    fieldLabel,
    icon = <Search />,
    isInline = true,
    showLabel = false,
    size = 'md',
    ...props
}) => (
    <InputText
        {...props}
        size={size}
        label={fieldLabel}
        isInline={isInline}
        showLabel={showLabel}
        inlineButton={
            <ButtonInlineInputText
                {...buttonProps}
                title={buttonLabel}
                icon={icon}
                format={buttonFormat}
                size={size}
            />
        }
    />
);
