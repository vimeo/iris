// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputMessageArea.scss';
import InputMessage from '../InputMessage/InputMessage';
import SlideUpDown from '../SlideUpDown';

const displayName = 'InputMessageArea';

type Props = {
    className?: string,
    errorMsg?: string | React$Element<*>,
    helperMsg?: string | React$Element<*>,
    format?: 'bottom' | 'sublabel',
    theme?: 'default' | 'dark',
};

const InputMessageArea = ({
                        className,
                        errorMsg,
                        format = 'bottom',
                        helperMsg,
                        theme,
                        ...filteredProps
                    }: Props): React$Element<*> => {

        // className builder
    const componentClass = classNames(
            styles.InputMessageArea,
            styles[format],
            className
        );

    const errorMessageElement = (
            <InputMessage
                format="negative"
                theme={theme}
            >
                {errorMsg}
            </InputMessage>
        );

    const helperMessageElement = (
            <InputMessage
                format="helper"
                theme={theme}
            >
                {helperMsg}
            </InputMessage>
        );

    const hasHelperMsg = helperMsg === undefined;
    const hasErrorMsg = errorMsg === undefined;

    return (
                <div
                    {...filteredProps}
                    className={componentClass}
                >
                    <SlideUpDown isHidden={hasHelperMsg}>
                        {helperMessageElement}
                    </SlideUpDown>
                    <SlideUpDown isHidden={hasErrorMsg}>
                        {errorMessageElement}
                    </SlideUpDown>
                </div>
    );
};

InputMessageArea.displayName = displayName;

export default InputMessageArea;
