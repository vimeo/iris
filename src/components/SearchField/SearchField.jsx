// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './SearchField.scss';
import ButtonIconOnly from '../ButtonIconOnly/ButtonIconOnly';
import InputText from '../InputText/InputText';
import SearchIcon from '../../globals/svg/search_iris.svg';

const displayName = 'SearchField';

type Props = {
    buttonLabel: string,
    buttonProps?: Object,
    className?: string,
    fieldLabel: string,
    id: string,
    isInline?: boolean,
    size?: 'sm' | 'md',
};

const SearchField = ({
                        buttonLabel,
                        buttonProps,
                        className,
                        id,
                        fieldLabel,
                        isInline = true,
                        size = 'md',
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.SearchField,
        className
    );

    const buttonSize = size === 'lg' ? 'md' : 'sm';

    return (
            <div className={styles.Wrapper}>
                    <InputText
                        {...filteredProps}
                        className={componentClass}
                        showLabel={false}
                        size={size}
                        id={id}
                        label={fieldLabel}
                        type="search"
                    />
                    <ButtonIconOnly
                        {...buttonProps}
                        className={styles.SubmitButton}
                        icon={<SearchIcon title={buttonLabel} />}
                        format="alternative"
                        size={buttonSize}
                    />
            </div>
    );
};

SearchField.displayName = displayName;

export default SearchField;
