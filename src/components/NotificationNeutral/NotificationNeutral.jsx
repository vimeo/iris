
import React from 'react';
import classNames from 'classnames';
import styles from './NotificationNeutral.scss';
import Notification from '../Notification/Notification';
import InfoIcon from '../../globals/svg/info_iris';
import dropInOut from '../../animations/dropInOut/dropInOut';

const displayName = 'NotificationNeutral';

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

class NotificationNeutral extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            hasIcon,
            onDismiss,
            className,
            children,
            ...filteredProps
        } = this.props;

    // className builder
        const componentClass = classNames(
            styles.NotificationNeutral,
            className
        );

        return (
            <Notification
                {...filteredProps}
                icon={hasIcon ? <InfoIcon className={styles.iconColor} /> : null}
                onDismiss={onDismiss}
                dismissIconClassName = {styles.dismissIconColor}
                className={componentClass}
                children
            >
                    {children}
            </Notification>
        );
    }
}

NotificationNeutral.displayName = displayName;

NotificationNeutral.propTypes = propTypes;

NotificationNeutral.defaultProps = defaultProps;


export default NotificationNeutral;
