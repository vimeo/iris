// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputLabelInline.scss';
import InputLabelStateIcon from '../InputLabelStateIcon/InputLabelStateIcon';
import { ParagraphMd } from '../Type';

const displayName = 'InputLabelInline';

type Props = {
    className?: string,
    children: React$Element<*>,
    disabled?: boolean,
    format?: 'negative' | 'positive' | 'neutral',
    fieldLevelErrors?: boolean,
    hideLabel?: boolean,
};

const InputLabelInline = ({
                            className,
                            children,
                            format = 'neutral',
                            fieldLevelErrors,
                            hideLabel,
                            disabled,
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.InputLabelInline,
        styles.md,
        styles[format],
        (disabled ? styles.isDisabled : null),
        (hideLabel ? styles.isHiddenLabel : null),
        className
    );

    const Icon = (
            <InputLabelStateIcon
                format = {format}
            />
    );

    return (
            <ParagraphMd
                {...filteredProps}
                element="label"
                className={componentClass}
            >
                <span>
                    {children}
                    { format !== 'neutral' && fieldLevelErrors ? Icon : null}
                </span>
            </ParagraphMd>
    );
};

InputLabelInline.displayName = displayName;

export default InputLabelInline;
