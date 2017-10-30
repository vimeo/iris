// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputWrapperInline.scss';
import InputMessageArea from '../InputMessageArea/InputMessageArea';

const displayName = 'InputWrapperInline';

type Props = {
    className?: string,
    children: React$Element<*>,
    errorMsg?: React$Element<*>,
    helperMsg?: React$Element<*>,
    theme: 'default' | 'dark',
};

const InputWrapperInline = ({
                        className,
                        children,
                        errorMsg,
                        helperMsg,
                        theme,
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.InputWrapperInline,
        className
    );

    return (
            <div
                {...filteredProps}
                className={componentClass}
            >
            {children}
            <InputMessageArea
                errorMsg={errorMsg}
                helperMsg={helperMsg}
                theme={theme}
            />
            </div>
    );
};

InputWrapperInline.displayName = displayName;

export default InputWrapperInline;
