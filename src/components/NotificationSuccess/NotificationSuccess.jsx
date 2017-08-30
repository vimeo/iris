// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './NotificationSuccess.scss';
import Notification from '../Notification/Notification';
import SuccessIcon from '../../globals/svg/checkmark.svg';

const displayName = 'NotificationSuccess';

type Props = {
    children: string,
    className?: string,
    hasIcon?: boolean,
    onDismiss?: any,
};

const NotificationSuccess = ({
                        children,
                        className,
                        hasIcon = true,
                        onDismiss,
                        ...filteredProps
                    }: Props): React$Element<*> => {

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
};

NotificationSuccess.displayName = displayName;

export default NotificationSuccess;
