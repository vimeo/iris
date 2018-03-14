// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputMessage.scss';
import { ParagraphSm } from '../Type';
// $FlowFixMe
const displayName = 'InputMessage';

type Props = {
    className?: string,
    children: string | React$Element<*>,
    format: 'helper' | 'negative',
    theme?: 'default' | 'dark',
};

const InputMessage = (props: Props): React$Element<*> => {

    const {
        format = 'helper',
        className,
        children,
        theme = 'default',
        ...filteredProps
    } = props;

    // className builder
    const componentClass = classNames(
        styles.InputMessage,
        styles[theme + 'Theme'],
        (format === 'negative' ? styles.negative : null),
        className
    );

    const ariaRole = format === 'negative' ? 'alert' : 'note';

    return (
            <ParagraphSm
                {...filteredProps}
                element="span"
                className={componentClass}
                role={ariaRole}
            >
                {children}
            </ParagraphSm>
    );
};


InputMessage.displayName = displayName;


export default InputMessage;
