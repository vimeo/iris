// @flow
import React from 'react';
import SearchIcon from '../../globals/svg/search.svg';
import InputText from '../InputText/InputText';
import ButtonInlineInputText from '../ButtonInlineInputText/ButtonInlineInputText';

const displayName = 'SearchField';

type Props = {
    buttonFormat?: 'subtle' | 'neutral' | 'strong',
    buttonLabel: string,
    buttonProps?: Object,
    fieldLabel: string,
    id: string,
    isInline?: boolean,
    showLabel?: boolean,
    size?: 'md' | 'lg',
};

const SearchField = ({
                        buttonFormat = 'subtle',
                        fieldLabel,
                        showLabel = false,
                        isInline = true,
                        size = 'md',
                        ...filteredProps
                    }: Props): React$Element<*> => {

    const ButtonComponent = (
        <ButtonInlineInputText
            icon = {<SearchIcon />}
            format="subtle"
            size={size}
        />
    );

    return (
            <InputText
                {...filteredProps}
                showLabel={showLabel}
                label={fieldLabel}
                inlineButton={ButtonComponent}
                isInline = {isInline}
                size={size}
            />
    );
};

SearchField.displayName = displayName;

export default SearchField;
