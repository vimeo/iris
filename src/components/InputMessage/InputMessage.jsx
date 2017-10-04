// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputMessage.scss';

const displayName = 'InputMessage';

const defaultProps = {
    format: 'helper',
};

type Props = {
    className: string,
    format: 'helper' | 'negative',
};

class InputMessage extends React.Component {

    static defaultProps: Object;

    constructor(props: Props) {
        super(props);
    }

    render() {

        // filter out props that are not meant to be passed in as an attribute from props and store the rest as "filteredProps" to be printed into the component as attrubutes in the tag (e.g. HTML attribute pass-through, event handlers)
        const {
            format,
            className,
            ...filteredProps
        } = this.props;

        // className builder
        const componentClass = classNames(
            styles.InputMessage,
            (format === 'negative' ? styles.negative : null),
            className
        );

        return (
                <div
                    {...filteredProps}
                    className={componentClass}
                />
        );
    }
}

InputMessage.displayName = displayName;

InputMessage.defaultProps = defaultProps;

export default InputMessage;
