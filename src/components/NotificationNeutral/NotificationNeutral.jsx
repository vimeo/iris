// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './NotificationNeutral.scss';
import Notification from '../Notification/Notification';
import InfoIcon from '../../globals/svg/info_iris.svg';
import dropInOut from '../../animations/dropInOut/dropInOut';

const displayName = 'NotificationNeutral';

const defaultProps = {
    hasIcon: true,
};

type Props = {
    children: string,
    className?: string,
    hasIcon?: boolean,
    onDismiss?: any,
};

// Animation Decorator
@dropInOut

class NotificationNeutral extends React.Component {

    static defaultProps: Object;

    constructor(props: Props) {
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

NotificationNeutral.defaultProps = defaultProps;


export default NotificationNeutral;
