import React from 'react';
import classNames from 'classnames';
import styles from './InputMessageArea.scss';
import InputMessage from '../InputMessage/InputMessage';
import { TransitionGroup } from 'react-transition-group';


const displayName = 'InputMessageArea';


const propTypes = {
    errorMsg: React.PropTypes.node,
    helperMsg: React.PropTypes.node,
    className: React.PropTypes.string,
};
class InputMessageArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        // filter out props that are not meant to be passed in as an attribute from props and store the rest as "filteredProps" to be printed into the component as attrubutes in the tag (e.g. HTML attribute pass-through, event handlers)
        const {
            className,
            errorMsg,
            helperMsg,
            ...filteredProps
        } = this.props;

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
    }
}

InputMessageArea.displayName = displayName;

InputMessageArea.propTypes = propTypes;

export default InputMessageArea;
