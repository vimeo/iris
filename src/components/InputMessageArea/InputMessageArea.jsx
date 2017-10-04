// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputMessageArea.scss';
import InputMessage from '../InputMessage/InputMessage';
import SlideUpDown from '../../animations/SlideUpDown/SlideUpDown';

const displayName = 'InputMessageArea';

type Props = {
    className?: string,
    errorMsg?: React$Element<*>,
    helperMsg?: React$Element<*>,
    format?: 'bottom' | 'sublabel',
};

const InputMessageArea = ({
                        className,
                        errorMsg,
                        format = 'bottom',
                        helperMsg,
                        ...filteredProps
                    }: Props): React$Element<*> => {

        // className builder
    const componentClass = classNames(
            styles.InputMessageArea,
            styles[format],
            className
        );

    const errorMessageElement = (
            <InputMessage format="negative">
                {errorMsg}
            </InputMessage>
        );

    const helperMessageElement = (
            <InputMessage format="helper">
                {helperMsg}
            </InputMessage>
        );

    return (
                <div
                    {...filteredProps}
                    className={componentClass}
                >
                    <SlideUpDown speed="300">
                        {helperMsg ? helperMessageElement : null}
                    </SlideUpDown>
                    <SlideUpDown speed="300">
                        {errorMsg ? errorMessageElement : null}
                    </SlideUpDown>
                </div>
    );
};

InputMessageArea.displayName = displayName;

export default InputMessageArea;
