import React from 'react';
import classNames from 'classnames';
import styles from './NotificationSuccess.css';
import Notification from '../Notification/Notification';
import SuccessIcon from '../../globals/svg/checkmark_iris';
import dropInOut from '../../animations/dropInOut/dropInOut';

const displayName = 'NotificationSuccess';

const propTypes = {
    children: React.PropTypes.node.isRequired,
    className: React.PropTypes.string,
    hasIcon: React.PropTypes.bool,
    onDismiss: React.PropTypes.func,
};

const defaultProps = {
    hasIcon: true,
};

// Animation Decorator
@dropInOut

class NotificationSuccess extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        // filter out props that are not meant to be passed in as an attribute from props and store the rest as "filteredProps" to be printed into the component as attrubutes in the tag (e.g. HTML attribute pass-through, event handlers)
        const {
            hasIcon,
            onDismiss,
            className,
            children,
            ...filteredProps
        } = this.props;

        // className builder
        const componentClass = classNames(
            styles.NotificationSuccess,
            className
        );

        return (
            <Notification
                {...filteredProps}
                icon={hasIcon ? <SuccessIcon className={styles.iconColor} /> : null}
                onDismiss={onDismiss}
                dismissIconClassName = {styles.dismissIconColor}
                className={componentClass}
            >
                    {children}
            </Notification>
        );
    }
}

NotificationSuccess.displayName = displayName;

NotificationSuccess.propTypes = propTypes;

NotificationSuccess.defaultProps = defaultProps;


export default NotificationSuccess;
