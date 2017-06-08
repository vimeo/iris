// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputMessageArea.scss';
import InputMessage from '../InputMessage/InputMessage';
import { TransitionGroup } from 'react-transition-group';


const displayName = 'InputMessageArea';

type Props = {
    className?: string,
    errorMsg?: React$Element<*>,
    helperMsg?: React$Element<*>,
};

const InputMessageArea = ({
                        className,
                        errorMsg,
                        helperMsg,
                        ...filteredProps
                    }: Props): React$Element<*> => {

        // className builder
    const componentClass = classNames(
            styles.InputMessageArea,
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
                    <TransitionGroup>
                        {helperMsg ? helperMessageElement : null}
                    </TransitionGroup>
                    <TransitionGroup>
                        {errorMsg ? errorMessageElement : null}
                    </TransitionGroup>
                </div>
    );
};

InputMessageArea.displayName = displayName;

export default InputMessageArea;
