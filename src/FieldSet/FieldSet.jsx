// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './FieldSet.scss';
// $FlowFixMe
import InputLabel from '../InputLabel/InputLabel';
import InputMessageArea from '../InputMessageArea/InputMessageArea';

const displayName = 'FieldSet';

type Props = {
    children: React$Element<*>,
    className?: string,
    errorMsg?: React$Element<*>,
    format?: 'negative' | 'positive' | 'neutral',
    helperMsg?: React$Element<*>,
    label: string | React$Element<*>,
    theme?: 'default' | 'dark',
};

const FieldSet = ({
                        className,
                        children,
                        errorMsg,
                        format = 'neutral',
                        helperMsg,
                        label,
                        theme = 'default',
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.FieldSet,
        className
    );

    return (
            <fieldset
                {...filteredProps}
                className={componentClass}
            >
                <InputLabel
                    format={format}
                    element="legend"
                    theme={theme}
                >
                    {label}
                </InputLabel>
                <InputMessageArea
                    errorMsg={errorMsg}
                    format="sublabel"
                    helperMsg={helperMsg}
                />
                {children}
            </fieldset>
    );
};

FieldSet.displayName = displayName;

export default FieldSet;
