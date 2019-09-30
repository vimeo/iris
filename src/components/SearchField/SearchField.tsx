import React, { SFC } from 'react';
import { InputText } from '../InputText/InputText';
import { ButtonInlineInputText } from '../ButtonInlineInputText/ButtonInlineInputText';
import { Search } from '../../icons';
import { SearchFieldProps } from './SearchFieldTypes';

export const SearchField: SFC<SearchFieldProps> = ({
  buttonFormat = 'subtle',
  buttonLabel,
  buttonProps,
  fieldLabel,
  icon = <Search />,
  showLabel = false,
  size = 'md',
  ...props
}) => (
  <InputText
    {...props}
    size={size}
    label={fieldLabel}
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
