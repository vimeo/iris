// @flow
import React from 'react';
// $FlowFixMe
import InputText from '../InputText/InputText';
import ButtonInlineInputText from '../ButtonInlineInputText/ButtonInlineInputText';
import SearchIcon from '../icons/search.svg';

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
                        buttonProps,
                        buttonLabel,
                        fieldLabel,
                        showLabel = false,
                        isInline = true,
                        size = 'md',
                        ...filteredProps
                    }: Props): React$Element<*> => {

    const ButtonComponent = (
        <ButtonInlineInputText
            {...buttonProps}
            title={buttonLabel}
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
